<script lang="ts">
  import { Plot, TickX } from "svelteplot";
  let { selectedYear, books, currentBooks, primaryColor } = $props();

  let currentLast5 = currentBooks.filter(book => (selectedYear - book.year) <= 5).length;
  let currentMore20 = currentBooks.filter(book => (selectedYear - book.year) > 19).length;

  let p_currentLast5 = Math.round(currentLast5 / currentBooks.length * 100);
  let p_currentMore20 = Math.round(currentMore20 / currentBooks.length * 100);
</script>

{#if currentBooks.length > 1}
  <p class="mb-2">
    <strong>{p_currentLast5}%</strong> of the books I finished were published within the last 5 years.
    <strong>{p_currentMore20}%</strong> of the books I finished were published more than 20 years ago.
  </p>
{/if}

<Plot x={{ tickFormat: (t) => String(t) }}>
  <TickX data={books} x="year" />
  <TickX data={currentBooks} x="year" stroke={primaryColor} />
</Plot>
