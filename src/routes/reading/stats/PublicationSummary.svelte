<script lang="ts">
  import { Plot, AxisX, TickX } from "svelteplot";
  let { selectedYear, books, currentBooks, primaryColor } = $props();

  let currentLast5 = currentBooks.filter(book => (selectedYear - book.year) <= 5).length;
  let currentMore20 = currentBooks.filter(book => (selectedYear - book.year) > 19).length;

  function numberToWord(num: number): string | undefined {
    const digits = new Map([
      [0, "Zero"],
      [1, "One"],
      [2, "Two"],
      [3, "Three"],
      [4, "Four"],
      [5, "Five"],
      [6, "Six"],
      [7, "Seven"],
      [8, "Eight"],
      [9, "Nine"],
      [10, "Ten"],
      [11, "Eleven"],
      [12, "Twelve"],
      [13, "Thirteen"],
      [14, "Fourteen"],
      [15, "Fifteen"],
      [16, "Sixteen"],
      [17, "Seventeen"],
      [18, "Eighteen"],
      [19, "Nineteen"],
    ]);

    if (num >= 0 && num < 20) {
      return digits.get(num);  
    }
    return num.toString();
  }
</script>

{#if currentBooks.length > 1}
  <p class="mb-2">
    <strong>{numberToWord(currentLast5)}</strong> of the books I finished were published within the last 5 years.
    <strong>{numberToWord(currentMore20)}</strong> of the books I finished were published more than 20 years ago.
  </p>
{/if}

<Plot>
  <TickX data={books} x={(d) => d.pub_dt.toDate()} />
  <TickX data={currentBooks} x={(d) => d.pub_dt.toDate()} stroke={primaryColor} />
  <AxisX interval="10 year" tickFormat="YYYY" />
</Plot>
