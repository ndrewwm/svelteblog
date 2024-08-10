<script>
  import Banner from '$lib/home/Banner.svelte';
  import ObservablePlot from '$lib/util/ObservablePlot.svelte';
  import * as Plot from "@observablehq/plot";

  export let data;
  let artists = data.artists;
</script>

<Banner />

<center>
  <div class="plots">
    <ObservablePlot fixedWidth={true} options={{
      title: "Top artists from the past 30 days",
      marginLeft: 100,
      y: {label: ""},
      marks: [
        Plot.barX(artists, {x: "plays", y: "artists", sort: {y: "-x"}}),
      ]
    }} />
  
    <ObservablePlot fixedWidth={true} options={{
      title: "Popularity",
      marks: [
        Plot.rectY(data.popularity, Plot.binX({y: "count"}, {x: "track_popularity"})),
      ]
    }} />
  </div>
</center>
