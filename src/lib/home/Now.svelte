<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "now";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div class="block">
  <p class="mb-2">
    (This is a <a href="https://nownownow.com/about">now page</a>, if you haven't seen one before.)
  </p>

  <p class="mb-3">
    Updated 5/3/2025:
  </p>
  
  <ul class="is-size-6">
    <li>Living in Boise, ID</li>
    <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
    <li>I've finished up my <a href="/blog/post/math-401">second degree</a> (BS Applied Math) at Boise State</li>
    <li>I got engaged to my longtime partner in April</li>
    <li>📖 79% <em>Butter</em> Asako Yuzuki (2017)</li>
  </ul>
</div>
