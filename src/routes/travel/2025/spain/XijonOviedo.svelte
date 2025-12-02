<script lang="ts">
  import dayjs from "dayjs";
  import { mean } from "d3";

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
    { src: Mural, alt: "A mural", col: "left" },
    { src: Cathedral, alt: "Oviedo's cathedral.", col: "right" },
    { src: StreetDog, alt: "Statue commemorating Rufo, a beloved street dog.", col: "right" },
    { src: Oviedo, alt: "Oviedo skyline.", col: "left" },
  ];

  let gijon = [
    { src: Xijon, alt: "Mural close to the harbor.", col: "left" },
    { src: Dindurra, alt: "Cafe Dindurra, interior. A lovely art-deco cafe.", col: "left" },
    { src: CiderPress, alt: "A traditional cider press, on exhibit in the Museum of the Asturian People.", col: "left" },
    { src: Trains, alt: "Trains from the Gijón railway museum.", col: "left" },
    { src: Sculpture, alt: "\"Elogio del Horizonte\", Eduardo Chillida.", col: "right" },
    { src: Pelayo, alt: "A statue of Don Pelayo, in the Cimavilla.", col: "right" },
    { src: Horreo, alt: "A traditional Asturian granery, called a hórreo.", col: "right" },
  ];

  let { metrics } = $props();
  let data = metrics.filter(d => d.date <= dayjs("11/14/2025"));
</script>

<HeroImage img={RomanBaths} title="Oviedo & Gijón" subtitle="11/10-11/14" />

<!-- Oviedo -->
<section>
  <h3 class="title">Oviedo</h3>

  <p class="block">
    After our hike in the national park, we packed up our rental and drove into the province of Asturias.
    Our first stop was the city of Oviedo. I didn't have many expectations before arriving, but we were 
    pleasantly surprised by what we found. Its streets are filled with statues as public art, and the city
    is brimming with history.
  </p>

  <p class="block">
    Recounting of Asturian history usually begins with the line of ancient Asturian kings, specifically
    Don Pelayo who reigned between 718-737 AD. Pelayo initiated a revolt against the Moors, who controlled
    the Iberian peninsula prior to the kingdom's establishment. One of Pelayo's descendents, Alfonso II
    (791-842 AD), was responsible for establishing Oviedo as the capital of the kingdom. By all accounts,
    Alfonso II was extremely devout; it was Alfonso II's court that established the Camino del Santiago,
    as well as the city's basilica.
  </p>

  <p class="block">
    In modern times, Oviedo was the headquarters of Asturias's short-lived 1934 October Revolution. This conflict
    emerged from a mining strike in protest of the country's incoming conservative government. A coalition of
    socialists and anarchists mobilized militias over 34k strong, set up worker soviets, and abolished the existing currency. The events
    were not bloodless; members of the civil guard, business-owners, and priests were killed in towns around Oviedo.
    Religious buildings were destroyed, and part of the University of Oviedo was burned.
    The Spanish military responded by blasting Gijón from the sea, and deployed colonial forces to suppress the insurrection.
    After two weeks of heavy fighting, government troops were able to break the rebellion. A smaller
    uprising occurred during the same time in Catalonia; together, these events appear to be an unfortunate
    prelude to the Spanish civil war. In 1936, Oviedo was beseiged for 3 months after the colonel
    stationed there opted to support the nationalist coup.
  </p>

  <p class="block">
    These are not enviable features of a city's relatively recent history.
    In the city's old town, we walked past centuries-old stone facades that had been marred by machine gun fire. 
    Parents and grandparents of Oviedo residents would've had memories of these times. 
    I can't quite articulate the way it made me feel; humbling is one word that comes to mind, perhaps.
    Without downplaying past and present violence in my own country, over the last 100 years US cities
    have not contended with civil conflict comparable in scale to what we learned about.
  </p>

  <PhotoGrid array={oviedo} />

  <p class="block">
    Today, the University of Oviedo is one of the most important institutions in Spain for training
    doctors and civil servants. The city is smaller than Bilbao, but has a lot to offer. This is an
    excellent place to experience Asturian cider culture, and Jenny and I greatly enjoyed the
    <a href="https://www.museobbaa.com/">Museum of Fine Arts</a>, which has free admissions.
  </p>
</section>

<!-- Gijon -->
<section class="mt-4">
  <h3 class="title">Gijón</h3>

  <p class="block">
    About half an hour away by car, the port city of Gijón was our final stop. I was told there's a bit of a rivalry
    between residents of Gijón and Oviedo concerning which city is superior. I'm tempted to take the
    cowardly approach and say that both are wonderful, but I think Gijón has the edge. The city is split
    by a peninsula (called the <em>Cimavilla</em>), which holds the city's old-town. A key landmark in the
    Cimavilla is the church, visible in the panorama below. Underneath the church are the ruins of a Roman
    bath, constructed during the reign of Augustus. Here are a few highlights from our stay:
  </p>

  <ul class="mb-2">
    <li>
      <a href="https://www.ehica.eu/portfolio_page/cafe-dindurra-en/">Cafe Dindurra:</a> a beautiful cafe
      with an Art Deco interior.
    </li>
    <li>
      <a href="https://www.gijon.es/en/directorio/asturias-railway-museum">The Asturias Railway Museum:</a> on the eastern side of town, a nice stop to learn about
      the region's industrial history, perhaps before getting lunch in the Cimavilla.
    </li>
    <li>
      Varsovia: a cozy cocktail bar just outside the Cimavilla, with excellent views over the beach.
    </li>
    <li>
      <a href="https://www.gijon.es/en/directorio/museum-asturian-people">The Museum of the Asturian People:</a>
      this is a good spot to learn a bit of regional ethnography. The museum's colleciton includes several
      traditional buildings and homes, showcasing life and farming practices for the Asturians.
    </li>
  </ul>

  <img src={GijonPanorama} alt="Panorama of the city's beach." style="padding: 0 8px; margin-top: -6px; margin-bottom: 0px;">
  <PhotoGrid array={gijon} />
</section>

<!-- Metrics -->
<section>
  <h3 class="title">Metrics</h3>

  <p class="block">
    And here we reach the end of our series. Our final average was {Math.round(mean(data.map(d => d.steps))).toLocaleString()} steps per day. In all, I recorded
    {data.at(-1).steps_cum.toLocaleString()} steps ({data.at(-1).dist_cum.toLocaleString()} miles)
    over the two weeks we were in Spain.
  </p>

  <Plot metrics={data} min_dt={dayjs("11/10/2025")} />
</section>
