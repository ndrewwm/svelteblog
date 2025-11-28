<script lang="ts">
  import HeroImage from "./HeroImage.svelte";
  import PhotoGrid from "./PhotoGrid.svelte";
  import Plot from "./Plot.svelte";
  import dayjs from "dayjs";
  import { mean } from "d3";

  let { metrics } = $props();
  let data = metrics.filter(d => d.date <= dayjs("11/04/2025"));

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
    { src: Bilbao, alt: "Mural in front of Plaza Nueva." },
    { src: BilbaoMonument, alt: "\"Artepe\" by Juanjo Novellasteel, a monument to those lost in the Basque country during the Civil War." },
    { src: BilbaoSelfie, alt: "Jenny and I, sunset over Bilbao." },
    { src: BilbaoSunset, alt: "The \"Bilbao\" railing surrounding the Artxanda viewpoint, overlooking the city." },
    { src: BilbaoRiverfront, alt: "Streetlevel view of the riverfront winding through the city." },
    { src: BilbaoAdams, alt: "Sculpture of John Adams, downtown Bilbao." },
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
    { src: Coast, alt: "Looking out at the Bay of Biscay, close to Gaztelugatxe." },
    { src: Urdaibai, alt: "The Urdaibai Estuary." },
    { src: Gernika, alt: "A reproduction of Picasso's \"Guernica\" as a mural in Gernika-Lumo. The words \"'Guernica' gernikara\" (\"bring 'Guernica' to Gernika\") are inscribed below it." },
    { src: GernikaCityHall, alt: "Gernika-Lumo city hall." },
  ];

  let pinxtos = [
    { src: Pinxto1, alt: "Pinxtos! Left: brie cheese, apple, jam, and mango puree. Right: quail egg, brie cheese, chorizo, and fried potato." },
    { src: Pinxto2, alt: "Another pairing of pinxtos." },
    { src: Pinxto3, alt: "Still more. This one includes a cheese soup, and a boiled egg with paprika, pork belly, potatoes, and mayo." },
    { src: Pinxto4, alt: "And more." },
  ];
</script>

<!-- Bilbao -->
<section class="mt-4">
  <HeroImage img={coverPhoto.src} title={"Bilbao"} subtitle={"11/1 - 11/4"} alt={coverPhoto.alt} />

  <p class="block">
    Bilbao is the de facto capital of the Basque Country (<em>Euskal Herria</em> [Euskara], <em>Pais Vasco</em> [Spanish]).
    Boise is home to the largest Basque diaspora outside of Spain, and the city hosts <em>Jaialdi</em>, a Basque cultural festival,
    roughly every 5 years <a href="https://www.jaialdi.com/history-of-jaialdi/">since 1987</a> (although this was disrupted by the 2020 pandemic).
    We visit downtown's Basque block almost every week, but Jenny and I were excited to visit the region for ourselves.
  </p>

  <PhotoGrid array={bilbaoColor} />

  <p class="block">
    Jenny and I stayed in <em>Casco Viejo</em>, the city's old-town. We were a scant minute or so
    from Plaza Nueva, an excellent spot to find <em>pinxtos</em> and enjoy a midday <em>vermut</em>.
    The neigborhood is distinctively visible from the Artxanda viewpoint, due to its shorter buildings
    and slimmer streets compared to the rest of the city. Overall, we enjoyed how walkable
    Bilbao was. The city's riverbanks have been reclaimed over the past 3 decades, converting
    warehouses and staging areas to pleasant public spaces.
  </p>
</section>

