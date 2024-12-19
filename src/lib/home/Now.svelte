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
    Updated 11/30/2024:
  </p>
  
  <ul class="is-size-6">
    <li>Living in Boise, ID</li>
    <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
    <li>I'm learning a lot about CI/CD and Snowflake, primarily through standing up dbt-core at work</li>
    <li>Still practicing a bit of German every day</li>
    <li>Finished with my two math courses for the term, enjoying winter break</li>
    <li>📖 61% <em>Butter</em> Asako Yuzuki (2017)</li>
  </ul>
</div>
