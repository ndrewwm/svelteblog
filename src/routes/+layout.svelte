<script>
  import "$lib/styles/style.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- pre/code font -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono">

<body>
  <div class="header">
    <Header />
  </div>
  <main>
    <slot />
  </main>
  <Footer />
</body>
  
<style>
  body {
    width: 100vw;
  }
  main {
    width: 80vw;
    padding-left: 10vw;
    min-height: 82vh;
  }
  .header {
    margin-top: 0;
    padding-bottom: 8vh;
  }
</style>
