<script lang="ts">
  import { run } from 'svelte/legacy';

  import { onMount } from "svelte";

  interface Props {
    value?: number;
    delay?: number;
    offset?: number;
  }

  let { value = 10, delay = 10, offset = 200 }: Props = $props();

  let i = $state(Math.max(value - offset, 0));
  let t = $state();

  run(() => {
    if (i === value) {
      if (t) {
        clearInterval(t);
        t = null;
      }
    }
  });

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
