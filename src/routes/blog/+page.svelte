<script lang="ts">
  import dayjs from 'dayjs';
  import { MediaQuery } from 'svelte/reactivity';
  let { data } = $props();
  let mobile = new MediaQuery("width < 800px");
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

<div id="posts">
  {#each data.posts as post}
    {#if !post.meta.draft}
      {#if mobile.current}
        <div class="block">
          <p class="post-title"><a href={post.path}>{post.meta.title}</a></p>
          <p class="dt">{dayjs(post.meta.date).format("YY.MM.DD")}</p>
          {#if post.meta.description}
            <p class="mt-1">{post.meta.description}</p>
          {/if}
        </div>
      {:else}
        <div class="columns">
          <div class="column is-narrow dt">
            {dayjs(post.meta.date).format("YY.MM.DD")}
          </div>
          <div class="column">
            <p class="post-title">
              <a href={post.path}>{post.meta.title}</a>
            </p>
            <p>{post.meta.description}</p>
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
