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
  <span style="font-size: smaller">Updated</span> <span>7/6/2024:</span>

  <ul>
    <li>Living in Boise, ID</li>
    <li>Working remotely in CU Boulder's OIT, as a senior data engineer</li>
    <li>I'm learning a lot about analytics engineering and Snowflake, primarily through standing up dbt-core</li>
    <li>I'm working on this website, and continuing to peck away at the development of *Riddles & Wyverns*</li>
    <li>I'm trying to balance language learning in German</li>
  </ul>
</div>
