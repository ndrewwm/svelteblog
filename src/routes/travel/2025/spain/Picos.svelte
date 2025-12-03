<script lang="ts">
  import dayjs from "dayjs";
  import { mean } from "d3";

  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";

  let { metrics } = $props();
  let data = metrics.filter(d => d.date <= dayjs("11/09/2025"));

  import Potes from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251108_150518339.jpg";
  import Potes2 from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251108_150252345.jpg";
  import Potes3 from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251108_164119262.jpg";
  import Potes4 from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251108_155349156.jpg";
  import Abondigas from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251108_153615927.MP.jpg";

  import Picos1 from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_093123053.PANO.jpg";
  import Station from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_092723266.MP.jpg";
  import Selfie from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_092841017.jpg";
  import ElCable from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_141305052.jpg";
  import Cairns from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_095537868.jpg";
  import Valley from "$lib/assets/photos/trips/2025/spain/picos/PXL_20251109_101821606.jpg";
  import Trail from "$lib/assets/photos/trips/2025/spain/picos/Screenshot_20251129-111239.png";

  let potes = [
    { src: Potes2, alt: "Bridge in Potes.", col: "left"},
    { src: Potes4, alt: "", col: "left" },
    { src: Abondigas, alt: "POV: you're not eating enough fiber.", col: "left" },
    { src: Potes3, alt: "", col: "right" },
  ];

  let picos = [
    { src: Station, alt: "View from the top of the station", col: "left" },
    { src: Valley, alt: "Valley", col: "left" },
    { src: ElCable, alt: "El Cable", col: "right" },
    { src: Selfie, alt: "Us at the top", col: "right" },
    { src: Cairns, alt: "Cairns along the trail", col: "right" },
    { src: Trail, alt: "Our route", col: "left" },
  ];
</script>

<!-- Potes -->
<section>
  <HeroImage img={Potes} title="Picos de Europa" subtitle={"11/8 - 11/9"} />

  <h3 class="title">Potes</h3>

  <p class="block">
    In Santander, we rented a car and drove about 1.5 hours southwest towards <em>Picos de Europa.</em>
    Picos is a national park, and has entrances from all 4 directions. The park is massive, and we only
    explored a small part of it. On our way to our lodgings (a small guesthouse), we passed through a tiny town
    called Potes. The town has grown outwards from a medieval tower that's served variously as a fortress,
    prison, and city hall. It has a small river running through it, with beautiful stone bridges and streets.
    We happened to be visiting during the town's annual <em>Fiesta del Orujo</em>. Spirits were high, and the
    tiny streets were packed. During the festival attendees taste (and judge) a local liquor called
    <em>Orujo</em>, distilled using the solids leftover from winemaking.
  </p>

  <PhotoGrid array={potes} />
</section>

<!-- Picos de Europa & "El Cable" -->
<section>
  <h3 class="title">PR-PNPE 24 Puertos de Áliva</h3>

  <p class="block">
    The next morning, we drove about 15 minutes to the <em>Fuente De</em> cable car ("El Cable").
    The cable's length is just under a mile, and climbs about 2,400 feet from the bottom station.
    I remember reading somewhere this is the largest aerial gain for a cable car in Europe.
    Hands down, for both Jenny and me, this is one of the best hikes we've ever taken. From the upper station,
    we circled the summit and worked our way down to the bottom. The whole route took us about 3.5 hours.
    Again, we lucked out with completely clear weather; if the trail had been muddy, the last hour might
    have been a little less pleasant.
  </p>

  <img src={Picos1} alt="Picos de Europa" style="padding: 0 8px; margin-top: -6px; margin-bottom: 0px;">
  <PhotoGrid array={picos} />
</section>

<!-- Metrics -->
<section>
  <h3 class="title">Metrics</h3>

  <p class="block">
    The 8th was a bit of a car day, but we made up for things on the 9th.
    At this point we're averaging {Math.round(mean(data.map(d => d.steps))).toLocaleString()}
    steps per day.
  </p>
  
  <Plot metrics={data} min_dt={dayjs("11/08/2025")} />
</section>
