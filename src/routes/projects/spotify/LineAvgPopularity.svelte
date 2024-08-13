<script>
  import ObservablePlot from "$lib/util/ObservablePlot.svelte";
  import * as Plot from "@observablehq/plot";
  import { from, op, rolling } from "arquero";

  export let popularity;

  let t_pop = from(popularity)
    .derive({
      hour: d => op.hours(op.parse_date(d.played_at_mtn)),
      dt: d => op.parse_date(d.played_at_mtn),
      avg: rolling(d => op.mean(d.track_popularity), [-15, 0]),
    })
</script>

<center>
  <ObservablePlot fixedWidth={true} options={{
    marks: [
      Plot.gridY(),
      Plot.dot(t_pop, {
        x: "dt",
        y: "track_popularity",
        channels: {
          track_id: "track_id"
        },
        tip: {
          fill: "black",
          format: {
            x: d => `${d}`,
            y: d => `${d}`,
            track_id: true,
          }
        }
      }),
    ],
  }} />
</center>
