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

  import Church from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251106_111857721.jpg";
  import Marker from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251106_114114965.jpg";
  import Laredo from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251106_151350307.jpg";
  import Fishermen from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251106_164113945.jpg";

  import Mercado from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251107_121336289.MP.jpg";
  import Fish from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251107_113346280.jpg";
  import Snaps from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251107_130952656.MP.jpg";
  import Sculpture from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251107_130805120.MP.jpg";
  import FoodHall from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251107_184948175.MP.jpg";
  import CentroBotin from "$lib/assets/photos/trips/2025/spain/norte/PXL_20251115_164707904.jpg";

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

  let coast = [
    { src: Marker, alt: "Camino marker, overlooking the coast." },
    { src: Laredo, alt: "Sculpture greeting those arriving at Laredo's bus stop." },
    { src: Church, alt: "Exterior of a church we passed in Cerdigo." },
    { src: Fishermen, alt: "Monumento a los pescadores, Laredo." },
  ];

  let santander = [
    { src: Mercado, alt: "Mercado de la Esperanza, exterior." },
    { src: CentroBotin, alt: "A page from my journal, showing a rough sketch of the Centro Botín and describing the exhibit we saw." },
    { src: Sculpture, alt: "Monument to Spanish poet, José Hierro." },
    { src: Fish, alt: "Fish on display in the Mercado de la Esperanza." },
    { src: Snaps, alt: "Jenny, pursuing photodocumentation." },
    { src: FoodHall, alt: "Mercado del Este, interior." },
  ];
</script>

<!-- Camino del Norte -->
<section>
  <HeroImage title="Cantabria" subtitle="11/5 - 11/7" img={coverPhoto.src} alt={coverPhoto.alt} />

  <p class="block">
    After a few days in Bilbao, we packed up our things and took the metro to Portugalete.
    After a few hours walk, one leaves behind the Basque Country, and enters Cantabria, a neighboring autonomous region,
    whose capital city is Santander. Jenny and I followed the Camino del Norte (<em>Northern Way</em>), one of many routes of pilgrimage
    to Santiago on the western edge of Spain. The Camino del Norte is the 6th most popular route to reach Santiago,
    with about <a href="https://oficinadelperegrino.com/en/statistics-2/">21k pilgrims</a> finishing the route in 2025.
    The modal traveler on the Camino is Spanish, with the country representing 43% of pilgrims in 2025, 
    followed by the United States at 8%.
  </p>

  <PhotoGrid array={camino} />

  <p class="block">
    Our route on the first day took us from Portugalete to Castro Urdiales, a small beach town.
    I'd agree with Camino purists in that it would be a stretch to refer to ourselves as pilgrims. We didn't
    complete the full trail, started midway within a route, and neither of us had a religious motivation to
    make the journey. However, the Camino Norte seems like an excellent way to take in the scenary of España Verde
    (Green Spain). This region (which includes Cantabria, Asturias, and the Basque Country) experiences a ton of rain,
    and differs a lot from other parts of Spain as far as its climate. In Bilbao, it usually rains upwards of 200 days per year.
    We lucked out both days-- some overcast skies, but aside from perhaps a 20 minute period, we never really needed to
    dig out our rain jackets.
  </p>

  <p class="block">
    On the second day, we set out from Castro Urdiales to reach Laredo. We covered about half the distance we did on the
    preceding day, but I threw in the towel when we reached the small town of Islares. I'd been wrapping some blisters
    that had cropped up at the end of our stay in Bilbao, and made a judgement call. Our route for the remainder of the
    day would've deviated from the Camino Norte's standard path, and would've been a bit more remote (but promised some
    stellar views of the ocean). However, I didn't like the idea of a small limp getting worse, so we hopped on a bus for
    the remaining 8 miles. Turns out the pair of boots I'd been using for the past few years were a bit too small for my feet--
    we remedied this at a shop in Santander.
  </p>

  <p class="block">
    We had an unexpectedly good meal in Laredo, in a tiny restaurant called Casa Capuchin. This was the second time we
    got to try a dish called <em>Bacalao al pil pil</em>, a traditional style of preparing cod that features an emulsion
    made from the cod's natural juices and gelatin.
  </p>

  <PhotoGrid array={coast} />

</section>

<!-- Santander -->
<section>
  <h3 class="title">Santander</h3>

  <p class="block">
    Our stay in Santander was lighter on local history, but we enjoyed the city. My guess is that it would be a
    lovely place to spend part of one's summer, although the fall suited it just fine. A must-see is the
    <a href="https://www.centrobotin.org/en/">Centro Botín</a>, even just for its architecture. 
    My sketch below doesn't do it justice, but the building is inviting in unexpected ways. The museum is 
    segmented into two pieces, connected by a walkway. Aside from the gift shop and a small cafe,
    the entire structure is elevated, allowing people to move freely underneath the building.
    The museum is located right next to the bay, and we saw several fishermen casting off under the building's shade.
  </p>

  <PhotoGrid array={santander} />
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
