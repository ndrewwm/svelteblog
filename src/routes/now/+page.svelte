<script>
  import Now from "$lib/components/Now.svelte";
  import Banner from "$lib/util/Banner.svelte";

  let { data } = $props();
</script>

{#snippet listBooks(books, pct = false)}
  {#each books as book}
    <li style:margin-bottom="1px">
      {#if pct}
        {book.meta.pct}%:
      {/if}
      <em>{book.meta.title}</em>, by
      {book.meta.author} ({book.meta.year})
    </li>
  {/each}
{/snippet}

<svelte:head>
  <title>ndrewwm | now</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Now"/>
  <meta name="description" content="My 'now' page." />
</svelte:head>

<Banner title="now" />

<p class="mb-2 is-size-6">
  (This is a <a href="https://nownownow.com/about">now page</a>, if you haven't seen one before.)
</p>

<Now />

<hr style:border="none" style:height="1px">

<p class="block">
  My most recent blog post is:
  <em>
    <a href={"/blog/post/" + data.post.meta.slug}>{data.post.meta.title}</a>
  </em>
  ({data.post.meta.date}).
</p>

{#if data.reading.length >= 1}
  <div class="block">
    <p>I'm currently reading:</p>
    <ul>{@render listBooks(data.reading.reverse(), true)}</ul>
  </div>
{/if}

<div class="block">
  <p>
    The last {data.finished.length} books I finished were:
  </p>
  <ul>
    {@render listBooks(data.finished)}
    <li><a href="/reading">More...</a></li>
  </ul>
</div>
