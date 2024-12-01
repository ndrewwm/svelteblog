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

<div class="block">
  <p class="mb-2">
    Here are a few good ways to reach me:
  </p>
  <ul>
    <li><a href="mailto:hello@ndrewwm.com">hello@ndrewwm.com</a></li>
    <li><a href="https://bsky.app/profile/ndrewwm.com">@ndrewwm</a> on bluesky</li>
    <li><a href="https://github.com/ndrewwm">@ndrewwm</a> on GitHub</li>
    <li><a href="https://www.linkedin.com/in/ndrewwm/">@ndrewwm</a> on LinkedIn</li>
  </ul>
</div>
