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
    Updated 12/29/2024:
  </p>
  
  <ul class="is-size-6">
    <li>Living in Boise, ID</li>
    <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
    <li>Frantically trying to finish my annual blog post summarizing each book I read this year</li>
    <li>Hoping for some cloud-free ski days at Bogus Basin before the new year 🤞</li>
    <li>📖 71% <em>Butter</em> Asako Yuzuki (2017)</li>
  </ul>
</div>
