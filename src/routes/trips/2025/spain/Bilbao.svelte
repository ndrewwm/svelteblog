<script lang="ts">
  import Carousel from "./Carousel.svelte";
  import Bilbao from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_101136388.jpg";
  import BilbaoMonument from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_160025770.MP.jpg";
  import BilbaoSunset from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_155328922.jpg";
  import BilbaoRiverfront from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_124739575.MP.jpg";

  import GHMuseo1 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142636836.jpg";
  import GHMuseo2 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_135059106.jpg";
  import GHMuseo3 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142145041.jpg";
  import GHMuseo4 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_141455846.MP.jpg";
  import GHMuseo5 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142054254.jpg";
  import GHMuseo6 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_142059110.MP.jpg";
  import GHMuseo7 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_145206082.jpg";
  import GHMuseo8 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_075705570.jpg";

  import Pinxto1 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251102_114743169.jpg";
  import Pinxto2 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_143647908.jpg";
  import Pinxto3 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251103_185048065.jpg";
  import Pinxto4 from "$lib/assets/photos/trips/2025/spain/bilbao/PXL_20251104_191558220.MP.jpg";

  interface PhotoObj {
    src: string;
    alt: string;
  }

  let bilbaoColor = [
    { src: Bilbao, alt: "" },
    { src: BilbaoMonument, alt: "" },
    { src: BilbaoSunset, alt: "" },
    { src: BilbaoRiverfront, alt: "" },
  ] satisfies PhotoObj[];

  let gug = [
    { src: GHMuseo1, alt: "" },
    { src: GHMuseo2, alt: "" },
    { src: GHMuseo3, alt: "" },
    { src: GHMuseo7, alt: "" },
    { src: GHMuseo4, alt: "" },
    { src: GHMuseo5, alt: "" },
    { src: GHMuseo6, alt: "" },
    { src: GHMuseo8, alt: "" },
  ] satisfies PhotoObj[];

  let pinxtos = [
    { src: Pinxto1, alt: "" },
    { src: Pinxto2, alt: "" },
    { src: Pinxto3, alt: "" },
    { src: Pinxto4, alt: "" },
  ] satisfies PhotoObj[];
</script>

{#snippet photoArray(array: PhotoObj[])}
  {#each array as img}
    <div class="block">
      <img src={img.src} alt={img.alt}>
    </div>
  {/each}
{/snippet}

{#snippet photoGrid(array: PhotoObj[])}
  <div class="rrow block mb-2">
    <div class="ccolumn">
      {#each array.slice(0, Math.round(array.length / 2)) as img}
        <img src={img.src} alt={img.alt}>
      {/each}
    </div>
    <div class="ccolumn">
      {#each array.slice(Math.round(array.length / 2), array.length) as img}
        <img src={img.src} alt={img.alt}>
      {/each}
    </div>
  </div>
{/snippet}

<h2 class="title">Bilbao</h2>

<p class="block">
  Bilbao is the de facto capital of the Basque Country (<em>Pais Vasco</em> [Spanish], <em>Euskal Herria</em> [Euskadi]).
  Boise is home to the largest Basque diaspora outside of Spain, and the city hosts <em>Jaialdi</em>, a Basque cultural festival,
  roughly every 5 years <a href="https://www.jaialdi.com/history-of-jaialdi/">since 1987</a> (although this was disrupted by the 2020 pandemic).
  We visit downtown's Basque block almost every week, but Jenny and I were excited to visit the region for ourselves.
</p>

<!-- {@render photoArray(bilbaoColor)} -->
 {@render photoGrid(bilbaoColor)}

<h3 class="title">
  The Guggenheim
</h3>


{@render photoGrid(gug)}

<p class="block">
  Here are some interesting things we learned about the Basque country:
</p>

<ul>
  <li>
    The Basque language, <em>Euskadi</em>, is a language isolate. It borrows some Spanish as loanwords, but
    is linguistically unrelated to Latin and Germanic languages in Europe. The language was banned during Franco's
    regime, but after Spain returned to democratic governance, the region was able to (re)establish Euskadi as an official
    language. Our guide, Asier, told us that 75% of secondary school students take their finishing exams in Euskadi.
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

<h3 class="title">
  Pinxtos ("pinch-o"): from Spanish <em>pinchar</em>, "puncture".
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
</ul>

<!-- {@render photoArray(pinxtos)} -->
 {@render photoGrid(pinxtos)}

<!-- <Carousel 
  imageArray={[
    // {src: Bilbao, alt: "Bilbao mural"},
    {src: BilbaoMonument, alt: ""},
    {src: BilbaoSunset, alt: ""},
    {src: BilbaoRiverfront, alt: ""},
    {src: Pinxto1, alt: ""},
    {src: Pinxto2, alt: ""},
    {src: Pinxto3, alt: ""},
    {src: Pinxto4, alt: ""},
  ]} 
/> -->

<style>
  .rrow {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.ccolumn {
  flex: 50%;
  padding: 0 4px;
}

.ccolumn > img {
  margin-top: 8px;
  vertical-align: middle;
}
</style>
