<script>
  export let data;
</script>

<h1>Hi! This is the blog.</h1>

<p>
  It might contain links to other posts.
  <a href="/blog/post/quarto-post">Like this one.</a>
</p>

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
  }
</style>