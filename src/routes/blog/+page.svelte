<script>
  import Banner from '$lib/util/Banner.svelte';
  import dayjs from 'dayjs';
  export let data;
</script>

<Banner title={"blog"} />

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
