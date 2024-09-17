<script>
  import About from "$lib/home/About.svelte";
  import Banner from "$lib/util/Banner.svelte";
  import Blog from "$lib/home/Blog.svelte";
  import Consulting from "$lib/home/Consulting.svelte";
  import Contact from "$lib/home/Contact.svelte";
  import Now from "$lib/home/Now.svelte";
  import Projects from "$lib/home/Projects.svelte";
  import Website from "$lib/home/Website.svelte";
</script>

<Banner />

<div>
  <About section={true} />
  <br>
  <Now section={true} />
  <br>
  <Blog section={true} />
  <br>
  <Contact section={true} />
  <br>
  <!-- <Consulting section={true} /> -->
  <!-- <br> -->
  <Projects section={true} />
  <br>
  <Website section={true} />
</div>

<style>
  div {
    font-size: small;
  }
</style>
