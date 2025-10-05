<script lang="ts">
  import { median, min, max } from "d3";
  import { Plot, TickX } from "svelteplot";

  let { books, currentBooks, primaryColor } = $props();
  let medianPages = Math.round(median(currentBooks.map(book => book.pages)));

  let minPages = min(currentBooks.map(book => book.pages));
  let shortestBook = currentBooks
    .filter(book => book.pages === minPages)
    .at(0)
    .title;

  let maxPages = max(currentBooks.map(book => book.pages));
  let longestBook = currentBooks
    .filter(book => book.pages === maxPages)
    .at(0)
    .title;
</script>

{#if currentBooks.length > 1}
  <p class="mb-2">
    Each book was about <strong>{medianPages} pages</strong> long.
    The shortest book I read was <em>"{shortestBook}"</em> ({minPages} pages).
    The longest book I read was <em>"{longestBook}"</em> ({maxPages} pages).
  </p>
{/if}

<Plot>
  <TickX data={books} x="pages" />
  <TickX data={currentBooks} x="pages" stroke={primaryColor} />
</Plot>

<div></div>
