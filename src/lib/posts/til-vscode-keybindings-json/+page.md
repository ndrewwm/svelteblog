---
title: "TIL: VS Code's keybindings.json file"
description: |
  Something I hadn't tinkered with before today: how to map keys to commands in VS Code.
author: Andrew Moore
date: "2025-02-14"
categories: ["til", "programming", "IDEs"]
slug: til-vscode-keybindings-json
format:
  gfm:
    variant: +yaml_metadata_block
---

This is something I haven't bothered to tinker with until today. I've been working with a local DuckDB database to perform some data validation at work, and rather than reaching for DataGrip/DBeaver, I wanted to stick with using VS Code. VS Code's Python extension automatically rigs up a keybinding for `shift+enter` to run selected text as Python code (if it detects that the file you're editing is a Python file). I was looking for something equivalent for DuckDB, but when googling I came across a tutorial from [MotherDuck](https://motherduck.com/blog/duckdb-tutorial-for-beginners/). In the upper 1/3 of the tutorial, they offer this snippet:

```json
{
    "key": "shift+enter",
    "command": "workbench.action.terminal.runSelectedText"
}
```

It's exactly as easy as you'd expect. From VS Code's command palette (`cmd+shift+p`), search for "Open Keyboard Shortcuts (JSON)", and add the entry to the array. Note, as written above, this might conflict with other extensions (such as Python's). You can add a `"when"` key to ensure the binding is selective:

```json
{
    "key": "shift+enter",
    "command": "workbench.action.terminal.runSelectedText",
    "when": "editorLangId != python"
}
```

VS Code is context aware of this file, so it's able to auto-complete the value under `"command"`. I didn't need to type out the full string before it suggested what I was looking for.
