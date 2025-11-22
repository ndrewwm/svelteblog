<script lang="ts">
  import HeroImage from "./HeroImage.svelte";

  import Potes from "$lib/assets/photos/trips/2025/spain/PXL_20251108_150518339.jpg";
  import Picos1 from "$lib/assets/photos/trips/2025/spain/PXL_20251109_093123053.PANO.jpg";
  import ElCable from "$lib/assets/photos/trips/2025/spain/PXL_20251109_141305052.jpg";
</script>

<HeroImage img={Potes} title="Potes" subtitle={"11/9 - 11/10"} />

<h2 class="title">Potes</h2>
<img src={Potes} alt="Potes">

<h2 class="title">Picos de Europa</h2>
<img src={Picos1} alt="Picos de Europa">
<img src={ElCable} alt="El Cable">
