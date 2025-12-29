<script lang="ts">
  import { MediaQuery } from "svelte/reactivity";
  import { onMount } from "svelte";
  import { Plot, Line, Text, HTMLTooltip } from "svelteplot";
  import dayjs from "dayjs";
  import { error } from "@sveltejs/kit";

  let data = $state([]);
  let rest = $state([]);
  let main = $state([]);
  let annotations = $state([]);
  let loading = $state(true);

  async function getData() {
    let url = "https://wcc.sc.egov.usda.gov/awdbRestApi/services/v1/data";
    let query =
      "stationTriplets=978%3AID%3ASNTL" +
      // "&elements=WTEQ%2CSNWD" +
      "&elements=SNWD" +
      "&duration=DAILY" +
      "&beginDate=2000-11-01" +
      "&endDate=2025-12-31" +
      "&periodRef=END" +
      "&centralTendencyType=ALL" +
      "&returnFlags=false" +
      "&returnSuspectData=false";

    let headers = {
      "User-Agent": "https://ndrewwm.com/blog/post/waiting-for-snow/",
    };

    let req = await fetch(`${url}?${query}`, {headers});
    if (!req.ok) {
      throw error(req.status, "This didn't work" + `${req.statusText}`);
    }
    let data = await req.json();
  
    let results = data[0]["data"][0];
    if (results === null || results === undefined) {
      throw error(500, "still not working");
    }

    // Filter to November and December
    let values = results["values"]
      .map((d) => {
        d.date = dayjs(d.date);
        d.mon = d.date.month();
        d.day = d.date.date();
        d.yday = d.mon === 10 ? d.day : d.day + 30;
        d.dt = d.date.toDate();
        d.year = d.date.year();
        
        let yr = "Y";
        if (d.year % 5 === 0) {
          yr += d.year.toString();
        }

        d.yr = yr;
        return d;
      })
      .filter((d) => [10, 11].includes(d.mon));

    // console.log(values);
    return values;
  }

  onMount(async () => {
    data = await getData();
    main = data.filter((d) => ["Y2005", "Y2015", "Y2025"].includes(d.yr));
    rest = data.filter((d) => !["Y2005", "Y2015", "Y2025"].includes(d.yr));
    annotations = [
      {yday: 57, yr: "Y2025", value: 5, txt: "2025"},
      {yday: 58, yr: "Y2015", value: 65, txt: "2015"},
      {yday: 34, yr: "Y2005", value: 43.5, txt: "2005"},
    ];
    loading = false;
  });

  let prefersDark = $state(new MediaQuery("prefers-color-scheme: dark", false));
  let primary = $state("#000411");
  let secondary = $state("#F2C1EA");
  let tertiary = $state("#EFCB68");
  let opacity = $state(0.15);

  if (prefersDark.current) {
    primary = "#EFCB68";
    secondary = "#E8DDA7";
    tertiary = "#F2C1EA";
    opacity = 0.2;
  }

</script>

{#if loading}
  <p class="loading is-size-3">Loading...</p>
{:else}
  <Plot
    grid
    title="Snow depth at Bogus Basin"
    subtitle="SNOTEL Station 978:ID:SNTL"
    x={{
      label: "",
      ticks: [9, 19, 29, 40, 50, 60],
      tickFormat: (d) => d <= 30 ? `11/${d+1}` : `12/${d - 30}`
    }}
    y={{
      label: "Snow depth (in.)",
      ticks: [0, 20, 40, 60],
    }}
    color={{
      scheme: {
        "Y2025": primary,
        "Y2015": secondary,
        "Y2005": tertiary,
        "Y": "grey",
      }
  }}>
    <Line data={rest} x="yday" y="value" stroke="yr" opacity={opacity} />
    <Line data={main} x="yday" y="value" stroke="yr" strokeWidth={2.2} />
    <Text data={annotations} x="yday" y="value" stroke="yr" fill="yr" text="txt" textClass="subtitle is-size-5" />
    {#snippet overlay()}
      <HTMLTooltip data={data} x="yday" y="value">
        {#snippet children({ datum })}
          <div class="tooltip m-0 p-0">
            <div>Year: {datum.year}</div>
            <div>Date: {datum.yday <= 30 ? `11/${datum.yday+1}` : `12/${datum.yday - 30}`}</div>
            <div>Snow depth (in): {datum.value}</div>
          </div>
        {/snippet}
      </HTMLTooltip>
    {/snippet}
  </Plot>
{/if}

<style>
  .loading {
    font-family: "Micro 5";
  }

  .tooltip {
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 1);
    opacity: 1;
  }
</style>
