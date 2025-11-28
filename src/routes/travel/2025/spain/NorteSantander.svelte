<script lang="ts">
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";
  import dayjs from "dayjs";
  import { mean } from "d3";

  import Norte from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_144048722.jpg";
  import Map1 from "$lib/assets/photos/trips/2025/spain/norte/IMG_20251105_195736.png";
  import Caballos from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_113246892.MP.jpg";
  import Shell from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_094729747.jpg";
  import Flags from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_095804475.jpg";
  import Coast from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_135425291.jpg";
  import BuenCamino from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251105_152023086.jpg";

  let { metrics } = $props();
  let data = metrics.filter((d) => d.date <= dayjs("11/07/2025"));

  let coverPhoto = {
    src: Norte,
    alt: "Looking out over the cliffs at the Bay of Biscay.",
  };

  let camino = [
    { src: Map1, alt: "Day 1's route: Portugalete to Castro Uridales. This covered 15.26mi, and took us around 6.5 hours." },
    { src: Shell, alt: "Iron scallop shell as a sidewalk marker, marking the way of St. James." },
    { src: Caballos, alt: "Some curious horses." },
    { src: Flags, alt: "The Basque and Palestinean flag, flying together over a silo." },
    { src: Coast, alt: "Coastal Spain." },
  ];
</script>

<!-- Camino del Norte -->
<section>
  <HeroImage title="Cantabria" subtitle="11/5 - 11/6" img={coverPhoto.src} alt={coverPhoto.alt} />

  <p class="block">
    After a few days in Bilbao, we packed up our things and took the metro to Portugalete.
    After a few hours walk, one leaves behind the Basque Country, and enters Cantabria, a neighboring autonomous region,
    whose capital city is Santander. Jenny and I followed the Camino del Norte (<em>Northern Way</em>), one of many routes of pilgrimage
    to Santiago on the western edge of Spain. The Camino del Norte is the 6th most popular route to reach Santiago,
    with about <a href="https://oficinadelperegrino.com/en/statistics-2/">21k pilgrims</a> finishing the route in 2025.
    The modal traveler on the Camino is likely to be Spanish, with the country representing 43% of pilgrims in 2025, 
    followed by the United States at 8%.
  </p>
  <p class="block">
    Camino purists would
  </p>

  <PhotoGrid array={camino} />

  <img src={BuenCamino} alt="Buen Camino!" style="padding: 0 8px; margin-top: -6px; margin-bottom: 8px;">
</section>

<section>

</section>

<!-- Metrics -->
<section>
  <h3 class="title">
    Metrics
  </h3>
  
  <p class="block">
    After this segment, we're averaging 
    {Math.round(mean(data.map(d => d.steps))).toLocaleString()} steps per day.
  </p>
  
  <Plot metrics={data} min_dt={dayjs("11/05/2025")} />
</section>
