<script lang="ts">
  let { imageArray } = $props();
  let n = imageArray.length;
  let index = $state(0);
  let img = $derived(imageArray.at(index));
</script>

<div class="slideshow-container mt-1 mb-1 columns is-centered">
  <div class="column is-four-fifths">
    <img src={img.src} alt={img.alt}>
    <button class="button prev" onclick={() => index = index > 0 ? index - 1 : index}>&#10094;</button>
    <span class="button is-static">{index + 1} / {n}</span>
    <button class="button next" onclick={() => index = index < (n - 1) ? index + 1 : index}>&#10095;</button>
  </div>
</div>

<style>
  img {
    display: block;
    max-width: 100%;
    max-height: 65vh;
    width: auto;
    height: auto;
    object-fit: cover;
  }
</style>
