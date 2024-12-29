<script lang="ts">
  export let isbn: string;
  export let size = "M";

  let img_url = `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
  let book_url = `https://openlibrary.org/isbn/${isbn}`;
</script>

<a href={book_url}>
  <img src={img_url} alt="Book cover for {isbn}." />
</a>
