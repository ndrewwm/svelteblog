<script>
  import Banner from '$lib/util/Banner.svelte';
  import BarTopArtists from './BarTopArtists.svelte';
  import BoxPlots from './BoxPlots.svelte';
  import HistPopularity from './HistPopularity.svelte';
  import TotalCounters from './TotalCounters.svelte';

  export let data;
</script>

<Banner title={"spotify history"} />

<p>
  Here are some data visualizations describing my listening history on Spotify. You can read a blog post
  explaining how I gather this data <a href="/blog/post/spotify-listening-history"> here.</a> Graphics are
  built using <a href="https://observablehq.com/plot/">Observable Plot.</a>
</p>

<TotalCounters data={data.popularity} />

<h2>Artists</h2>

<BarTopArtists artists={data.artists} />
  
<h2>Popularity</h2>

<HistPopularity popularity={data.popularity} />

<BoxPlots popularity={data.popularity} />

