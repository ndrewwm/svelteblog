<script>
  import ObservablePlot from '$lib/util/ObservablePlot.svelte';
  import * as Plot from "@observablehq/plot";

  export let artists;
</script>

<center>
  <ObservablePlot fixedWidth={true} options={{
    title: "Top artists from the past 30 days",
    marginLeft: 100,
    y: {label: ""},
    marks: [
      Plot.barX(artists, {x: "plays", y: "artists", sort: {y: "-x"}}),
      Plot.gridX({interval: 10, stroke: "#000411", strokeOpacity: 1, strokeWidth: 1.5}),
    ]
  }} />
</center>