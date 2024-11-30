<script>
  import "$lib/styles/style.css";
</script>

<div id="main" class="container">
  <slot />
</div>

<style>
  #main {
    max-width: 90ch;
    /* margin: 0 auto; */
  }
</style>
