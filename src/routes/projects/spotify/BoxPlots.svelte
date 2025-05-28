<script lang="ts">
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op } from "arquero";

  let { popularity } = $props();

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

<p class="mb-3">
  Overall, the median popularity value for my listening history is {summary.object().med}.
</p>

<center>
  <ObservablePlot fixedWidth={false} options={{
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

