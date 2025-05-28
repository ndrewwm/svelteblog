<script lang="ts">
  // https://svelte.dev/repl/3903a3796b294b52ac70db9f94fec98d?version=4.2.1
  import * as Plot from '@observablehq/plot';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();


  interface Props {
    options: Plot.PlotOptions;
    fixedWidth?: boolean;
    [key: string]: any
  }

  let { options, fixedWidth = false, ...rest }: Props = $props();

  let width = $state(400);

  let hash = $derived(JSON.stringify({ ...options, width }));

  let plot: HTMLElement | SVGElement & Plot.Plot;

  function myplot(node) {
      node.removeChild(node.children[0]);
      plot = Plot.plot({ ...options, ...(fixedWidth ? {} : { width }) });
      node.appendChild(plot);
      plot.addEventListener('click', (e) => {
          dispatch('click', { origEvent: e, value: plot.value });
      });
  }
</script>

{#key hash}
  <div bind:clientWidth={width} class="plot">
      <div use:myplot {...rest}><span></span></div>
  </div>
{/key}

<style>
  .plot { position: relative; }
  .plot :global(figure) { margin: 0 }
  .plot :global(h2) { font-size: 22px; margin-bottom: 10px }
  .plot :global(h3) { font-weight: normal; font-size: 14px; margin-top: 10px; }
  .plot :global(svg) {
    background: transparent!important;
  }
</style>
