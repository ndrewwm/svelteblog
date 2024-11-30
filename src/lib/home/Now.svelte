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
  <div class="content">
    (This is a <a href="https://nownownow.com/about">now page</a>, if you haven't seen one before.)
  </div>

  <div class="block">
    <span class="is-size-7">Updated</span> <span>11/24/2024:</span>
    <br>
    <br>
    <ul class="is-size-6">
      <li>Living in Boise, ID</li>
      <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
      <li>I'm learning a lot about CI/CD and Snowflake, primarily through standing up dbt-core at work</li>
      <li>Still practicing a bit of German every day</li>
      <li>Working on my final two lecture courses for my degree: MATH 403 (Linear Algebra) and MATH 465 (Numerical Methods).</li>
      <li>📖 61% <em>Butter</em> Asako Yuzuki (2017)</li>
      <li>📖 89% <em>The Storm Before the Storm: The Beginning of the End of the Roman Republic</em> Mike Duncan (2017)</li>
    </ul>
  </div>
</div>
