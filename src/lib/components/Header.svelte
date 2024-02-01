<script>
  import liIcon from "$lib/assets/In-White-96.png";
  import ghIcon from "$lib/assets/github-mark-white.svg";
  import Menu from "$lib/components/Menu.svelte";
  // import MenuItem from "$lib/components/MenuItem.svelte";
</script>

<div class="navdiv">
  <a href="/">home</a>
  <a href="/blog">blog</a>
  <Menu />
  <a href="https://linkedin.com/in/ndrewwm/">
    <img src={liIcon} alt="LinkedIn Logo" height="24" width="24">
  </a>
  <a href="https://github.com/ndrewwm/" title="GitHub" class="nav-gh-icon">
    <img src={ghIcon} alt="GitHub Logo" height="24" width="24">
  </a>
</div>

<style>
  .navdiv {
    align-items: center;
    column-gap: 10%;
    display: inline-flex;
    float: right;
  }
</style>
