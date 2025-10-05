<script lang="ts">
  import { median, max } from "d3";
  import { Plot, Line, Dot, TickX } from "svelteplot";
  import { range } from "d3-array";

  let { books, currentBooks, primaryColor } = $props();
  let bins = range(-1, 545, 30);

  let y = [];
  for (const bin of bins) {
    let n = books.filter(book => book.days > bin).length;
    let p = n / books.length;
    y.push({ bin, n, p });
  }

  let y_current = [];
  for (const bin of bins) {
    let n = currentBooks.filter(book => book.days > bin).length;
    let p = n / currentBooks.length;
    y_current.push({ bin, n, p });
  }

  let medianDays = Math.round(median(currentBooks.map(book => book.days)));
  let longestTime = max(currentBooks.map(book => book.days));
  let longestBook = currentBooks.filter(book => book.days == longestTime).at(0).title;
</script>

{#if currentBooks.length > 1}
  <p class="mb-2">
    For each book, about <strong>{medianDays} days</strong> passed between the day I started reading and marking it finished.
    The book that took me the longest to read was <em>{longestBook}</em> ({longestTime} days).
  </p>
{/if}

<Plot>
  <TickX data={books} x="days" />
  <TickX data={currentBooks} x="days" stroke={primaryColor} />
</Plot>

<p class="mb-2">
  We can also visualize this distribution as a survival curve. This plot shows the proportion of
  books that are still in-progress after X-many days have passed since starting it.
  Using the entire dataset (the black line), we can see that I finish just under 50% of books within 30 days of starting them,
  and that almost 75% are finished within 90 days.
</p>

<Plot 
  grid
  x={{ label: "Reading Time (Days)", domain: [0, 560], ticks: [0, 30, 90, 180, 365, 545] }}
  y={{ label: "Proportion of books in-progress after X days", domain: [0, 1], ticks: [0, 0.25, 0.5, 0.75, 1] }}
>
  <Line data={y} x="bin" y="p" curve="step-after" />
  <Dot data={y} x="bin" y="p" symbol="plus" />
  <Line data={y_current} x="bin" y ="p" curve="step-after" stroke={primaryColor} />
  <Dot data={y_current} x="bin" y="p" symbol="plus" stroke={primaryColor} />
</Plot>
