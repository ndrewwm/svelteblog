<script>
  import "$lib/styles/style.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- pre/code font -->
<link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono">

<Header />

<slot />

<Footer />
