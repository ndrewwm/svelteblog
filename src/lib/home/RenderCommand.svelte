<script lang="ts">
  import About from "./About.svelte";
  import Blog from "./Blog.svelte";
  import Consulting from "./Consulting.svelte";
  import Contact from "./Contact.svelte";
  import Cv from "./Cv.svelte";
  import Now from "./Now.svelte";
  import Projects from "./Projects.svelte";
  import Tracks from "./Tracks.svelte";
  import TracksArtists from "./TracksArtists.svelte";
  import Website from "./Website.svelte";

  let availableCommands = [
    "now",
    "about",
    "blog",
    "contact",
    "cv",
    "website",
    // "consulting",
    "projects",
    "tracks",
    "all",
    "help",
    "clear",
    // "goto",
  ];

  export let terminalPrompt: string;
  export let command: string;
  let cmd: string, args: string;
  
  // Hack to allow the `--artists` option
  // Not very scalable to other commands...
  if (command.includes(" ")) {
    [cmd, args] = command.split(" ");
    if (cmd == "tracks") {
      command = cmd;
    }
  }
</script>

<div id="cmd" class="block mt-2">
  <span class="prompt">{terminalPrompt}</span>
  <span>{command}</span>
  {#if args !== undefined && command == "tracks"}
    {" " + args}
  {/if}
</div>

<!-- The huge set of {#if} blocks is not the most elegant :/ -->
<div class="block pl-5">
  {#if !availableCommands.includes(command)}
    <div style="color: red;">command not found: <strong>{command}</strong></div>
    <div>Type 'help' to view a list of available commands.</div>
  {/if}

  {#if command === "help"}
    <span class="command-list">
      {#each availableCommands as command}
        {#if ["help", "all", "clear"].includes(command)}
          <div style="font-weight: bolder;">{command}</div>
        {:else}
          <div>{command}</div>
        {/if}
      {/each}
    </span>
  {/if}

  {#if command === "now"}
    <Now />
  {/if}

  {#if command === "about"}
    <About />
  {/if}

  {#if command === "blog"}
    <Blog />
  {/if}

  {#if command === "contact"}
    <Contact />
  {/if}

  <!-- {#if command === "consulting"}
    <Consulting />
  {/if} -->

  {#if command === "cv"}
    <Cv />
  {/if}

  {#if command === "projects"}
    <Projects />
  {/if}

  {#if command == "tracks"}
    {#if args === "--artists"}
      <TracksArtists />
    {:else}
      <Tracks />
    {/if}
  {/if}

  {#if command === "website"}
    <Website />
  {/if}

  {#if command === "all"}
    <About section={true} />
    <Now section={true} />
    <Blog section={true} />
    <Contact section={true} />
    <!-- <Consulting /> -->
    <Website section={true} />
  {/if}
</div>

<style>
  #cmd {
    font-family: "Micro 5";
    font-size: 24px;
    color: #EFCB68;
  }
  .command-list {
    display: flex;
    flex-wrap: wrap;
  }
  .command-list > div {
    margin-right: 10px;
  }
</style>
