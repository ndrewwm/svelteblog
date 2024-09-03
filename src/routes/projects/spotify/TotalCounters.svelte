<script lang="ts">
  import CountUp from "$lib/util/CountUp.svelte";
  import { from, op } from "arquero";

  export let data;

  // Duration
  let durations: number[] = [];
  for (let item of data) {
    durations.push(item.duration_ms / 60000 / 60);
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
  <table>
    <tr class="header">
      <th>date range</th>
      <th># plays</th>
      <th>unique tracks</th>
      <th>unique artists</th>
      <th>hours played</th>
    </tr>
    <tr>
      <td style="font-weight: bolder; font-size: small;">
        {summary.min.getMonth() + 1}/{summary.min.getDate()}/{summary.min.getFullYear() - 2000} - {summary.max.getMonth() + 1}/{summary.max.getDate()}/{summary.max.getFullYear() - 2000}
      </td>
      <td>
        <CountUp value={data.length} />
      </td>
      <td>
        <CountUp value={summary.n_tracks} delay={2} />
      </td>
      <td>
        <CountUp value={summary.n_artists} />
      </td>
      <td>
        <CountUp value={total} delay={100} />
      </td>
    </tr>
  </table>
</center>

<style>
  table {
    font-size: smaller;
    border-top: none;
    border-bottom: none;
    text-align: center;
  }

  th {
    border-bottom: none ;
  }

  td {
    padding-left: 3vw;
    padding-right: 3vw;
  }
</style>