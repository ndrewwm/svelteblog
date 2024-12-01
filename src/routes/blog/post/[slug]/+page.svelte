<script lang="ts">
  export let data;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
  <title>ndrewwm | {data.meta.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article class="mb-5">
  <hgroup>
    <h1>{data.meta.title}</h1>
    <h2>{data.meta.date} | <a href="/blog">back</a></h2>
    <hr class="mt-1 mb-2">
  </hgroup>
  <div class="content">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  hgroup, h1 {
    font-family: "Micro 5";
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 25px
  }
</style>
