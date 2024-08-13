<script>
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op } from "arquero";

  export let popularity;

  let t_pop = from(popularity)
    .derive({
      set: d => "All",
      date: d => op.parse_date(d.played_at_mtn),
    })
    .derive({
      diff: d => op.floor(op.abs(op.dayofyear(op.now()) - op.dayofyear(d.date)))
    });

  let past_week = t_pop.derive({ set: d => "Past Week" }).filter(d => d.diff <= 7);
  let past_day = t_pop.derive({ set: d => "Today" }).filter(d => d.diff <= 1);
  let out = t_pop.union(past_week).union(past_day);

  let summary = out
    .groupby("set")
    .rollup({
      med: d => op.median(d.track_popularity),
    });
</script>

<p>
  Spotify defines <em>popularity</em> as an integer between 0 and 100, with 100 representing a
  track with the highest possible popularity. Overall, the median popularity value for my
  listening history is {summary.object().med}.
</p>

<center>
  <ObservablePlot fixedWidth={true} options={{
    title: "Track Popularity",
    marginLeft: 65,
    y: {
      label: "" 
    },
    marks: [
      Plot.boxX(out.objects(), {x: "track_popularity", y: "set"}),
      Plot.ruleX([0]),
    ]
  }} />
</center>

