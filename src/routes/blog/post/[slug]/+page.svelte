<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
  <title>ndrewwm | {data.meta.title}</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <meta name="og:description" content={data.meta.description} />

  {#if data.meta.preview}
    <meta property="og:image" content={data.meta.preview} />
    <meta name="twitter:image" content={data.meta.preview} />
  {/if}
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | <a href="/blog">blog</a></h1>
  <h2 id="title">{data.meta.title}</h2>
</header>

<article class="mb-5 content">
  <data.content />
</article>

<footer>
  <p><strong>{data.meta.date}</strong> <a href="/about">andrew moore</a></p>
  <p><a href="https://bsky.app/profile/ndrewwm.com">@ndrewwm.com on bluesky</a>, <a href="https://github.com/ndrewwm">@ndrewwm on GitHub</a></p>
</footer>

<style>
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  header, footer {
    font-family: "Micro 5";
  }
  footer {
    font-size: larger;
    margin-bottom: 2vh;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px;
  }
  #title {
    font-size: 35px
  }
</style>
