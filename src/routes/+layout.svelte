<script lang="ts">
  import "$lib/styles/style.css";
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div id="main" class="container pl-2 pr-2">
  {@render children?.()}
</div>

<style>
  #main {
    max-width: 90ch;
  }
</style>
