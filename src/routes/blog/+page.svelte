<script lang="ts">
  import dayjs from 'dayjs';
  let { data } = $props();
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

<table>
  {#each data.posts as post}
    {#if !post.meta.draft}
      <tr>
        <td class="dt">{dayjs(post.meta.date).format("YY.MM.DD")}</td>
        <td class="post-title"><a href={post.path}>{post.meta.title}</a></td>
      </tr>
    {/if}
  {/each}
</table>

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
  table {
    border-style: none;
  }
  td {
    padding: 1vh 1vw 1vh 1vw;
  }
  td > a {
    text-decoration: none;
  }

  @media (width <= 1000px) {
    table {
      font-size: small;
    }
  }
</style>
