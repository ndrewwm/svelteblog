<script>
  import "$lib/styles/style.css";
</script>

<div id="main" class="container pl-2 pr-2">
  <slot />
</div>

<style>
  #main {
    max-width: 90ch;
  }
</style>