<!-- Guggenheim -->
<section class="mt-4">
  <h3 class="title">The Guggenheim Museum</h3>

  <p class="block">
    Bilbao has undergone a transformation away from its long-running industrial history. During the 80s and through the late 90s,
    the <a href="https://www.itsasmuseum.eus/en/discover/permanent-exhibition/the-shipingbuilding-industry-steel-shipyards/">shipbuilding</a>
    and mining industries that had previously sustained the city were fading. Some bombings carried out by
    the ETA (a Basque separatist group) were done to 
    <a href="https://www.cnn.com/WORLD/9710/17/spain.eta/index.html">protest the opening</a> of the Guggenheim itself.
    Today, the Guggenheim is a symbol for how Bilbao has reinvented itself, and become an international destination.
    Directly and indirectly, the museum produces about €400M for the city
    <a href="https://www.bbc.co.uk/programmes/articles/1HL3drXNNWQVq7tpC6pMRsJ/the-bilbao-effect-how-20-years-of-gehrys-guggenheim-transformed-the-city">each year</a>.
    The museum almost felt smaller inside than I expected. Its second floor was hosting an exhibition from American artist Barbara Kruger,
    titled <a href="https://www.guggenheim-bilbao.eus/en/exhibitions/barbara-kruger">"Another day. Another night."</a>
  </p>

  <PhotoGrid array={gug} />
</section>

