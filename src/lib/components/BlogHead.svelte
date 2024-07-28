<script>
  import Banner from "$lib/home/Banner.svelte";
  import Head from "$lib/components/Head.svelte";
  export let title;
  export let date;
</script>

<Head {title} />
<Banner sub={"blog"} link="/blog" />
<hr>

<h1>{title}</h1>
<strong>{date}</strong>
