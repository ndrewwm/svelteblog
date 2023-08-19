<script>
  import Head from "$lib/components/Head.svelte";
  export let title;
  export let date;
</script>

<Head {title} />

<h1>{title}</h1>
<strong>{date}</strong>
