<script>
  export let data;
  import dayjs from 'dayjs';
</script>

<svelte:head>
  <title>ndrewwm | reading</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Reading List"/>
  <meta name="description" content="Books on my reading list." />
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | <a href="/reading">reading</a> | list</h1>
</header>

<div class="block">
  {#each data.books as book}
    <div class="columns">
      <div class="column is-narrow dt">
        {dayjs(book.meta.date).format("YY.MM.DD")}
      </div>
      <div class="column dt">
        <a href="/reading/{book.meta.slug}">{book.meta.title}</a>
      </div>
    </div>
  {/each}
</div>

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
