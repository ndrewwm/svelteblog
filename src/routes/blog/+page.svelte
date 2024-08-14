<script>
  import Banner from '$lib/util/Banner.svelte';
  export let data;
</script>

<Banner title={"blog"} />


<table>
  {#each data.posts as post}
    {#if !post.meta.draft}
      <tr>
        <td class="dt">{post.meta.date}</td>
        <td class="title"><a href={post.path}>{post.meta.title}</a></td>
      </tr>
    {/if}
  {/each}
</table>

<style>
  .dt {
    font-family: monospace;
    font-weight: bolder;
    font-size: larger;
  }
  .title {
    font-family: Arial, Arial, Helvetica, sans-serif;
  }
  table {
    border-style: none;
  }
  td {
    padding: 1vh 1vw 1vh 1vw;
  }

  @media (width <= 1000px) {
    table {
      font-size: small;
    }
  }
</style>
