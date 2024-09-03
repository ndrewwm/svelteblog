<script>
  import ObservablePlot from '$lib/util/ObservablePlot.svelte';
  import * as Plot from "@observablehq/plot";

  export let artists;
</script>

<p>
  These are some of the artists I've been listening to most frequently. A small caveat is that
  the underlying report currently treats collaborations and remixes as a single "artist". So, a song like
  <a href="https://open.spotify.com/track/4thSyFvS3TQp5lt4x4aG4t?si=b75708ac46384992">
  <em>"Hands",</em></a> by Tiger Darrow & Pool Cosby would be listed as "Tiger Darrow, Pool Cosby".
</p>

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