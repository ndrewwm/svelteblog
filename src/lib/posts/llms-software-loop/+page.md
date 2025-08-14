---
title: "LLMs can't perform the software engineering loop"
author: Andrew Moore
date: "2025-08-14"
slug: llms-software-loop
description: >
  LLMs don't yet have "memory", which is a problem for software engineering tasks.
draft: false
categories: [software engineering]
preview: null
format:
  gfm:
    variant: +yaml_metadata_block
---

_(I know, I'm procrastinating on Part 2 of my LLM summary, but I wanted to jot this down.)_

This post, [_Why LLMs Can't Really Build Software_](https://zed.dev/blog/why-llms-cant-build-software), by Conrad Irwin has a nice way of concisely describing the basic tasks of software engineering ("The Software Engineering Loop"):

> When you watch someone who knows what they are doing, you'll see them looping over the following steps:
> 
> 1. Build a mental model of the requirements
> 2. Write code that (hopefully?!) does that
> 3. Build a mental model of what the code actually does
> 4. Identify the differences, and update the code (or the requirements).
> 
> There are lots of different ways to do these things, but the distinguishing factor of effective engineers is their ability to build and maintain clear mental models.

What Irwin is describing does sound like what I've felt like during a flow state while coding. Getting into that state usually means a) I have a good idea on how to solve the sub-problems within what's being asked, and b) a set of clear requirements. Like actual humans, LLMs also need detailed and effective requirements to do useful work. If there are any small virtues to be gleaned from the present moment, getting people to think about effectively and carefully communicating specifications is maybe a good thing.

Similarly, I liked Irwin's post for how concisely it captures the fact that writing a program involves creating mental models. It's simple advice, but diagramming things can be really helpful. Same goes for sketching what a resulting object/result should look like when it's returned. Being able to hold such mental models in your head, or transcribe them for future reference is second nature for practitioners.

As Irwin notes, LLMs can't (currently?) pick up and drop information as needed to solve sub-problems. I'm reminded again about Prefect's ControlFlow framework, in which child "agents" are spawned as-needed and prompted to perform very specific tasks.[^1] These "children" then engage in dialog with a "parent" that's been prompted with broader imperatives or goals. But this is not the same thing as having a mind that can understand or create models of problems on their own-- this is just intuition, but I'm not sure language is the right route to reach artificial cognition.

[^1]: I'm using "agent" very loosely to refer to separate instances of an LLM that's prompted to perform a role.
