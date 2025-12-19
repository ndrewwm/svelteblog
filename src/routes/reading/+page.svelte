<script lang="ts">
  import { MediaQuery } from 'svelte/reactivity';
  import dayjs from 'dayjs';
  import ReadingHeader from './ReadingHeader.svelte';
  let { data } = $props();

  let mobile = new MediaQuery("width < 500px");
</script>

<svelte:head>
  <title>ndrewwm | reading</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Reading"/>
  <meta name="description" content="Books I'm reading, or have finished." />
</svelte:head>

<ReadingHeader />

<table class="list">
  <tbody>
    {#if data.reading.length !== 0}
      {#each data.reading as book}        
        <tr>
          <td class="dt pt-2 pb-2">📖 {book.meta.pct}%</td>
          <td class=" pt-2 pb-2">
            <a class="title is-size-6" href="/reading/{book.meta.slug}">{book.meta.title}</a>
            <p class="subtitle is-size-6">{book.meta.author}</p>
          </td>
        </tr>
      {/each}
    {/if}
    {#each data.reviews as book}
      <tr>
        <td class="dt pt-2 pb-2">
          {#if mobile.current}
            <p class="title is-size-6">{"★".repeat(book.meta.stars)}</p>
          {:else}
            <p class="title is-size-5">{"★".repeat(book.meta.stars)}</p>
          {/if}
          <p class="subtitle is-size-7">
            {dayjs(book.meta.date).format("YY.MM.DD")}
          </p>
        </td>
        <td class=" pt-2 pb-2">
          <a class="title is-size-6" href="/reading/{book.meta.slug}">{book.meta.title}</a>
          <p class="subtitle is-size-6">{book.meta.author}</p>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .dt {
    font-family: 'Roboto Mono', monospace;
    font-weight: bolder;
    min-width: 90px;
  }

  @media (width < 500px) {
    .dt {
      font-size: smaller;
    }
  }

  .list {
    border-color: none;
    border-width: 0px;
  }
</style>
