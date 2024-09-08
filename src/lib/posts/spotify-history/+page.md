---
title: Gathering my listening history from Spotify
description: Using components of the "modern data stack" to track what I've been listening to on a daily basis.
author: Andrew Moore
date: "2024-09-02"
categories: [spotify, data engineering]
slug: spotify-history
format:
  gfm:
    variant: +yaml_metadata_block
---

I've started [tracking](/projects/spotify) my listening history on Spotify. This post is a condensed write-up of how the project works. I've had a Spotify account since at least 2015, and have created a monthly playlist every month I've used it. I initially only used Spotify for music, but now it's also where I listen to podcasts and audiobooks. Similar to Gmail, it's become a service that's ubiquitous in my daily life. Each year, I've enjoyed looking at my Spotify Wrapped display, and the accompanying "Top Songs" playlist that Spotify generates. At the same time, I've always wanted a journal of what I was listening to. What does it look like when I'm getting into a new artist? What does the week before/after I attend a concert look like? Are there periods where I'm not listening to anything new, or periods where I'm not doing any listening at all? You'd need to know what your listening history looks like on a fairly fine level to get at these questions. Fortunately, you might be able to start answering some of this via Spotify's API and some automation.

After finding out there was a source for the data I was interested in, I set out to accomplish the following:

