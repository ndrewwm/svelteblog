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

<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">date range</p>
      <p class="title">
        {summary.min.getMonth() + 1}/{summary.min.getDate()}/{summary.min.getFullYear() - 2000} - {summary.max.getMonth() + 1}/{summary.max.getDate()}/{summary.max.getFullYear() - 2000}
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading"># plays</p>
      <p class="title">
        <CountUp value={data.length} />
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">unique tracks</p>
      <p class="title">
        <CountUp value={summary.n_tracks} />
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">unique artists</p>
      <p class="title">
        <CountUp value={summary.n_artists} />
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">hours played</p>
      <p class="title">
        <CountUp value={total} delay={10} />
      </p>
    </div>
  </div>
</nav>
