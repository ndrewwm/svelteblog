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
---

I first read Frase's _Four Futures_ while traveling in 2017. It's a work of social theory, examining "fictional futures" in which humanity takes different courses in adapting to automation and ecological change. Given the current societal fixation on "AI", and our continued slide into climate change, I wanted to see how well it's aged. Frase's book emerged from a [2011 essay](https://jacobin.com/2011/12/four-futures), that starts with a basic premise:

> One thing we can be certain of is that capitalism will end. Maybe not soon, but probably before too long; humanity has never before managed to craft an eternal social system, after all, and capitalism is a notably more precarious and volatile order than most of those that preceded it. The question, then, is what will come next.

To inform this question, Frase argues that society faces two simultaneous crises: a crisis of _scarcity_ and a crisis of _abundance._ Aside from a narrow slice of the super-rich, the vast majority of people are being squeezed from two directions. First, due to climate change, we can anticipate increased scarcity of natural resources, and loss of habitat and agricultural land. This will compel massive migrations away from regions no longer hospitable to human life. We're already seeing this happen in-miniature, with the [Syrian Civil War](https://www.dw.com/en/how-climate-change-paved-the-way-to-war-in-syria/a-56711650) (which displaced 13 million people) being a tragic example of these dynamics.

Second, firms continue to pursue automation as a means of reducing production costs. By virtually any analysis, the past 100 years have seen vast increases in productivity, largely due to changing technology. Food production has historically been the most labor-intensive activity in human society, but this work is now substantially mechanized (at least within the global north).[^1] In my own lifetime, we've seen meaningful advances in robotics. _Bladerunner_'s replicants remain far-fetched, but the driverless shipping trucks from _Logan_ (2017) feel much more plausible, if not imminent. While still hypothetical, our society is haunted by the idea of machines displacing consequential shares human labor, resulting in its devaluation and/or mass unemployment.

The convergence of these two crises is what forces transition to a new social system. In the hypotheticals Frase describes, he assumes that automation will continue to increase across all sectors of the economy. What will vary is the extent to which the fruits of automation will be distributed, and how humanity will cope with climate change. Frase establishes two axes (abundance/scarcity, and equality/hierarchy) from these uncertainties, and the following typology: communism, rentism, socialism, and exterminism. 

<script>
  import { Plot, Text, RuleX, RuleY } from 'svelteplot';
  import { range } from 'd3-array';

  let domain = { domain: [-1, 1] };

  let text = [
    { x: -0.5, y: 0.5, lab: "communism" }, 
    { x: 0.5, y: 0.5, lab: "socialism" },
    { x: 0.5, y: -0.5, lab: "exterminism" },
    { x: -0.5, y: -0.5, lab: "rentism" },
  ];

  let axis_labels = [
    { x: -0.05, y: 0.87, lab: "equality", r: -90 },
    { x: -0.05, y: -0.85, lab: "hierarchy", r: -90 },
    { x: -0.84, y: 0.05, lab: "abundance", r: 0 },
    { x: 0.89, y: 0.05, lab: "scarcity", r: 0 },
  ]
</script>

<div class="columns is-centered">
  <div class="column is-half">
    <Plot x={domain} y={domain} axes={false}>
      <Text data={axis_labels} x="x" y="y" text="lab" rotate="r" />
      <Text data={text} x="x" y="y" text="lab" fontSize={20} />
      <RuleX data={[0]} />
      <RuleY data={[0]} />
    </Plot>
  </div>
</div>

Frase describes each of these futures as [ideal types](https://en.wikipedia.org/wiki/Ideal_type): "simplified, pure models of how society can be organized, designed to illuminate a few key issues that confront us today and will confront us in the future". Each of the book's main chapters are dedicated to one of the futures:

_**Communism:** abundance and equality._ An archetypal society is the kind found in _Star Trek_. While we see some military hierarchy in the form of Starfleet's command structure, humanity's civilization appears to be generally egalitarian. People are free to pursue their interests and passions, with material needs no longer a chief concern.

_**Rentism:** abundance and hierarchy._

_**Socialism:** scarcity and equality._

_**Exterminism:** scarcity and hierarchy._

This vantage point is one of the things that makes _Four Futures_ different from other writing I've encountered regarding the anticipated impacts of technology. In much writing for popular audiences (which Frase critiques in the book's introduction), we often see a vaguely utopian outlook with regards to technological advances. Instead of assuming that improved technology results in shared prosperity and the creation of new forms of work, 

<!-- Outlining:
  - why is Frase writing this book?
    - Frase sees two contradictory crises converging: automation *and* scarcity
  
  - what are the four futures?
    - communism: equality and abundance
    - rentism: hierarchy and abundance
    - socialism: equality with scarcity
    - exterminism: hierarchy and scarcity

  - insight that feels more resonant to me upon a second read: we might get more than one of these futures
    - history is not linear, there are regressions

  - why do I like this book?
    - the framing does feel useful generative for discussion
    - how do we push forward towards the futures that are desirable?
    - what do we need to mitigate today, in order to avoid landing in one of the bad quadrants?

  - Jenny and I are currently watching _Silo_; where does it land within this framework?
    - is this a reply to Frase's vision of scarcity + equality? "actually, this is what socialism looks like-- and it's bad." Inhabitants of the silo appear to get what they need, they're recycling as much as possible, the society's culture has collectivistic notions
    - I'd argue it's not-- this is a vision of exterminism; as we see in the show, the society is deeply hierarchical. The manual laborers are placed at the literal bottom of the society, while the knowledge workers are given comfortable accommodations close to the surface. Hidden elements of this class actively conspire to maintain the status quo, and contained within their society.

  - What did Frase get right?
  
  - What did Frase get wrong?
-->

[^1]: During the 20th century, we saw the percentage of the US workforce involved in agriculture [drop from 41% to 2%.](https://foodsystemprimer.org/production/industrialization-of-agriculture) Not all of this shift is due to agricultural mechanization, but the impacts are hard to overstate. An [older citation](https://www.choicesmagazine.org/choices-magazine/theme-articles/immigration-and-agriculture/the-status-of-labor-saving-mechanization-in-us-fruit-and-vegetable-harvesting) (mid-2012) I found indicates that approx. 75% of vegetables and melons are mechanically harvested, along with 55% of fruits.
