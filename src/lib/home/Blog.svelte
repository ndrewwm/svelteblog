<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "blog";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div class="block">
  I maintain a blog where I post updates about side-projects and other things I'm working on.
  You can access it <a href="/blog">here.</a>
</div>
