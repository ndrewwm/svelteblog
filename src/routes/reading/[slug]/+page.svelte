<script lang="ts">
  import dayjs from 'dayjs';
  import OpenLibraryCover from '$lib/util/OpenLibraryCover.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>ndrewwm | {data.meta.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="article" />
  <meta property="og:title" content="I read {data.meta.title}" />
  <meta name="description" content={data.meta.description} />

  {#if data.meta.embed_skeet}
      <script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
  {/if}
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | <a href="/reading">reading</a></h1>
  <div class="columns mt-1 mb-1">
    <div class="column is-one-fifth">
      <OpenLibraryCover isbn={data.meta.isbn} />
    </div>
    <div class="column">
      <h2 id="title" class="title mt-2">{data.meta.title}</h2>
      <h2 class="subtitle">
        {data.meta.author} ({data.meta.year})
        <br>
        {#if data.meta.stars}
          <p class="is-size-6">{"★".repeat(data.meta.stars)}</p>
        {/if}

        <p class="is-size-5">
          Started: {dayjs(data.meta.started).format("YYYY-MM-DD")}
        </p>

        {#if data.meta.finished}
          <p class="is-size-5">
            Finished: {dayjs(data.meta.finished).format("YYYY-MM-DD")}
          </p>
        {/if}

        {#if data.meta.pages}
          <p class="is-size-5">Pages: {data.meta.pages}</p>
        {/if}

        <p class="is-size-5">ISBN: {data.meta.isbn}</p>

        {#if data.meta.who}
          <p class="is-size-5">
            Recommended by: {data.meta.who}
          </p>
        {/if}
      </h2>
    </div>
  </div>
  <!-- <hr class="mt-1 mb-2"> -->
</header>

<article class="mb-5">
  {#if data.meta.pct !== 100}
    <progress class="progress" value={data.meta.pct} max="100">
      {data.meta.pct}%
    </progress>
  {/if}

  {#if data.content}
    <div class="content">
      <data.content />
    </div>
  {/if}
</article>

<style>
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  header {
    font-family: "Micro 5";
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
</style>
