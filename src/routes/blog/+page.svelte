<script>
  export let data;
</script>

<head>
  <title>blog | ndrewwm</title>
</head>

<h1>blog</h1>

<ul>
  {#each data.posts as post}
    <li>
      <span class="postdt">{post.meta.date}</span>
      | <a href={post.path}>{post.meta.title}</a>
    </li>
  {/each}
</ul>

<style>
  .postdt {
    font-family: monospace;
    font-size: larger;
  }

  li {
    margin-bottom: 10px;
    list-style-type: none;
  }
</style>