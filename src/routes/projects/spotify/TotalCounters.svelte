<script lang="ts">
  import CountUp from "$lib/util/CountUp.svelte";
  import { from, op } from "arquero";

  export let data;

  // Duration
  let durations: number[] = [];
  for (let item of data) {
    durations.push(item.duration_ms / 60000);
  }
  let total = Math.round(durations.reduce((x, y) => x + y));

  // Unique artists & tracks
  let summary = from(data)
    .derive({ dt: d => op.parse_date(d.played_at_mtn)})
    .rollup({
      min: d => op.min(d.dt),
      max: d => op.max(d.dt),
      n_artists: d => op.distinct(d.artists),
      n_tracks: d => op.distinct(d.track_id),
    })
    .object();
</script>

<center>
  <div class = "container">
    <!-- <h2>Overall Statistics</h2> -->

  <table>
    <tr class="header">
      <th>date range</th>
      <th># plays</th>
      <th>unique tracks</th>
      <th>unique artists</th>
      <th>minutes played</th>
    </tr>
    <tr>
      <td style="font-weight: bolder; font-size: larger;">
        {summary.min.getMonth() + 1}/{summary.min.getFullYear() - 2000} - {summary.max.getMonth() + 1}/{summary.max.getFullYear() - 2000}
      </td>
      <td>
        <CountUp value={data.length} />
      </td>
      <td>
        <CountUp value={summary.n_tracks} />
      </td>
      <td>
        <CountUp value={summary.n_artists} />
      </td>
      <td>
        <CountUp value={total} delay={1} />
      </td>
    </tr>
  </table>
</center>

<style>
  table {
    font-size: smaller;
    border-top: none;
    border-bottom: none;
    min-width: 70vw;
    text-align: center;
  }

  th {
    border-bottom: none ;
  }
</style>