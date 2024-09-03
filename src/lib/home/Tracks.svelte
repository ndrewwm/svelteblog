<script>
  async function getTracks() {
    const resp = await fetch("/api/spotify/recent_tracks"); 
    const data = await resp.json();
    return data;
  }
</script>

<div>
  <p>
    These are the top 10 tracks I've been listening to on Spotify over the <strong>past 30 days.</strong> My top 10
    artists can be listed by typing: <strong>tracks --artists</strong>. For further visualizations, you can visit 
    my <a href="/projects/spotify">projects</a> page.
  </p>

  {#await getTracks()}
    Loading ...
  {:then tracks}
    <table>
      <tr class="header">
        <th>track name</th>
        <th>artist(s)</th>
        <th>times played</th>
        <th>total duration (min.)</th>
      </tr>
      {#each tracks as track}
        <tr>
          <td>{track.track_name}</td>
          <td>{track.artists}</td>
          <td>{track.plays}</td>
          <td>{Math.round(track.minutes_played)}</td>
        </tr>
      {/each}
    </table>
  {/await}
</div>

<style>
  table {
    font-size: smaller;
    border-top: none;
    border-bottom: none;
  }

  th {
    font-weight: bold;
    text-align: left;
    border-collapse: collapse;
    border-bottom: 1.5px dashed;
  }

  th, td {
    font-family: "Roboto Mono", monospace;
  }
</style>