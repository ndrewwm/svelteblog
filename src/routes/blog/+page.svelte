<script>
  export let data;
</script>

<head>
  <title>blog | ndrewwm</title>
</head>

<h1>blog</h1>

<ul>
  {#each data.posts as post}
    {#if !post.meta.draft}
      <li>
        <span class="postdt">{post.meta.date}</span>
        | <a href={post.path}>{post.meta.title}</a>
      </li>
    {/if}
  {/each}
</ul>

<style>
  .postdt {
    font-family: monospace;
    font-weight: bolder;
    font-size: larger;
  }

  li {
    margin-bottom: 10px;
    list-style-type: none;
  }
</style>
