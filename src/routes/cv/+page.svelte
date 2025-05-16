<script>
  import Cv from "$lib/components/Cv.svelte";
</script>

<svelte:head>
  <title>ndrewwm | cv</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | CV"/>
  <meta name="description" content="My current CV." />
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | <a href="/about">about</a> | cv</h1>
</header>

<main class="mb-6">
  <p class="block is-size-7">
    Further details available on my <a href="https://www.linkedin.com/in/ndrewwm/"
      >LinkedIn.</a
    >
  </p>
  <Cv />
</main>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header {
    font-family: "Micro 5";
  }

  h1 {
    font-size: 40px;
  }
</style>
