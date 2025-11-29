<script lang="ts">
  import dayjs from "dayjs";
  
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";

  import Cathedral from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_112109215.jpg";
  import StreetDog from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_124846861.jpg";
  import Mural from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_160721361.jpg";
  import CathedralWide from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251111_125116496.jpg";
  import Oviedo from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251111_132104488.jpg";

  import GijonPanorama from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251111_161012290.PANO.jpg";
  import Pelayo from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251113_130556560.jpg";
  import Xijon from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251111_170022335.jpg";
  import RomanBaths from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251111_162657016.MP.jpg";
  import Dindurra from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251113_110504798.jpg";
  import Horreo from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251113_164631508.MP.jpg";
  import CiderPress from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251113_164815183.MP.jpg";
  import Sculpture from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251116_121210260.jpg";
  import Trains from "$lib/assets/photos/trips/2025/spain/gijon/PXL_20251113_113416226.jpg";

  let oviedo = [
    { src: Mural, alt: "", col: "left" },
    { src: Cathedral, alt: "", col: "right" },
    { src: StreetDog, alt: "", col: "right" },
    // { src: CathedralWide, alt: "", col: "left" },
    { src: Oviedo, alt: "", col: "left" },
  ];

  let gijon = [
    { src: Xijon, alt: "", col: "left" },
    { src: Dindurra, alt: "Cafe Dindurra, interior. A lovely art-deco cafe.", col: "left" },
    { src: CiderPress, alt: "", col: "left" },
    { src: Trains, alt: "", col: "left" },
    { src: Sculpture, alt: "", col: "right" },
    { src: Pelayo, alt: "", col: "right" },
    { src: Horreo, alt: "", col: "right" },
  ];

  let { metrics } = $props();
  let data = metrics.filter(d => d.date <= dayjs("11/14/2025"));
</script>

<HeroImage img={RomanBaths} title="Oviedo & Gijon" subtitle="11/10-11/14" />

<!-- Oviedo -->
<section>
  <h3 class="title">Oviedo</h3>

  <PhotoGrid array={oviedo} />
</section>

<!-- Gijon -->
<section>
  <h3 class="title">Gijon</h3>

  <img src={GijonPanorama} alt="" style="padding: 0 8px; margin-top: -6px; margin-bottom: 0px;">
  <PhotoGrid array={gijon} />

</section>

<section>
  <h3 class="title">Metrics</h3>
  <Plot metrics={data} min_dt={dayjs("11/10/2025")} />
</section>
