<script>
  import liIcon from "$lib/assets/In-White-96.png";
  import ghIcon from "$lib/assets/github-mark-white.svg";
</script>

<header>
  <div class="header">
    <div class="left">
      <a href="/" class="home">andrew w. moore</a>
    </div>
    <div class="right">
      <a href="/now", class="menu">now</a>
      <a href="/blog" class="menu">blog</a>
      <a href="/contact" class="menu">contact</a>
      <a href="/projects" class="menu">projects</a>
      <a href="https://linkedin.com/in/ndrewwm/">
        <img src={liIcon} alt="LinkedIn Logo" height="24" width="24">
      </a>
      <a href="https://github.com/ndrewwm/" title="GitHub" class="nav-gh-icon">
        <img src={ghIcon} alt="GitHub Logo" height="24" width="24">
      </a>
    </div>
  </div>
</header>

<style>
  .header {
    width: 100vw;
    opacity: 1.0;
    background-color: #000411;
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 0;
    padding-top: 3vh;
    padding-bottom: 1vh;
  }

  .left {
    margin-left: 0;
    padding-left: 3vw;
  }

  .right {
    margin-right: 0;
    padding-right: 7vw;
  }

  .home {
    font-size: xx-large;
  }
  
  a {
    padding-left: 1vw;
  }
</style>
