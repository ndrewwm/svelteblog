<script lang="ts">
  import dayjs from 'dayjs';
  import ReadingHeader from '../ReadingHeader.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>ndrewwm | reading</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Reading List"/>
  <meta name="description" content="Books on my reading list." />
</svelte:head>

<ReadingHeader />

<div class="block">
  <p class="block">
    This is a list of books that I'm planning on reading.
    They're sorted by the date I've added them.
  </p>
  <a href="/reading/list/random">
    <button class="button is-primary">
      Random Book
    </button>
  </a>
</div>

<table class="list">
  <thead>
    <tr>
      <th>Added</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {#each data.books as book}
      <tr>
        <td class="dt pt-2 pb-2">
          <p class="subtitle is-size-7">
            {dayjs(book.meta.added).format("YY.MM.DD")}
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

  .list {
    border-color: none;
    border-width: 0px;
  }
</style>