- I'd need to check on my listening history periodically throughout the day,
- I'd want to transform the resulting data into a set of facts/dimensions that makes generating reports easier,
- The results should be visualized on my website, and
- I wanted to explore approaches typical of the ["modern data stack"](https://thenewstack.io/the-architects-guide-to-the-modern-data-stack/).

You can see most of my implementation in the project's [GitHub repo](https://github.com/ndrewwm/spotify-tracks), with the visualizations living under my site's codebase. I'll describe my approach as of v2.0.0 for the project.

### Data gathering: using Prefect to request data from the Spotify API

Before any data can be modeled or visualized, it has to be moved from its source and standardized for other code to interact with. Python is often used for this kind of process, and my project is no exception. In particular, I'm using [Prefect/Prefect Cloud](https://prefect.io) for orchestration and as my execution infrastructure. With Prefect you compose workflows/pipelines as *flows*, which are simply Python functions upgraded with a `@flow` decorator. Smaller units of works within the pipeline are written as corresponding `@task` functions. Below is the definition for my flow that gathers tracks from Spotify's API. All we're really doing is authenticating, pulling the 50 most recent plays, and then inserting the resulting data into storage for later use.

```python
@flow
def pull_recent_tracks() -> None:
    """Flow to gather recent spotify tracks."""

    creds = get_credentials()
    token_valid, token = check_token(creds["access_token"])
    if not token_valid:
        token, refresh = get_token(creds["spotify_body"])
        store_tokens.submit(token, refresh)

    data = get_tracks.submit(token)
    conn = get_db.submit(creds["md_token"])
    insert_data.submit(conn, data)


if __name__ == "__main__":
    flow.from_source(
        source="https://github.com/ndrewwm/spotify-tracks.git",
        entrypoint="flows/pull_recent_tracks.py:pull_recent_tracks",
    ).deploy(
        name="spotify | pull_recent_tracks",
        work_pool_name="Managed Compute",
        schedule=CronSchedule(cron="30 8-23/2 * * *", timezone="America/Denver")
    )
```

My team at work uses Prefect for much of its integrations, and I like how lightweight it feels. Ultimately, you're writing Python with some nice enhancements. Decorating functions with `@flow` or `@task` gives you logging within Prefect's UI, automatic retries, and a visualization of task dependencies (which can help you determine which task is responsible in the case of a failure). But, most importantly Prefect provides a framework to *deploy* flows for scheduled or triggered execution. The last part of the snippet above configures a scheduled deployment within Prefect Cloud. We're telling Prefect that it should fetch the deployment's code from a GitHub repo, and that the deployment's flow runs should use a work pool called "Managed Compute". Recently, Prefect rolled out the ability for Cloud users to start running flows on [managed infrastructure](https://docs.prefect.io/3.0/deploy/infrastructure-examples/managed). This makes getting a deployment off the ground incredibly snappy; no need to set up servers or container environments. Their free tier currently includes 10 hours of monthly usage, which has been plenty for my needs.

### Transformation: using dbt-core to transform raw source data into a relational model

So, we have a feed of my listening history. Next, the data needs to be tidied up a bit for use in visualizations. In order to be used by my site, I need the data to be accessible as tables within a database. It feels logical to try and craft as much of the modeling and business-logic within that database context. This is basically the exact use case for [dbt](https://getdbt.com). dbt has achieved widespread use across industries for the way it simplifies the tasks of managing collections of data models and transformation pipelines. Users write templated SQL queries that define entities to be materialized within a data warehouse, and dbt takes care of generating (and executing) associated DDL. Below is the code used to define `fct_played_track`, the central "fact" table that represents my running listening history.

```sql
with tracks_played as (
    select * from {{ ref("stg_recent_tracks") }}
),

final as (
    select
        play_id,
        track_id,
        album_id,
        played_at,
        played_at_mtn,
        track_popularity,
        context
    from tracks_played
    order by played_at_mtn desc
)

select * from final
```

This model is quite simple, but it showcases dbt's approach of treating products of data modeling as modular components. This is best visualized by the project's DAG (directed acyclic graph), which demonstrates each model's dependencies. Use of the `ref()` function in the model's definition ties the `stg_recent_tracks` table to this one.

<center>
  <blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:j2i2dl3aow3rwprvh4hidcg4/app.bsky.feed.post/3l3cfteoikm24" data-bluesky-cid="bafyreihlwezcfwxhl3omgml6pcqmrv24bpfasg6zxbcjqgxkozvv3qvkp4"><p lang="en">I have resisted my worst instincts<br><br><a href="https://bsky.app/profile/did:plc:j2i2dl3aow3rwprvh4hidcg4/post/3l3cfteoikm24?ref_src=embed">[image or embed]</a></p>&mdash; Andrew 🧮 (<a href="https://bsky.app/profile/did:plc:j2i2dl3aow3rwprvh4hidcg4?ref_src=embed">@ndrewwm.com</a>) <a href="https://bsky.app/profile/did:plc:j2i2dl3aow3rwprvh4hidcg4/post/3l3cfteoikm24?ref_src=embed">Sep 3, 2024 at 9:41 PM</a></blockquote>
</center>
<svelte:head>
  <script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
</svelte:head>

While small, this project helped reinforce some of my learning w.r.t. dbt-core, and it's satisfying how the tool subtly encourages good practices concerning documenting and testing your work. If it's of interest, you can browse the project's dbt-docs page [here](https://ndrewwm.github.io/spotify-tracks/#!/overview) (hosted via GH pages).

### Data visualization: serving the results on my site, using SvelteKit and Observable

We're basically at the last step. Like the flow that gathers the data, the project's dbt project is orchestrated via Python from a Prefect flow. Each evening, it runs `dbt build` to generate the project's reports and tables. I've been using [Motherduck](https://motherduck.com/) for the storage/modeling side (it's duckdb, but in the cloud); after the data is ready, it's then copied over to [Turso](https://turso.tech). Ideally, I'd like to use the same platform for storing and serving data to my site, but I found Turso was a better fit for presenting data. My site provides an endpoint that queries the Turso db server-side and returns JSON data for use in Svelte components client-side. Here's a final snippet, showing how data from `fct_track_play` is binned by "popularity" and visualized as a histogram.

```js
<script>
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op } from "arquero";

  export let popularity;

  let t_pop = from(popularity)
    .derive({
      dt: d => op.parse_date(d.played_at_mtn),
    })
    .derive({
      diff: d => op.floor(op.abs(op.dayofyear(op.now()) - op.dayofyear(d.dt))),
    });
  
  let recent = t_pop
    .filter(d => d.diff <= 30)
    .derive({ set: d => "Last 30 days" });

  let out = t_pop
    .filter(d => d.diff > 30)
    .derive({ set: d => ">30 days old" })
    .concat(recent);

  let histogram = {
    title: "Popularity of tracks played",
    marks: [
      Plot.rectY(out, Plot.binX({y: "count"}, {x: "track_popularity", fill: "set"}))
    ],
    color: {
      legend: true,
      marginLeft: 300,
      domain: [">30 days old", "Last 30 days"],
      range: ["#E1EFE6", "#EFCB68"]
    },
  };
</script>

<ObservablePlot fixedWidth={true} options={histogram} />
```

I'm using [arquero](https://github.com/uwdata/arquero) for some light data munging and [Observable Plot](https://observablehq.com/plot/) for plotting. Arquero and Plot are both pleasantly reminiscent of R's `dplyr` and `ggplot2` libraries. Working solely within JS has been a big shift, but I think these two libraries have helped me breach a personal gap between static script-based visualizations and more modern web-based approaches.

### Future

So, what's next? As of when I'm writing this, v2.0.0 of the project involved an update to the project's dbt models, specifically the addition of a new report: `rpt_discovery_rate`. I expect to iterate on this report a bit, but the goal is to start following how many new artists or tracks I encounter on a weekly basis. "New" in this context simply refers to artists/tracks first appearing in the listening history. Some of these will reflect genuinely new discoveries, but it can be hard to fully distinguish novel tracks and from ones I encountered before the project started. A related concept is how long an artist (or track) "stays in rotation" after they're encountered. I need to submit a thesis project for my degree in the Spring, so maybe these areas will be a foundation for that work.

### Wrap-up and reflections

- Small custom dbt projects (like the one used in this project) might be quite useful as a pattern for different kinds of engineering tasks.

- Being able to generate a standalone docs site for your transformations is really nice.

- SQL is more approachable than python.

- You can do the work locally in DuckDB; don't need to use Motherduck necessarily.

