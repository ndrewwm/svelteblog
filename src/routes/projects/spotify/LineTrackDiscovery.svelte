<script lang="ts" >
  import { MediaQuery } from "svelte/reactivity";
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op, not, rolling } from "arquero";

  let prefersDark = new MediaQuery('(prefers-color-scheme: dark)', false);

  interface Props {
    discovery: any;
    cumulative?: boolean;
    prefersDark: boolean;
  }

  let { discovery, cumulative = false}: Props = $props();

  let data = from(discovery)
    .derive({
      dt: d => op.parse_date(d.week_dt),
    })
    .select({dt: "Date", plays: "Plays", new_tracks: "New tracks"})
    .fold(not("Date"), { as: ["var", "val"] })
    .orderby("Date");

  if (cumulative) {
    console.log("todo");
    data = data
      .groupby("var")
      .orderby("Date")
      .derive({ val: rolling(d => op.sum(d.val)) });
  }

  let line_plot = {
    // marginLeft: 100,
    color: {
      // legend: true,
      type: "categorical",
      domain: ["Plays", "New tracks"],
      range: prefersDark.current ? ["#E1EFE6", "#EFCB68"] : ["#000411", "#EFCB68"],
    },
    x: {
      label: "Week",
    },
    y: {
      label: "Count",
    },
    marks: [
      Plot.gridX({interval: "month"}),
      Plot.gridY({interval: cumulative ? 1000 : 200}),
      Plot.lineY(data, {x: "Date", y: "val", stroke: "var"}),
      Plot.text(data, Plot.selectMaxY({
        x: "Date",
        y: "val",
        z: "var",
        text: "var",
        textAnchor: "start",
        // dx: cumulative ? 5 : -30,
        dx: -40,
      })),
    ]
  }
</script>

<p class="mb-3">
  This display shows weekly counts for the number of tracks played and the number of distinct tracks
  appearing for the first time in my listening history.
</p>

<ObservablePlot fixedWidth={false} options={line_plot} />
