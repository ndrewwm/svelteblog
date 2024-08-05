<script lang="ts">
  import { onMount } from "svelte";
  import Banner from "$lib/home/Banner.svelte";
  import RenderCommand from "$lib/home/RenderCommand.svelte";

  let terminalPrompt = "$ ";
  let terminalCommand = "";
  let terminalHistory: string[] = [];
  let terminalInputPrompt: HTMLInputElement;

  function enterCommand() {
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

    terminalHistory = [...terminalHistory, terminalCommand];
    terminalCommand = "";
    terminalInputPrompt.scrollIntoView();
  }
</script>

<Banner />

<div class="terminal-content">
  <div class="terminal-welcome-message">
    <p>Welcome to my site! (If you'd like a static view of this page, please <a href="/static">go here.</a>)</p>
    <p>Type 'help' to view a list of available commands.</p>
  </div>

  <div class="terminal-history">
    {#key terminalHistory}
      {#each terminalHistory as command}
        <RenderCommand {terminalPrompt} {command} />
      {/each}
    {/key}
  </div>

  <div class="terminal-input-prompt" bind:this={terminalInputPrompt}>
    <form on:submit={enterCommand}>
      <span class="prompt" style="color: #EFCB68;">{terminalPrompt}</span>
      <input
        type="text"
        class="terminal-input"
        bind:value={terminalCommand}
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
  .terminal-content {
    font-family: monospace;
  }

  .terminal-input {
    background-color: transparent;
    border: 0;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: bolder;
    /* width: 90%; */
    caret-color: #EFCB68;
    caret-shape: block;
  }
</style>
