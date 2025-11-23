<script lang="ts">
  import HeroImage from "./HeroImage.svelte";
  import Plot from "./Plot.svelte";
  import dayjs from "dayjs";

  let { metrics } = $props();
  let data = metrics.filter(d => d.date <= dayjs("11/09/2025"));

  import Potes from "$lib/assets/photos/trips/2025/spain/PXL_20251108_150518339.jpg";
  import Picos1 from "$lib/assets/photos/trips/2025/spain/PXL_20251109_093123053.PANO.jpg";
  import ElCable from "$lib/assets/photos/trips/2025/spain/PXL_20251109_141305052.jpg";
</script>

<HeroImage img={Potes} title="Potes" subtitle={"11/9 - 11/10"} />

<h3 class="title">Potes</h3>
<img src={Potes} alt="Potes">

<h3 class="title">Picos de Europa</h3>
<img src={Picos1} alt="Picos de Europa">
<img src={ElCable} alt="El Cable">

<h3 class="title">Metrics</h3>

<Plot metrics={data} min_dt={dayjs("11/08/2025")} />
