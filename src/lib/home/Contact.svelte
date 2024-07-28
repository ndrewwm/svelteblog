<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "contact";
</script>

{#if section}
  <br>
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}
<div>
  Here are a few good ways to reach me:
  <ul>
    <li><a href="">hello@ndrewwm.com</a></li>
    <li><a href="https://bsky.app/profile/ndrewwm.bsky.social">@ndrewwm</a> on bluesky</li>
    <li><a href="https://github.com/ndrewwm">@ndrewwm</a> on GitHub</li>
    <li><a href="https://www.linkedin.com/in/ndrewwm/">@ndrewwm</a> on LinkedIn</li>
  </ul>
</div>
