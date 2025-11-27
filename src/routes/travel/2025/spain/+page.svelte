<script lang="ts">
  import dayjs from "dayjs";

  import Bilbao from "./Bilbao.svelte";
  import NorteSantander from "./NorteSantander.svelte";
  import Picos from "./Picos.svelte";
  import XijonOviedo from "./XijonOviedo.svelte";

  let metrics = [
    {
      date: "2025-10-31",
      steps: 10468,
      dist: 4.84,  // miles
      floors: 3,
    },
    {
      date: "2025-11-01",
      steps: 4298,
      dist: 1.99,
      floors: 1,
    },
    {
      date: "2025-11-02",
      steps: 20418,
      dist: 9.38,
      floors: 24,
    },
    {
      date: "2025-11-03",
      steps: 17079,
      dist: 7.3,
      floors: 106,
    },
    {
      date: "2025-11-04",
      steps: 14324,
      dist: 5.85,
      floors: 32,
    },
    {
      date: "2025-11-05",
      steps: 37269,
      dist: 16.84,
      floors: 155,
    },
    {
      date: "2025-11-06",
      steps: 19083,
      dist: 8.12,
      floors: 61,
    },
    {
      date: "2025-11-07",
      steps: 18442,
      dist: 7.91,
      floors: 17,
    },
    {
      date: "2025-11-08",
      steps: 12022,
      dist: 5.17,
      floors: 25,
    },
    {
      date: "2025-11-09",
      steps: 27189,
      dist: 11.61,
      floors: 133,
    },
    {
      date: "2025-11-10",
      steps: 11744,
      dist: 4.78,
      floors: 15,
    },
    {
      date: "2025-11-11",
      steps: 20012,
      dist: 8.07,
      floors: 61, 
    },
    {
      date: "2025-11-12",
      steps: 9521,
      dist: 3.89,
      floors: 10,
    },
    {
      date: "2025-11-13",
      steps: 16151,
      dist: 6.56,
      floors: 19,
    },
    {
      date: "2025-11-14",
      steps: 4732,
      dist: 1.9,
      floors: 3,
    },
  ];

  for (let index = 0; index < metrics.length; index++) {
    let item = metrics[index];
    item.date = dayjs(item.date).toDate();
    item.steps_cum = item.steps;
    item.floors_cum = item.floors;
    item.dist_cum = item.dist;

    if (index > 0) {
      let prev = metrics[index - 1];
      item.steps_cum += prev.steps_cum;
      item.floors_cum += prev.floors_cum;
      item.dist_cum += prev.dist_cum;
    }
  }

  let segment = $state("bilbao");
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=trending_up" />
  <title>ndrewwm | northern spain 2025</title>
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | travel | Northern Spain, 2025</h1>
</header>

<main class="container">
  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m70!1m12!1m3!1d1486358.7346110474!2d-5.752462999909664!3d43.31332989280407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m55!3e0!4m5!1s0xd4e59892c0a4453%3A0x2efe1cc29449f1d5!2s48920%20Portugalete%2C%20Biscay%2C%20Spain!3m2!1d43.318247899999996!2d-3.0211969!4m5!1s0xd4ef3cb6f721e6f%3A0xf2281c1216c70819!2sCastro%20Urdiales%2C%20Spain!3m2!1d43.368822099999996!2d-3.2156354!4m5!1s0xd4eecfb82c6c143%3A0x9fd43576b706143b!2sIslares%2C%20Spain!3m2!1d43.404205499999996!2d-3.2999497!4m5!1s0xd4ec0721d3b6e97%3A0x3b8facb07633b43b!2sLaredo%2C%20Spain!3m2!1d43.408912199999996!2d-3.4316508999999997!4m5!1s0xd4949ae8a6bee71%3A0xd27cdc801682ba96!2sSantander%2C%20Spain!3m2!1d43.4636346!2d-3.8226402!4m5!1s0xd49b3dde66acefb%3A0x520e9f3fdcb58e2!2sPotes%2C%20Spain!3m2!1d43.1535975!2d-4.623611299999999!4m5!1s0xd49cc070931f453%3A0x90dd2682e3c9f685!2sFuente%20D%C3%A9%2C%20Spain!3m2!1d43.1442372!2d-4.8122148!4m5!1s0xd368d6a8d3fdef1%3A0x30872b60589f7d3e!2sOviedo%2C%20Spain!3m2!1d43.3622541!2d-5.8485401!4m5!1s0xd367c66cbf494bf%3A0xbd06d207048d3536!2zR2lqw7NuLCBTcGFpbg!3m2!1d43.5322493!2d-5.660973299999999!5e0!3m2!1sen!2sus!4v1763326189341!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
   <div class="select mt-2 mb-4">
     <select name="segment" id="segment" bind:value={segment}>
       <option value="bilbao">Bilbao & the Basque Country</option>
       <option value="norte">Camino Norte, Santander</option>
       <option value="picos">Picos de Europa</option>
       <option value="xijon">Oviedo & Gijon</option>
      </select>
    </div>

  {#if segment === "bilbao"}
    <Bilbao {metrics} />
  {:else if segment === "norte"}
    <NorteSantander {metrics} />
  {:else if segment === "picos"}
    <Picos {metrics} />
  {:else}
    <XijonOviedo {metrics} />
  {/if}
</main>

<style>
  header {
    font-family: "Micro 5";
    font-size: 40px;
  }
</style>
