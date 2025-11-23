<script lang="ts">
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";
  import dayjs from "dayjs";

  let { metrics } = $props();
  let data = metrics.filter((d) => d.date <= dayjs("11/07/2025"));
</script>

<h3 class="title">
  Metrics
</h3>

<Plot metrics={data} min_dt={dayjs("11/05/2025")} />
