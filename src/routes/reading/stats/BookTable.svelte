<script>
  let { currentBooks } = $props();
  let headers = ["Title", "Author", "Mode", "Published", "Pages", "Stars", "Days"];
  let fields = ["title", "author", "mode", "year", "pages", "stars", "days"];

  currentBooks = currentBooks
    .map(book => {
      book.slug = book.slug.replace("/src/lib/reading/", "").replace(".md", "");
      return book;
    })
    .sort((a, b) => a.days - b.days);
</script>

<p class="mb-4">
  And here's a list of each book I read. You can read my notes/summary of the book by clicking
  on its title.
</p>

<table class="table">
  <thead>
    <tr>
      {#each headers as header}
        {#if ["Published", "Pages", "Stars", "Days"].includes(header)}
          <th style="text-align: right;">{header}</th>
        {:else}
          <th>{header}</th>
        {/if}
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each currentBooks as book}
      <tr>
        {#each fields as field}
          {#if field === "title"}
            <td><a href={book.slug}>{book.title}</a></td>
          {:else if ["year", "pages", "stars", "days"].includes(field)}
            <td style="text-align: right;">{book[field]}</td>
          {:else}
            <td>{book[field]}</td>
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<div class="mb-4"></div>
