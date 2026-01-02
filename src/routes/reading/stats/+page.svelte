<script lang="ts">
  import dayjs from "dayjs";
  import { range } from "d3-array";

  import ReadingHeader from "../ReadingHeader.svelte";
  import YearOverview from "./YearOverview.svelte";
  import PagesSummary from "./PagesSummary.svelte";
  import PublicationSummary from "./PublicationSummary.svelte";
  import TimeSummary from "./TimeSummary.svelte";
  import BookTable from "./BookTable.svelte";

  let { data } = $props();
  let primaryColor = "#EFCB68";

  let booksArray = JSON.parse(data.books);
  let books = booksArray.map(book => {
    book.started = dayjs(book.started);
    book.finished = dayjs(book.finished);
    book.days = book.finished.diff(book.started, "day");
    book.pages = book.pages !== null && book.pages !== undefined ? book.pages : -1;
    book.yr_finished = book.finished.year();
    return book;
  });

  // As we cross into a new year, it's likely I won't have finished a new book.
  // To ensure we populate the currentBooks/lastBooks arrays (and actually display content)
  // we need to update/set currentYear based on whether we have a finished book from the actualYear.
  let actualYear = dayjs().year();
  let currentYear = actualYear;
  if (books.filter(book => book.yr_finished === dayjs().year()).length === 0) {
    currentYear -= 1;
  }

  // Give the selectedYear an initial state
  let selectedYear = $state(currentYear);
  let lastYear = $derived(selectedYear - 1);

  let currentBooks = $derived(books.filter(book => book.yr_finished === selectedYear));
  let lastBooks = $derived(books.filter(book => book.yr_finished === lastYear));
</script>

<svelte:head>
  <title>ndrewwm | Books I finished this year</title>
</svelte:head>

<ReadingHeader />

<div>
  <p class="mb-2">
    This is a summary of my reading habits, similar to the year-end report that services
    like "Goodreads" provide. You can view different years by clicking the buttons below.
  </p>
  {#each range(2022, currentYear + 1) as year}
    <button 
      class="button mr-1 {selectedYear === year ? 'is-primary' : ''}"
      onclick={() => selectedYear = year}
    >
      {year}
    </button>
  {/each}
</div>
<hr>

{#key selectedYear}
  <YearOverview {actualYear} {currentYear} {selectedYear} {currentBooks} {lastBooks} {primaryColor} />

  <PagesSummary {books} {currentBooks} {primaryColor} />

  <PublicationSummary {selectedYear} {books} {currentBooks} {primaryColor} />

  <TimeSummary {books} {currentBooks} {primaryColor} />

  <BookTable {currentBooks} />
{/key}
