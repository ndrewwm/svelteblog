<script lang="ts">
  export let sub: string = "";
  export let link: string = "";
</script>

<div class="terminal-banner">
      <h1>
        <a href="/">andrew w. moore</a>
        {#if sub !== ""}
          | <a href={link}>{sub}</a>
        {/if}
      </h1>
</div>

<style>
</style>
