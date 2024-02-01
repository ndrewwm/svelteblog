<script>
  import "$lib/styles/style.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- pre/code font -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono">

<body>  
  <Header />

  <main><slot /></main>
  
  <Footer />
</body>
  
<style>
  body {
    width: 80vw;
  }
  main {
    padding-left: 15vw;
    min-height: 88vh;
  }
</style>
