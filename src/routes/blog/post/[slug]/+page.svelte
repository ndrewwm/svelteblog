<script lang="ts">
  export let data;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
  <title>{data.meta.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article>
  <hgroup>
    <h1>{data.meta.title}</h1>
    <p>
      {data.meta.date}
      <a href="/blog" style="text-decoration: underline; font-size: smaller; margin-left: 5px;">
        back
      </a>
    </p>
  </hgroup>
  <hr>

  <div class="content">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
