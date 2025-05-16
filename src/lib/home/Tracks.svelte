<script>
  async function getTracks() {
    const resp = await fetch("/api/spotify/recent_tracks"); 
    const data = await resp.json();
    return data;
  }
</script>

<div class="block">
  <p>
    These are the top 10 tracks I've been listening to on Spotify over the <strong>past 30 days.</strong>
    For further visualizations, you can visit my <a href="/projects/spotify">projects</a> page.
  </p>
  <br>

  {#await getTracks()}
    Loading ...
  {:then tracks}
    <table>
      <tr class="header">
        <th style="text-align: left;">track name</th>
        <th style="text-align: left;">artist(s)</th>
        <th style="text-align: right;">times played</th>
        <th style="text-align: right;">total duration (min.)</th>
      </tr>
      {#each tracks as track}
        <tr>
          <td style="text-align: left;">{track.track_name}</td>
          <td style="text-align: left;">{track.artists}</td>
          <td style="text-align: right;">{track.plays}</td>
          <td style="text-align: right;">{Math.round(track.minutes_played)}</td>
        </tr>
      {/each}
    </table>
  {/await}
</div>

<style>
  table {
    border-top: none;
    border-bottom: none;
  }

  th {
    font-weight: bold;
    border-collapse: collapse;
    border-bottom: 1.5px dashed;
  }

  th, td {
    font-family: "Roboto Mono", monospace;
  }
</style>