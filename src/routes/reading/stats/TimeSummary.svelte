<script lang="ts">
  import { median, max } from "d3";
  import { Plot, Line, Dot, TickX } from "svelteplot";

  let { books, currentBooks, primaryColor } = $props();
  let medianDays = Math.round(median(currentBooks.map(book => book.days)));
  let longestTime = max(currentBooks.map(book => book.days));
  let longestBook = currentBooks.filter(book => book.days == longestTime).at(0).title;

  // Kaplan-Meier estimator for \hat{S}(t)
  function km(booksArray) {
    booksArray = booksArray.sort((a, b) => a.days - b.days);
    let X = [... new Set(booksArray.map(book => book.days))].sort((a, b) => a - b);
    let Y = [];

    // Ensure that we have an estimate at the left-most bound of the plot
    if (!booksArray.map(book => book.days).includes(0)) {
      Y.push({ x: 0, p: 1, d_i: null, n_i: null });
    }

    for (const x of X) {
      let d_i = booksArray.filter(book => book.days === x).length;
      let n_i = booksArray.filter(book => book.days >= x).length;
      let p = 1 - (d_i / n_i);
      p *= Y.length > 0 ? Y.at(-1).p : 1;
      Y.push({ x, p, d_i, n_i });
    }

    return Y;
  }

  let Y = km(books);
  let Y_c = km(currentBooks);
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
  We can also visualize this distribution as a survival curve. From this plot, we can estimate the
  probability of a new book taking X-many days to finish. Looking at the entire dataset, the curve
  predicts that almost 50% of books are finished before 30 days, and around 75% are finished after
  90 days.
</p>

<Plot 
  grid
  x={{ label: "Reading Time (Days)", domain: [0, 600], ticks: [0, 30, 90, 180, 365, 545] }}
  y={{ label: "Probability a book was still in-progress after X days", domain: [0, 1], ticks: [0, 0.25, 0.5, 0.75, 1] }}
>
  <Line data={Y} x="x" y="p" />
  <Dot data={Y} x="x" y="p" symbol="plus" />
  <Line data={Y_c} x="x" y="p"stroke={primaryColor} />
  <Dot data={Y_c} x="x" y="p" symbol="plus" stroke={primaryColor} />
</Plot>
