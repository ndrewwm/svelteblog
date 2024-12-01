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

<div class="block">
  <p class="mb-2">
    Here are a few of my personal projects:
  </p>

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
    <li>
      <a href="https://sitrep-prefect.vercel.app/">Prefect Sitrep:</a> this is a small web-app I developed as a proof-of-concept.
      The app is built to surface status information about Prefect deployments, such as the status
      of a deployment's most recent run. Integrated within each deployent's page is the ability to
      raise a GitHub issue that's tied to the deployment, allowing customers to request improvements
      or report problems. Data is gathered from Prefect's REST API.
    </li>
  </ul>
</div>

<style>
  li {
    margin-bottom: 2vh;
  }
</style>
