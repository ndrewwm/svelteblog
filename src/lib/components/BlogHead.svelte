<script lang="ts">
  import Banner from "$lib/util/Banner.svelte";
  import Head from "$lib/components/Head.svelte";
  let { title, date } = $props();
</script>

<Head {title} />
<Banner title={"blog"} link="/blog" />
<hr>

<h1>{title}</h1>
<strong>{date}</strong>
