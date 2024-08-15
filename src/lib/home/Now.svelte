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

<div>
  (This is a <a href="https://nownownow.com/about">now page</a>, if you haven't seen one before.)
  <br>
  <br>
  <span style="font-size: smaller">Updated</span> <span>8/15/2024:</span>

  <ul>
    <li>Living in Boise, ID</li>
    <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
    <li>I'm learning a lot about CI/CD and Snowflake, primarily through standing up dbt-core at work</li>
    <li>Still practicing a bit of German every day</li>
    <li>About to start my final two lecture courses for my degree: MATH 403 (Linear Algebra) and MATH 465 (Numerical Methods).</li>
  </ul>
</div>
