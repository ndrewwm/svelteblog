<script lang="ts">
  import { onMount, tick } from "svelte";
  import Banner from "$lib/util/Banner.svelte";
  import RenderCommand from "$lib/home/RenderCommand.svelte";

  let terminalPrompt = "$ ";
  let terminalCommand = "";
  let terminalHistory: string[] = [];
  let terminalInputPrompt: HTMLInputElement;
  let divTerminalHistory: HTMLDivElement;

  onMount(() => scrollToBottom(terminalInputPrompt));

  async function scrollToBottom(node) {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }

  async function enterCommand() {
    // A bit more friendly to clear out the whitespace
    terminalCommand = terminalCommand.trim();

    if (terminalCommand === "") {
      return;
    }

    if (terminalCommand === "clear") {
      terminalHistory = [];
      terminalCommand = "";
      return;
    }

    if (terminalCommand === "all") {
      terminalHistory = [];
    }

    terminalHistory = [...terminalHistory, terminalCommand];
    terminalCommand = "";
    await tick();
    scrollToBottom(divTerminalHistory);
  }
</script>

<Banner />
<div id="terminal" class="block" bind:this={divTerminalHistory}>
  <span class="mt-2">Welcome to my site! (If you'd like a static view of this page, please <a href="/static">go here.</a>)</span>
  <span class="mb-2">Type 'help' to view a list of available commands.</span>

  {#key terminalHistory}
    {#each terminalHistory as command}
      <RenderCommand {terminalPrompt} {command} />
    {/each}
  {/key}

  <div class="block mt-2" bind:this={terminalInputPrompt}>
    <form on:submit={enterCommand}>
      <span class="prompt" style="color: #EFCB68;">{terminalPrompt}</span>
      <input
        type="text"
        class="terminal-input"
        bind:value={terminalCommand}
        style:width="90%"
        spellcheck="false"
        autocomplete="off"
        autocapitalize="off"
        autofocus
      />
      <input type="submit" hidden />
    </form>
  </div>
</div>

<style>
  #terminal {
    font-family: "Roboto Mono",monospace;
    /* height: 700px; */
    overflow: auto;
  }

  .terminal-input, .prompt {
    background-color: transparent;
    border: 0;
    outline: none;
    font-family: "Micro 5";
    font-size: 24px;
    font-weight: bolder;
    caret-color: #EFCB68;
    caret-shape: block;
  }
</style>
