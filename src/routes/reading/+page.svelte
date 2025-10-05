<script lang="ts">
  import dayjs from 'dayjs';
  import ReadingHeader from './ReadingHeader.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>ndrewwm | reading</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Reading"/>
  <meta name="description" content="Books I'm reading, or have finished." />
</svelte:head>

<ReadingHeader />

<div class="block">
</div>

<section class="block">
  {#if data.reading.length !== 0}    
    {#each data.reading as book}      
      <div class="columns is-mobile mb-0">
        <div class="column is-narrow dt">
          📖 {book.meta.pct}%
        </div>
        <div class="column dt">
          <a class="title is-size-6" href="/reading/{book.meta.slug}">{book.meta.title}</a>
          <p class="subtitle is-size-6">{book.meta.author}</p>
        </div>
      </div>
    {/each}
  {/if}
</section>

<section>
  {#each data.reviews as book}
    <div class="columns is-mobile mb-1">
      <div class="column is-narrow dt">
        <p class="title is-size-5">{"★".repeat(book.meta.stars)}</p>
        <p class="subtitle is-size-7">
          {dayjs(book.meta.date).format("YY.MM.DD")}
        </p>
      </div>
      <div class="column dt">
        <a class="title is-size-6" href="/reading/{book.meta.slug}">{book.meta.title}</a>
        <p class="subtitle is-size-6">{book.meta.author}</p>
      </div>
    </div>
  {/each}
</section>

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

  .dt {
    font-family: 'Roboto Mono', monospace;
    font-weight: bolder;
    /* font-size: larger; */
  }
</style>
