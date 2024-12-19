<script lang="ts">
  import { onMount } from "svelte";

  export let value = 10;
  export let delay = 10;
  export let offset = 200;

  let i = Math.max(value - offset, 0);
  let t;

  $: {
    if (i === value) {
      if (t) {
        clearInterval(t);
        t = null;
      }
    }
  }

  onMount(() => {
    t = setInterval(() => {
      i += 1;
    }, delay);
  });
</script>

<span class="counter">{i}</span>

<style>
  .counter {
    font-size: xx-large;
    font-weight: bolder;
  }
</style>
