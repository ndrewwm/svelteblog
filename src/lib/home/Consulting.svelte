<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "consulting";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div>Coming soon!</div>

<!-- <div>
  Are you interested in hiring me for some consulting work? That's great! My strengths lie in
  <ul>
    <li>helping clients develop a project's <strong>"data stack"</strong> (databases, automated pipelines, APIs),</li>
    <li>data science (data analysis, data collection, predictive model development, data visualization), and</li>
    <li>lightweight web-design.</li>
  </ul>
</div>

<div>
  Please email me at consulting@ndrewwm.com with a brief description of your needs, and we can
  schedule a time to talk through further specifics.
</div> -->
