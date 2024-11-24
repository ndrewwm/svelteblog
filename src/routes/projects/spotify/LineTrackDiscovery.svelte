<script >
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op, not, rolling } from "arquero";

  export let discovery;
  export let cumulative = false;

  let data = from(discovery)
    .derive({
      dt: d => op.parse_date(d.week_dt),
    })
    .select({dt: "Date", plays: "Plays", new_tracks: "New tracks"})
    .fold(not("Date"), { as: ["var", "val"] });

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
      range: ["#E1EFE6", "#EFCB68"]
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

<p>
  This display shows weekly counts for the number of tracks played and the number of distinct tracks
  appearing for the first time in my listening history.
</p>

<ObservablePlot fixedWidth={false} options={line_plot} />
