<script lang="ts">
  import { Plot, Dot, AxisX, LineY, BarY, Geo } from "svelteplot";
  import dayjs from "dayjs";

  let { metrics, min_dt = null, max_dt = null } = $props();
  let cumulative = $state(true);
  let measure = $state("steps");
</script>

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
<div class="field">
  <label for="checkbox" class="checkbox">
    <input 
      type="checkbox"
      name="cumulative"
      id="cumulative"
      bind:checked={cumulative}
    >
    Cumulative?
  </label>
</div>

<div class="mt-2 mb-5">
  {#if cumulative}
    <Plot grid={true}>
      <LineY data={metrics} x="date" y={measure + "_cum"} />
      <Dot data={metrics} x="date" y={measure + "_cum"} />
    </Plot>
  {:else}
    <Plot x={{ tickFormat: (d) => [31, 1].includes(d.getDate()) ? dayjs(d).format("MMM D") : d.getDate() }}>
      <BarY data={metrics} x="date" y={measure} />
    </Plot>
  {/if}
</div>
