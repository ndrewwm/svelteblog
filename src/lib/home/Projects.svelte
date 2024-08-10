<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "now";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div>
  Here are a few personal projects I'm working on:

  <ul>
    <li>
      <a href="https://github.com/ndrewwm/riddles-and-wyverns-client">Riddles & Wyverns:</a>
      a browser-based trivia game, inspired by
      <a href="https://en.wikipedia.org/wiki/Quiz_%26_Dragons:_Capcom_Quiz_Game">Quizzes & Dragons.</a>
      Very much a WIP; the game is currently unhosted, and isn't ready to be played.
    </li>
    <li>
      <a href="/projects/spotify">Spotify Listening History:</a>
      boutique data project, where I'm tracking my Spotify listening history over time.
    </li>
  </ul>
</div>

<style>
  li {
    margin-bottom: 2vh;
  }
</style>