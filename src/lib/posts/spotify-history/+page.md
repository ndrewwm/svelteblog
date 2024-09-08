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

I've started [tracking](/projects/spotify) my listening history on Spotify. I've had a Spotify account since at least 2015, and have created a monthly playlist every month I've used it. Initially I only used Spotify for music, but it's now the app I use to listen to podcasts and audiobooks. Similar to Gmail, it's become a service that's ubiquitous in my daily life. Each year, I've enjoyed looking at my Spotify Wrapped display, and the accompanying "Top Songs" playlist that Spotify generates. At the same time, I've always wanted more of a journal of what I was listening to. What does it look like when I'm getting into a new artist? What does the week before/after I attend a concert look like? Are there periods where I'm not listening to anything new, or periods where I'm not doing any listening at all? You'd need to know what your listening history looks like on a fairly fine level to get at these questions. Fortunately, you can start answering this via Spotify's API and some automation.

After finding out that you can pull recent listening history from Spotify's API, I set out to accomplish the following:

- I'd need to check on my listening history periodically throughout the day,
- I'd want to transform the resulting data into a denormalized set of facts/dimensions that makes generating reports easier,
- The results should be visualized on my website, and
- I should be making use of approaches typical of the ["modern data stack"]().

You can see the results described in the project's [GitHub repo](https://github.com/ndrewwm/spotify-tracks). I'll describe my approach as of v2.0.0 for the project.

### Data gathering: using Prefect to request data from the Spotify API

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
```

### Transformation: using dbt-core to transform raw source data into a relational model

```python
@flow
def dbt_build_and_load_turso() -> None:
    """Flow to automate the orchestration of the dbt project and loading of turso db."""

    creds = get_credentials()
    dbt_build(creds["motherduck"])
    pull_data(creds["motherduck"])
    creates, inserts = generate_ddl()
    load_turso(creates, inserts, creds)
```

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

### Data visualization: serving the results on my site, using SvelteKit and Observable

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
</script>
```

```html
<ObservablePlot fixedWidth={true} options={{
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
}} />
```

### Reflections

- Small custom dbt projects (like the one used in this project) might be quite useful as a pattern for different kinds of engineering tasks.

- Being able to generate a standalone docs site for your transformations is really nice.

- SQL is more approachable than python.

- You can do the work locally in DuckDB; don't need to use Motherduck necessarily.

### Future

- pace of discovery (roughly how many *new* artists/tracks am I encountering each week?)
- survival (how long do artists stay in rotation?)
  - I use monthly playlists to track what I'm into for a month; do artists or tracks persist much longer than that?
