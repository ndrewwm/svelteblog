<script lang="ts">
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op } from "arquero";
    import { MediaQuery } from "svelte/reactivity";

  let prefersDark = new MediaQuery('(prefers-color-scheme: dark)', false);

  let { popularity } = $props();

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
      range: prefersDark.current ? ["#E1EFE6", "#EFCB68"] : ["lightgray", "#EFCB68"],
    },
  }
</script>

<p class="mb-3">
  Spotify defines <em>popularity</em> as an integer between 0 and 100, with 100 representing a
  track with the highest possible popularity. Below is a histogram showing the popularity values
  for plays, colored for recency. This distribution reflects the entire set of <em>plays</em> (meaning
  a track's popularity is counted each time it's listened to).
</p>

<center>
  <div>
    <ObservablePlot fixedWidth={false} options={histogram} />
  </div>
</center>
