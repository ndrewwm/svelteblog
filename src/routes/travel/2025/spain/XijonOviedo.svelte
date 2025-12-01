<script lang="ts">
  import dayjs from "dayjs";
  
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";

  import Cathedral from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_112109215.jpg";
  import StreetDog from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_124846861.jpg";
  import Mural from "$lib/assets/photos/trips/2025/spain/oviedo/PXL_20251110_160721361.jpg";
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

  <p class="block">
    After our hike in the national park, we packed up our rental and drove into the province of Asturias.
    Our first stop was the city of Oviedo. I didn't have many expectations before arriving, but I ended
    up this city a lot more than expected. Its streets are filled with statues as public art, and the city
    is brimming with history.
  </p>

  <p class="block">
    Recounting of Asturian history usually begins with the line of ancient Asturian kings, specifically
    Don Pelayo who reigned between 718-737. Pelayo initiated a revolt against the Moors, who controlled
    the Iberian peninsula prior to the kingdom's establishment. One of Pelayo's descendents, Alfonso II
    (791-842), was responsible for establishing Oviedo as the capital of the kingdom. By all accounts,
    Alfonso II was extremely devout; it was Alfonso II's court that established the Camino del Santiago,
    as well as the city's basilica.
  </p>

  <p class="block">
    In modern times, Oviedo was a key site of Asturias's short-lived 1934 October Revolution. This conflict
    emerged from a mining strike in protest of the country's incoming conservative government.
    The Spanish military responded by blasting Gijon from the sea, and deploying colonial forces to suppress the insurrection.
    After two weeks of heavy fighting, government troops were able to break the rebellion. A similar
    uprising occurred during the same time in Catalonia; together, these events appear to be an unhappy
    prelude to the broader Spanish civil war. In 1936, Oviedo was beseiged for 3 months after the colonel
    stationed there opted to support the nationalist coup.
  </p>

  <p class="block">
    These are not enviable features of a city's relatively recent history. In the city's old town, we walked
    past centuries-old stone facades that had been marred by machine gun fire. I can't quite articulate the way
    it made me feel; humbling is one word that comes to mind. Parents and grandparents of Oviedo residents would've had
    memories of these times. 
  </p>

  <PhotoGrid array={oviedo} />
</section>

<!-- Gijon -->
<section>
  <h3 class="title">Gijon</h3>

  <img src={GijonPanorama} alt="" style="padding: 0 8px; margin-top: -6px; margin-bottom: 0px;">
  <PhotoGrid array={gijon} />

</section>

<!-- Metrics -->
<section>
  <h3 class="title">Metrics</h3>
  <Plot metrics={data} min_dt={dayjs("11/10/2025")} />
</section>
