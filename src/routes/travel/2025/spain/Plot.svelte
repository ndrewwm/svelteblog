<script lang="ts">
  import { Plot, AxisX, LineY, BarY } from "svelteplot";
  import dayjs from "dayjs";

  let { metrics, min_dt = null, max_dt = null } = $props();
  let cumulative = $state(true);
  let measure = $state("steps");
  let measureVar = $derived(cumulative ? measure + "_cum" : measure);
  let emphasis = "var(--main-code-txt-color)";

  let current = $state([]);
  if (min_dt !== null) {
    current = metrics.filter(d => d.date >= min_dt);
  }
</script>

<div class="is-flex">
  <div class="field">
    <div class="control">
      <div class="select">
        <select name="measure" id="measure" bind:value={measure}>
          <option value="steps">Steps</option>
          <option value="floors">Floors</option>
          <option value="dist">Distance (mi)</option>
        </select>
      </div>
    </div>
  </div>
  <div class="field ml-2">
    <button class="button" onclick={cumulative = !cumulative}>
      {cumulative ? "Daily" : "Cumulative"}
    </button>
  </div>
</div>

<div class="mt-2 mb-5">
  {#if cumulative}
    <Plot grid inset={10} x={{ tickFormat: d => [31, 1].includes(d.getDate()) ? dayjs(d).format("MMM D") : d.getDate() }}>
      <AxisX tickCount={ metrics.length } />
      <LineY data={metrics} x="date" y={measureVar} marker="circle" strokeWidth={2.5} />
      {#if min_dt}
        <LineY data={current} x="date" y={measureVar} stroke={emphasis} marker="circle" strokeWidth={2.5} />
      {/if}
    </Plot>
  {:else}
    <Plot grid inset={10} x={{ tickFormat: (d) => [31, 1].includes(d.getDate()) ? dayjs(d).format("MMM D") : d.getDate() }}>
      <AxisX title="" />
      <BarY data={metrics} x="date" y={measureVar} />
      {#if min_dt}
        <BarY data={current} x="date" y={measureVar} stroke={emphasis} fill={emphasis} />
      {/if}
    </Plot>
  {/if}
</div>
