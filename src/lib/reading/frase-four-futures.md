---
title: "Four Futures: Life After Capitalism"
author: Peter Frase
year: 2015
isbn: 9781781688137
pages: 160
slug: frase-four-futures
started: 2025-05-20
finished: 2025-05-26
pct: 100
stars: 4
mode: print
pages: 160
---

I first read Frase's _Four Futures_ while traveling in 2017. The book's introduction opens cheekily with the following line: _"Two specters are haunting Earth in the twenty-first century: the specters of ecological catastrophe and automation."_ These specters haven't disappeared since I first picked up this book; if anything, much has gotten worse. We continue to see record-breaking temperatures almost every summer, and some questions re: automation feel less abstract than they did in 2017. For these reasons, I picked up the book during another trip to see how it's aged.

Frase's book (which grew out of a 2011 [essay](https://jacobin.com/2011/12/four-futures)) begins from a grounding assumption: _capitalism is going to end._ Frase joins a _loooong_ line of authors starting with this claim, but its signature contention is that our society is facing a _crisis of scarcity_ and a _crisis of abundance_ at the same time. This contradictory dynamic 

<script>
  import { Plot, Text, RuleX, RuleY } from 'svelteplot';
  import { range } from 'd3-array';

  let txt = [
    { x: -0.5, y: 0.5, lab: "communism" }, 
    { x: 0.5, y: 0.5, lab: "socialism" },
    { x: 0.5, y: -0.5, lab: "exterminism" },
    { x: -0.5, y: -0.5, lab: "rentism" },
  ];

  let axes = [
    { x: -0.05, y: 0.87, lab: "equality", r: -90 },
    { x: -0.05, y: -0.85, lab: "hierarchy", r: -90 },
    { x: -0.85, y: 0.05, lab: "abundance", r: 0 },
    { x: 0.89, y: 0.05, lab: "scarcity", r: 0 },
  ]
</script>

<div class="container">
  <Plot
    x={{ domain: [-1, 1] }}
    y={{ domain: [-1, 1] }}
    axes={false}
    maxWidth="400px"
  >
    <Text data={axes} x="x" y="y" text="lab" rotate="r" />
    <Text data={txt} x="x" y="y" text="lab" fontSize={20} />
    <RuleX data={[0]} />
    <RuleY data={[0]} />
  </Plot>
</div>
