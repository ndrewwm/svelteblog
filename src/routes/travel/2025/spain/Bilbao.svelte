<script lang="ts">
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";
  import dayjs from "dayjs";

  let { metrics } = $props();
  let data = metrics.filter((d) => d.date <= dayjs("11/04/2025"));

  // Bilbao
  import Bilbao from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_101136388.jpg";
  import BilbaoMonument from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_160025770.MP.jpg";
  import BilbaoSunset from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_155328922.jpg";
  import BilbaoRiverfront from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_124739575.MP.jpg";
  import BilbaoAdams from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251104_163708699.MP.jpg";
  import BilbaoAlley from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_105455599.jpg";
  import BilbaoSelfie from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_155206222.jpg";

  // Guggenheim
  import GHMuseo1 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142636836.jpg";
  import GHMuseo2 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_135059106.jpg";
  import GHMuseo3 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142145041.jpg";
  import GHMuseo4 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_141455846.MP.jpg";
  import GHMuseo5 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142054254.jpg";
  import GHMuseo6 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142059110.MP.jpg";
  import GHMuseo7 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_145206082.jpg";
  import GHMuseo8 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_075705570.jpg";

  // San Juan de Gaztelugatxe, Mundaka, Gernika-Lumo
  import Gaztelugatxe from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_090105126.jpg";
  import Coast from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_092151772.jpg";
  import Mundaka from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_114335418.PANO.jpg";
  import Urdaibai from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_114020554.jpg";
  import Gernika from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_125036151.jpg"
  import GernikaCityHall from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_125328968.jpg";

  // Pinxtos
  import Pinxto1 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_114743169.jpg";
  import Pinxto2 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_143647908.jpg";
  import Pinxto3 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_185048065.jpg";
  import Pinxto4 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251104_191558220.MP.jpg";

  let bilbaoColor = [
    { src: Bilbao, alt: "Mural in front of Plaza Nuevo." },
    { src: BilbaoMonument, alt: "\"Artepe\" by Juanjo Novellasteel, a monument to those lost in the Basque country during the Civil War." },
    { src: BilbaoSelfie, alt: "Jenny and I, sunset over Bilbao." },
    { src: BilbaoSunset, alt: "The \"Bilbao\" railing surrounding the Artxanda viewpoint, overlooking the city." },
    { src: BilbaoRiverfront, alt: "Streetlevel view of the riverfront winding through the city." },
    { src: BilbaoAdams, alt: "Sculpture of John Adams, in downtown Bilbao." },
    { src: BilbaoAlley, alt: "Tall/portrait view of an alley in Casco Viejo."},
  ];

  let coverPhoto = {
    src: GHMuseo1,
    alt: "Overhead view of Richard Serra's \"The Matter of Time\", a series of curved steel sculptures that viewers are meant to walk through.",
  };

  let gug = [
    coverPhoto,
    { src: GHMuseo2, alt: "Plaque describing Serra's \"The Matter of Time\", including a layout of each sculpture." },
    { src: GHMuseo3, alt: "\"Untitled (Forever)\", Barbara Kruger, 2025" },
    { src: GHMuseo7, alt: "\"Maman\", Louise Bourgeois, 1999" },
    { src: GHMuseo4, alt: "\"Untitled (Forever)\", Barbara Kruger, 2025" },
    { src: GHMuseo5, alt: "\"Untitled (Forever)\", Barbara Kruger, 2025" },
    { src: GHMuseo6, alt: "\"Untitled (Forever)\", Barbara Kruger, 2025" },
    { src: GHMuseo8, alt: "Exterior of the Guggenheim, featuring \"the puppy\"." },
  ];

  let basqueCountry = [
    { src: Gaztelugatxe, alt: "Gaztelugatxe (\"Castle Rock\" in Euskara); famous as a set in \"Game of Thrones\"." },
    { src: Coast, alt: "" },
    { src: Urdaibai, alt: "" },
    { src: Gernika, alt: "" },
    { src: GernikaCityHall, alt: "" },
  ];

  let pinxtos = [
    { src: Pinxto1, alt: "Pinxtos! Left: brie cheese, apple, jam, and mango puree. Right: quail egg, brie cheese, chorizo, and fried potato." },
    { src: Pinxto2, alt: "Another pairing of pinxtos." },
    { src: Pinxto3, alt: "Still more. This one includes a cheese soup, and a boiled egg with paprika, pork belly, potatoes, and mayo." },
    { src: Pinxto4, alt: "And more." },
  ];
</script>

