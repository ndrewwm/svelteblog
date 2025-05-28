<script>
  async function getArtists() {
    const resp = await fetch("/api/spotify/recent_artists"); 
    const data = await resp.json();
    return data;
  }
</script>

<div class="block">
  <p>These are the top 10 artists I've been listening to on Spotify over the <strong>past 30 days.</strong></p>
  <br>

  {#await getArtists()}
    Loading ...
  {:then artists}
    <table>
      <thead>
        <tr class="header">
          <th>artist(s)</th>
          <th># plays</th>
          <th>total duration (min.)</th>
        </tr>
      </thead>
      <tbody>
        {#each artists as artist}
          <tr>
            <td>{artist.artists}</td>
            <td style="text-align: right;">{artist.plays}</td>
            <td style="text-align: right;">{Math.round(artist.minutes_played)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/await}
</div>

<style>
  table {
    /* font-size: smaller; */
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