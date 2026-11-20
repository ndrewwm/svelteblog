<script lang="ts">
  import dayjs from 'dayjs';
  import { MediaQuery } from 'svelte/reactivity';
  let { data } = $props();
  let mobile = new MediaQuery("width < 800px");

  data.posts
    .sort((a, b) => dayjs(a.date) - dayjs(b.date))
    .reverse();
</script>

<svelte:head>
  <title>ndrewwm | blog</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Blog"/>
  <meta name="description" content="My blog." />
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | blog</h1>
</header>

{#snippet title(title: string, path: string)}
  <p class="post-title"><a href={"/blog/post/" + path}>{title}</a></p>
{/snippet}

{#snippet date(date: string)}
  <p class="dt">{dayjs(date).format("YY.MM.DD")}</p>
{/snippet}

{#snippet description(description: string)}
  {#if description}
    <p class="mt-1">{description}</p>
  {/if}
{/snippet}

{#snippet categories(categories: string[])}  
  {#if categories}
    {#each categories as category}
      <div class="tag mt-1 mr-1">{category}</div>
    {/each}
  {/if}
{/snippet}

<div id="posts">
  {#each data.posts as post}
    {#if !post.draft}
      {#if mobile.current}
        <div class="block">
          {@render title(post.title, post.slug)}
          {@render date(post.date)}
          {@render description(post.description)}
          {@render categories(post.categories)}
        </div>
      {:else}
        <div class="columns">
          <div class="column is-narrow">
            {@render date(post.date)}
          </div>
          <div class="column">
            {@render title(post.title, post.slug)}
            {@render description(post.description)}
            {@render categories(post.categories)}
          </div>
        </div>
      {/if}
    {/if}
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
    font-size: 2.5rem;
  }

  .dt {
    font-family: 'Roboto Mono', monospace;
    font-weight: bolder;
    /* font-size: larger; */
  }
</style>
