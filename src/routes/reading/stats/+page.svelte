<script lang="ts">
  import dayjs from "dayjs";
  import { range } from "d3-array";
  import { mean, sum, max } from 'd3';
  import { Plot, Line, Dot, TickX } from 'svelteplot';
  
  import ReadingHeader from "../ReadingHeader.svelte";
  import YearOverview from "./YearOverview.svelte";
  import PagesSummary from "./PagesSummary.svelte";
  import PublicationSummary from "./PublicationSummary.svelte";
  import TimeSummary from "./TimeSummary.svelte";
  import BookTable from "./BookTable.svelte";

  let { data } = $props();
  let primaryColor = $state("#EFCB68");

  // Determine the current year, and set an initial state
  let currentYear = dayjs().year();
  let selectedYear = $state(currentYear);
  let lastYear = $derived(selectedYear - 1);

  // Clean up the retrieved books
  let booksArray = $derived(JSON.parse(data.books));
  let books = $derived.by(() => {
    let out = booksArray.map(book => {
      book.started = dayjs(book.started);
      book.finished = dayjs(book.finished);
      book.days = book.finished.diff(book.started, "day");
      book.pages = book.pages !== null && book.pages !== undefined ? book.pages : -1;
      book.yr_finished = book.finished.year();
      return book;
    });
    return out;
  });

  let currentBooks = $derived(books.filter(book => book.finished.year() === selectedYear));
  let lastBooks = $derived(books.filter(book => book.finished.year() == lastYear));
</script>

<ReadingHeader />

<div>
  <p class="mb-2">
    This is a summary of my reading habits, similar to the year-end report that services like
    like "Goodreads" provide. You can view different years by clicking the buttons below.
  </p>
  {#each range(2022, currentYear + 1) as year}
    <button class="button mr-1" onclick={() => selectedYear = year}>{year}</button>
  {/each}
</div>
<hr>

{#key selectedYear}
  <YearOverview {currentYear} {selectedYear} {currentBooks} {lastBooks} {primaryColor} />

  <PagesSummary {books} {currentBooks} {primaryColor} />

  <PublicationSummary {selectedYear} {books} {currentBooks} {primaryColor} />

  <TimeSummary {books} {currentBooks} {primaryColor} />

  <BookTable {currentBooks} />
{/key}
