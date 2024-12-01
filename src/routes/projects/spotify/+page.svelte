<script>
  import Banner from '$lib/util/Banner.svelte';
  import BarTopArtists from './BarTopArtists.svelte';
  import BoxPlots from './BoxPlots.svelte';
  import LineTrackDiscovery from './LineTrackDiscovery.svelte';
  import HistPopularity from './HistPopularity.svelte';
  import TotalCounters from './TotalCounters.svelte';

  async function getData() {
    const artists = await fetch("/api/spotify/recent_artists");
    const popu = await fetch("/api/spotify/track_plays");
    const discovery = await fetch("/api/spotify/discovery_rate");

    return {
      artists: await artists.json(),
      popularity: await popu.json(),
      discovery: await discovery.json(),
    };
  }

  let cumulative = false;
  $: text = cumulative ? "Weekly" : "Cumulative";
  function toggleCumulative() {
    cumulative = !cumulative;
  }
</script>

<Banner title={"spotify history"} />

<section class="block">
  <p class="mb-5">
    Here are some data visualizations describing my listening history on Spotify. You can read a blog post
    explaining how I gather this data <a href="/blog/post/spotify-history"> here.</a> Graphics are
    built using <a href="https://observablehq.com/plot/">Observable Plot.</a>
  </p>  
</section>

{#await getData()}
  <div class="block">
    <button class="button is-loading">Loading...</button>
  </div>
{:then data}
  <section class="block">
    <TotalCounters data={data.popularity} />
  </section>

  <section class="block">
    <h1 class="title">Artists</h1>
    <BarTopArtists artists={data.artists} />
  </section>

  <section class="block">
    <h1 class="title">Discovery Rate</h1>
    <button class="button" on:click={toggleCumulative} style="margin-bottom: 10px">{text}</button>
    {#key cumulative}
      <LineTrackDiscovery discovery={data.discovery} {cumulative} />
    {/key}
  </section>

  <section class="block">
    <h1 class="title">Popularity</h1>
    <HistPopularity popularity={data.popularity} />
    <BoxPlots popularity={data.popularity} />
  </section>
{/await}
