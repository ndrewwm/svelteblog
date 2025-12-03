<script lang="ts">
  import Now from "$lib/components/Now.svelte";
  import Tracks from "$lib/home/Tracks.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>ndrewwm | home</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="ndrewwm.com | Home"/>
  <meta name="description" content="My homepage." />
</svelte:head>

<header>
  <h1><a href="/about">andrew w. moore</a></h1>
</header>

<main>
  <section>
    <h2><a href="/now">Now</a></h2>
    <Now />
  </section>

  <section class="mt-5">
    <h2 class="mb-2"><a href="/blog">Writing</a></h2>

    {#each data.posts as post}
      <p class="title is-6 mb-1">
        <a href="/blog/post/{post.meta.slug}">{post.meta.title}</a>
      </p>
      <p class="subtitle is-6 mb-3 dt">{post.meta.date}</p>
    {/each}
  </section>

  <section class="mt-5">
    <h2 class="mt-2 mb-2" style="font-weight: bolder;">Projects</h2>

    <p class="title is-6 mb-1">
      <a href="https://ndrewwm.github.io/math-401">Math-401</a>
    </p>
    <p class="subtitle is-6 mb-3">Project site for the capstone research I conducted for my applied math degree.</p>
    
    <p class="title is-6 mb-1">
      <a href="/projects/spotify">Spotify Listening Habits</a>
    </p>
    <p class="subtitle is-6 mb-3">Summarizing my daily listening on Spotify.</p>
  </section>

  <section class="mt-5">
    <h2 class="mt-2 mb-2"><a href="/reading">Reading</a></h2>

    {#each data.reviews as review}
      <p class="title is-6 mb-1">
        <a href="reading/{review.meta.slug}">{review.meta.title}</a>
      </p>
      <p class="subtitle is-6 mb-3 dt">
        {#if review.meta.stars !== null}
          {"★".repeat(review.meta.stars)}
        {:else}
          📖 {review.meta.pct}%
        {/if}
      </p>
    {/each}
  </section>

  <!-- TODO: fix this :/ -->
  <!-- <section class="mt-5 mb-5">
    <h2><a href="/projects/spotify">Listening habits</a></h2>

    <Tracks />
  </section> -->
</main>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header, .dt {
    font-family: "Micro 5";
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 1.3rem;
  }
</style>
