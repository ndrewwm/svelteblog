<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "projects";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div>
  Here are a few of my personal projects:

  <ul>
    <li>
      <a href="https://github.com/ndrewwm/riddles-and-wyverns-client">Riddles & Wyverns:</a>
      a browser-based trivia game, inspired by
      <a href="https://en.wikipedia.org/wiki/Quiz_%26_Dragons:_Capcom_Quiz_Game">Quizzes & Dragons.</a>
      Very much a WIP; the game is currently unhosted, and isn't ready to be played.
    </li>
    <li>
      <a href="/projects/linear-regression-primer">Linear regression primer:</a> a set of posts
      covering the basics of linear regression (OLS and multiple regression).
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