<!-- Basque Country -->
<section class="mt-4">
  <h3 class="title">Gaztelugatxe, Mundaka, Gernika-Lumo</h3>

  <p class="block">
    On our second day, we booked a tour that got us outside Bilbao. Our guide, a local named Asier,
    took us to a local landmark called Gaztelugatxe (famous as a set for <em>Game of Thrones</em>),
    a fishing village called Mundaka, and the small city of Gernika-Lumo. Jenny and I haven't watched
    <em>Game of Thrones</em>, but the trail up to the church of San Juan on Gaztelugatxe provided some
    incredible views. Unfortunately, due to the show's popularity, the peninsula suffers from overcrowding
    during peak seasons. Similar to our experiences visiting Japan, there's ambivalence from residents
    about the impact of tourism. On one hand, visitation stimulates conservation efforts and provides
    economic benefits, but these efforts are calibrated in part by the gaze and desires of tourists.
    It was hard to avoid thinking about this during our drive along the tiny mountain roads leading
    to Gaztelugatxe.
  </p>

  <PhotoGrid array={basqueCountry} />

  <img src={Mundaka} alt="Panoramic view of the Urdaibai estuary." style="padding: 0 8px; margin-top: -6px; margin-bottom: 8px;">

  <p class="block">
    I was quite struck by our visit to Gernika-Lumo. The town is home to the 
    <a href="https://en.wikipedia.org/wiki/Gernikako_Arbola"><em>Gernikako Arbola</em></a> ("tree of
    Gernika"), whose ancestors were a traditional meeting place for the region's representative
    assemblies during the middle ages. The tree is considered a symbol of the Basque people's tradition
    of self-governance, formalized as laws called <em>fueros</em>. The <em>fueros</em> are recognized
    as having influenced John Adams (and the subsequent writing of the US constitution), who
    <a href="https://josephlvdonica.substack.com/i/155235405/back-to-adams">wrote about them</a>
    during his trip to Europe in 1780, in which he passed through Bilbao.
  </p>

  <p class="block">
    However, most people outside the Basque Country probably know of the city due to Picasso's
    famous painting, <em>Guernica</em>. The mural depicts the bombing of the town during April 1937,
    conducted by Nazi Germany's Condor Legion. From the limited background reading I've done,
    there seems to be fair amount of ambivalence from non-Basque authors on how to understand the
    event, with much ink spent on the grim accounting of how many people actually died during the
    raids. You can see examples of this debate playing out in miniature within the Wikipedia
    <a href="https://web.archive.org/web/20251128222127/https://en.wikipedia.org/wiki/Bombing_of_Guernica">article</a> on the bombing.
  </p>
  
  <p class="block">
    I lack familiarity with this historical debate, but there are undisputed details that make the
    bombing rightly understood as a war crime. Nominally, the bombing was meant to impede the
    retreat of Republican forces on the front east of Gernika. Specifically, bridges and roads were
    key targets, if you accept this view. However, the Luftwaffe used incendiary bombs, setting fires
    that burned for several days. This isn't easily reconciled with claims that the bombing was
    tactical. Ultimately, something like 75% of the city was destroyed as a result of the raids.
    I've seen arguments that "pinpoint bombing" was not possible due to technical limitations,
    but this particular phrase has always been pernicious. An honest understanding of
    explosive weapons dropped on cities and homes recognizes that their shockwaves aren't containable.
    They leave physical and psychological scars on those unfortunate to be near them. There has never
    been such a thing as "pinpoint bombing", even with the technology we have today. In the aftermath,
    Franco's government propagated lies that communists (<em>rojos</em>) had intentionally set fire to
    the city, and that no one actually died during the events.
  </p>

  <p class="block">
    The particular circumstances are unique, an ugly mix of military tactics and punishment of a fascist
    movement's enemies, but my sense is that Gernika-Lumo (and the Basque Country more generally) understands
    itself as part of a broader community of survivors of excessive and industrialized violence. 
    The city has been working to preserve the historical memory of what happened, via the recording of oral
    accounts from survivors, and archiving photography from before and after the bombing. A sapling from the
    Ginkgo tree that survived the atomic bombing of Hiroshima has been planted in a park south of the "Guernica"
    mural. While the particulars differ greatly, I believe this broader historical understanding is why
    we saw so many expressions of solidarity with the Palestinian people throughout the region. It's almost
    inconspicuous in the photo above, but the idea of a Palestinian flag being displayed on a city hall in
    the US is almost inconceivable.
  </p>

  <p class="block">
    Lastly, here are a few additional things we learned about the Basque country:
  </p>

  <ul>
    <li>
      The Basque language, <em>Euskara</em>, is a language isolate. It might use some Spanish loanwords, but
      is linguistically unrelated to other languages in Europe. The language was banned during Franco's
      regime (people could be fined for speaking the language in public). After Spain returned to democratic
      governance, the region was able to (re)establish Euskara as an official language, alongside Spanish.
      Our guide, Asier, told us that 75% of secondary school students take their finishing exams in Euskara.
      I haven't been able to find statistics on this exact claim, but I did find reporting that roughly
      <a href="https://web.archive.org/web/20231230023936/https://basquetribune.com/the-basque-language-gains-speakers-but-no-surge-in-usage/">
        75% of those aged between 16-24
      </a>
      in the Basque Autonomous Community speak the language.
    </li>
    <li>
      94% of tax revenue collected within the Basque Country remains within the region. This was established as
      part of Spain's entry to the European Union, and echoes the ancient "Basque Privileges" (<em>fueros</em>).
      Asier speculated that this may partially explain why the trajectory of the Basque Country has differed from
      Catalonia (another region with an independence movement).
    </li>
    <li>
      Support for an independent Basque country is fairly low; it reached highs of around <a href="https://telesforomonzonlab.eus/2021-11-survey/?lang=en">40% in 2021/2022,</a>
      but appears to have dropped to <a href="https://efe.com/espana/2024-11-26/rechazo-independencia-euskadi-alcanza-maximos-historicos/">around 19% (as of November 2024).</a>
    </li>
  </ul>
</section>

<!-- Pinxtos -->
<section class="mt-4">
  <h3 class="title">Pinxtos ("pinch-o", Spanish <em>pinchar</em>, "puncture")</h3>
  
  <p class="block">
    Turning to much lighter subjects, Pinxtos are a lovely feature of northern dining. Rather than going out for tapas, the Basque people
    have <em>pinxto potelo</em>, the act of hopping between bars to try different pinxtos. 
    Pinxtos are bar snacks, so they might seem reminiscent to tapas, but they differ from tapas in a few ways:
  </p>
  
  <ul>
    <li>
      Pinxtos are always standalone items, rather than a small portion of a larger dish.
      Instead of getting a slice of tortilla or a plate of paella, you're more likely to get a small bun or sandwich.
    </li>
    <li>
      Many pinxtos include a wooden skewer (pinchar). A classic pinxto is the <a href="https://es.wikipedia.org/wiki/Gilda_(pincho)">"Gilda"</a>:
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
<section class="mt-4">
  <h3 class="title">Metrics</h3>

  <p class="block">
    We were on our feet for a bunch of this trip! Here's some of the stats I logged on
    my watch each day. During this segment, we averaged about 
    {Math.round(mean(data.map(d => d.steps))).toLocaleString()} steps per day.
  </p>

  <Plot metrics={data} />
</section>