<!-- Bilbao -->
<section>
  <HeroImage img={coverPhoto.src} title={"Bilbao"} subtitle={"11/1 - 11/4"} alt={coverPhoto.alt} />

  <p class="block">
    Bilbao is the de facto capital of the Basque Country (<em>Euskal Herria</em> [Euskara], <em>Pais Vasco</em> [Spanish]).
    Boise is home to the largest Basque diaspora outside of Spain, and the city hosts <em>Jaialdi</em>, a Basque cultural festival,
    roughly every 5 years <a href="https://www.jaialdi.com/history-of-jaialdi/">since 1987</a> (although this was disrupted by the 2020 pandemic).
    We visit downtown's Basque block almost every week, but Jenny and I were excited to visit the region for ourselves.
  </p>

  <PhotoGrid array={bilbaoColor} />
</section>

<!-- Guggenheim -->
<section>
  <h3 class="title">
    The Guggenheim Museum
  </h3>

  <p class="block">
    Bilbao has undergone a transformation away from its long-running industrial history. During the 80s and through the late 90s,
    the shipbuilding and mining industries that had previously sustained the city were fading. Some bombings carried out by
    the ETA (a Basque separatist group) were done to 
    <a href="https://www.cnn.com/WORLD/9710/17/spain.eta/index.html">protest the opening</a> of the Guggenheim itself.
    Today, the Guggenheim is a symbol for how Bilbao has reinvented itself, and become an international destination.
    Directly and indirectly, the museum produces about €400M for the city
    <a href="https://www.bbc.co.uk/programmes/articles/1HL3drXNNWQVq7tpC6pMRsJ/the-bilbao-effect-how-20-years-of-gehrys-guggenheim-transformed-the-city">each year</a>.
  </p>

  <p class="block">
    The museum almost felt smaller inside than I expected. Its second floor was hosting an exhibition from American artist Barbara Kruger,
    titled <a href="https://www.guggenheim-bilbao.eus/en/exhibitions/barbara-kruger">"Another day. Another night."</a>
  </p>

  <PhotoGrid array={gug} />
</section>

<!-- Basque Country -->
<section>
  <h3 class="title">Gaztelugatxe, Mundaka, Gernika-Lumo</h3>

  <p class="block">On our second day, we booked a tour that got us outside Bilbao.</p>

  <PhotoGrid array={basqueCountry} />

  <img src={Mundaka} alt="" style="padding: 0 8px; margin-top: -6px; margin-bottom: 8px;">

  <p class="block">
    Here are some interesting things we learned about the Basque country:
  </p>

  <ul>
    <li>
      The Basque language, <em>Euskara</em>, is a language isolate. It might use some Spanish loanwords, but
      is linguistically unrelated to other languages in Europe. The language was banned during Franco's
      regime, but after Spain returned to democratic governance, the region was able to (re)establish Euskara as an official
      language. Our guide, Asier, told us that 75% of secondary school students take their finishing exams in Euskara.
    </li>
    <li>
      94% of tax revenue collected within the Basque Country remains within the region. This has roots in
      the ancient "Basque Privileges" that the Basques have held across centuries.
    </li>
    <li>
      Support for an independent Basque country is fairly low; it reached highs of around 40% in 2021/2022,
      but appears to have dropped to around 19-25% today.
    </li>
  </ul>
</section>

<!-- Pinxtos -->
<section>
  <h3 class="title">
    Pinxtos ("pinch-o", Spanish <em>pinchar</em>, "puncture")
  </h3>
  
  <p class="block">
    Pinxtos are a lovely feature of northern dining. Rather than going out for tapas, the Basque people
    have <em>pinxto potelo</em>, the act of hopping between bars to try different pinxtos. 
    Pinxtos are bar snacks, so they might seem reminiscent to tapas, but they differ from tapas in a few ways:
  </p>
  
  <ul>
    <li>
      Pinxtos are always standalone items, rather than a small portion of a larger dish.
      Instead of getting a slice of tortilla or a plate of paella, you're more likely to get a small bun or sandwich.
    </li>
    <li>
      Many pinxtos include a wooden skewer (pinchar). A classic pinxto is the <a href="https://es.wikipedia.org/wiki/Gilda_(pincho)">"gilda"</a>:
      a skewered trio of an olive, anchovie, and pickled banana pepper. These are super tasty, perfectly paired with a zurito (a half-pint from the bar's tap).
    </li>
    <li>
      Pinxtos almost always include bread, which is usually standard Spanish <em>pan</em>. However, we also saw restaurants experimenting with bao buns.
    </li>
    <li>
      The best thing we tried was probably the set of pinxtos in the bottom right. This was a
      caramelized apple with pulled duck, and a cup of fried swordfish (with a creamy sauce) and
      thinly sliced onions. Paired surprisingly well with <em>Vermut Preparativo</em> 
      (sweet vermouth mixed with a bit of Campari over ice).
    </li>
  </ul>
  
  <PhotoGrid array={pinxtos} />
</section>

<!-- Metrics -->
<section>
  <h3 class="title">
    Metrics
  </h3>

  <p class="block">
    We were on our feet 
  </p>

  <Plot metrics={data} />
</section>
