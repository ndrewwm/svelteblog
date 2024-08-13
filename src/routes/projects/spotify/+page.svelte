<script>
  import Banner from '$lib/home/Banner.svelte';
  import BarTopArtists from './BarTopArtists.svelte';
  import BoxPlots from './BoxPlots.svelte';
  import LineAvgPopularity from './LineAvgPopularity.svelte';
  import TotalCounters from './TotalCounters.svelte';

  export let data;
</script>

<Banner sub={"Spotify History"} link={"/projects/spotify"} />

<p>
  Here are some data visualizations describing my listening history on Spotify. You can read a blog post
  explaining how I gather this data <a href="/blog/post/spotify-listening-history"> here.</a> Plots are
  built using <a href="https://observablehq.com/plot/">Observable Plot.</a>
</p>

<TotalCounters data={data.popularity} />

<h2>Artists</h2>

<BarTopArtists artists={data.artists} />
  
<h2>Popularity</h2>

<BoxPlots popularity={data.popularity} />

<!-- <br>
<LineAvgPopularity popularity={data.popularity} /> -->
