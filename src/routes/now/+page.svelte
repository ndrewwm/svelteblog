<script>
  import Now from "$lib/components/Now.svelte";
  import Banner from "$lib/util/Banner.svelte";
</script>

<svelte:head>
  <title>ndrewwm | now</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | Now"/>
  <meta name="description" content="My 'now' page." />
</svelte:head>

<Banner title="now" />

<p class="mb-2 is-size-6">
  (This is a <a href="https://nownownow.com/about">now page</a>, if you haven't seen one before.)
</p>

<Now />
