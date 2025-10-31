---
title: "Four Futures: Life After Capitalism"
author: Peter Frase
year: 2016
isbn: 9781781688137
pages: 160
slug: frase-four-futures
started: 2025-05-20
finished: 2025-05-26
reviewed: 2025-10-28
publisher: Verso
pct: 100
stars: 4
---

I first read Frase's _Four Futures_ while traveling in 2017. It's a work of social theory, examining "fictional futures" in which humanity takes different courses in adapting to automation and ecological change. Given the current societal fixation on "AI", and our continued slide into climate change, I wanted to see how well it's aged. Frase's book emerged from a [2011 essay](https://jacobin.com/2011/12/four-futures), that starts with a basic premise:

> One thing we can be certain of is that capitalism will end. Maybe not soon, but probably before too long; humanity has never before managed to craft an eternal social system, after all, and capitalism is a notably more precarious and volatile order than most of those that preceded it. The question, then, is what will come next.

To inform this question, Frase argues that society faces two simultaneous crises: a crisis of _scarcity_ and a crisis of _abundance._ Aside from a narrow slice of the super-rich, the vast majority of people are being squeezed from two directions. First, due to climate change, we can anticipate increased scarcity of natural resources, and loss of habitat and agricultural land. This will compel massive migrations away from regions no longer hospitable to human life. We're already seeing this happen in-miniature, with the [Syrian Civil War](https://www.dw.com/en/how-climate-change-paved-the-way-to-war-in-syria/a-56711650) (which displaced 13 million people) being a tragic example of these dynamics.

Second, firms continue to pursue automation as a means of reducing production costs. By virtually any analysis, the past 100 years have seen vast increases in productivity, largely due to changing technology. Food production has historically been the most labor-intensive activity in human society, but this work is now substantially mechanized (at least within the global north).[^1] In my own lifetime, we've seen meaningful advances in robotics. _Bladerunner_'s replicants remain far-fetched, but the driverless shipping trucks from _Logan_ (2017) feel much more plausible (sometimes, even imminent). Just this month, the NY Times reported that Amazon (the second largest private employer in the United States) has internal plans to [replace 75% of its operations](https://www.nytimes.com/2025/10/21/technology/inside-amazons-plans-to-replace-workers-with-robots.html?unlocked_article_code=1.xE8.K_0w.uTh9pG4t5QZ6&smid=url-share) via automation and robotics.[^2] While the scale of future displacement is unclear, our society is haunted by the idea of broad labor devaluation and/or mass unemployment stemming from automation.

The convergence of these two crises is what forces transition to a new social system. Rather than being a discrete break, we should assume the shift will be gradual (similar to others we've observed in history, such as the move from feudalism to capitalism), and vestiges of the preceding system will persist. In the hypotheticals Frase describes, he assumes that automation will continue to increase across all sectors of the economy. What will vary is the extent to which the fruits of automation will be distributed, and how well humanity copes with climate change. In other words, political struggle will determine where humanity lands, rather than technological change. It's from these uncertainties that Frase establishes two axes (abundance/scarcity, and equality/hierarchy), and names for associated quadrants: communism, rentism, socialism, and exterminism.

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

- _**Communism:** abundance and equality._ In this future, Frase describes a world where climate change's impacts are mitigated, and a resurgent left succeeds in democratizing the economy. A pop culture analog within this type is _Star Trek: the Next Generation_. People are free to pursue their interests and passions, with material needs no longer a chief concern. However, as Frase explores, we shouldn't assume this society is definitionally utopian-- basic needs might be guaranteed, but humanity will still compete over immaterial goods (such as reputation and prestige).

- _**Rentism:** abundance and hierarchy._ Here, climate change has been mitigated, and humanity has built the robots that can produce everything it needs. However, ownership of said robots remains concentrated in a tiny elite. If we imagine that most objects can be cheaply and easily 3D-printed, controllers of the necessary software and blueprints will be able to gather enormous rents from such patterns. The envisioned future is an extremely litigious society, where elites are able to subsist on rights derived from ownership (such as stock dividends, or license-based subscriptions). Outside the neo-rentier class, the society faces questions on how to maintain aggregate demand. People are still needed as _consumers_, but the labor they're able to provide is less and less valuable due to automation.

  Upon second read, I think this future is less compelling than the others presented. I don't think it's a fault of the chapter's writing, rather that what's being described feels fairly consonant with contemporary life in the USA. We might not have household replicators à la TNG, but Amazon Prime plays a decent stand-in.[^3] These impressions are likely colored by my vantage as a knowledge worker, specifically in IT, a world shaped heavily shaped by licenses, enterprise contracts, and the infinite replicability of patterns. The economy is more than software, but I didn't feel like I had to stretch much to imagine life within this quadrant.

- _**Socialism:** scarcity and equality._ Within this quadrant, many of the impacts of climate change are locked-in, and while we might have technology to fabricate what people might need, the necessary inputs are scarce. Labor is decommodified (likely through a UBI), but consumption must be bounded. Frase argues that a key task for humanity (should the political struggle to democratize our economies succeed) is to evaluate and reestablish the connections we have with the natural world. This isn't a call for nature worship; instead, you might summarize it as a need to take the concept and implications of ["spaceship earth"](https://en.wikipedia.org/wiki/Spaceship_Earth) seriously and rigorously. In line with the ship metaphor, much like how vessels manage supplies on their voyages, some level of planning is necessary from each ship's crew.

- _**Exterminism:** scarcity and hierarchy._ This quadrant has abundant examples from dystopian and apocalyptic fiction. _Snowpiercer_ (2013), and _Soylent Green_ (1973) are analogs that come to mind. The unifying aspect is that human society has failed to mitigate the effects of climate change, leading to scarcity (or exhaustion) of resources to sustain itself. Anything remaining is distributed unevenly. Frase opens the chapter by discussing _Elysium_ (2013), observing that the orbital-residing elite don't appear to meaningfully require anything from surface-dwellers. In essence, "communism for the few" is attained, prompting the rich to ponder what should be done with the rest of humanity. If exterminism is a destination, [necropolitics](/reading/mbembe-necropolitics) might describe the praxis (or dyspraxis) by which we arrive there. The construction of "enclave societies" (which Frase discusses, citing sociologist Bryan Turner) can smooth the way for future efforts that confer social death upon broad swaths of people. The former is only a small step away from physical deprivation and genocide.

In all, I appreciate the vantage that _Four Futures_ takes. When speculating about the impacts that technology will have, I've seen other authors work from an assumption that new technology will generally benefit everyone in the long run. This approach was common in tech writing during the 2010s, or in economics writing geared towards popular audiences. There might be losers stemming from the disruptive aspects of whatever's been invented, but it's expected that this is balanced by those that profit from the change. Starting with the original essay in 2011, Frase seems to have been part of a contingent that (correctly, in my opinion) rejected this vaguely utopian outlook. Today, it's become more normal to consider how technological change intersects with the existential threats of climate change. Technology's use, resource demands, and accessibility determines whether it serves the broadest needs in our society; it won't improve things merely by virtue of existence. Living in 2025 is proof enough, but we can't escape the reality that decisions around technology's use are deeply political.

I also want to note what stood out to me from the book's concluding chapter in my second read. Here's a passage that captures part of its thrust:

> For anyone of a left-wing, egalitarian bent, it's easy to say that rentism and exterminism represent the side of evil, and socialism and communism, the hopes of the good. That might be adequate if we conceive of those ideal societies as destinations or as slogans to put on our banners. But none of these model societies are meant to represent something that could be implemented overnight, in a complete transformation of current social relations. Indeed, probably none of them is possible at all in a pure form; history is simply too messy for that, and real societies exceed the parameters of any theoretical model.
> 
> Which means that we should be particularly concerned with the road leading toward these utopias and dystopias, rather than the precise nature of the final destination. Especially because the path that leads to utopia is not necessarily itself utopian.

This part of Frase's writing is a humanist reminder that we must care about our means, alongside desired ends. In other words, we need to the recognize the road we're walking upon. However, almost 10 years after the book's publication, pursuing this analysis is not exactly encouraging.[^4] This section seems tinged by the cautious/critical optimism held by some of the US left during 2015-16, and it feels a little out of place today. An observation I think does hold up is that we shouldn't assume we'll come to rest in only one of these quadrants. Frase makes the point that we might move through several (or all) of these futures. A hypothetically generous UBI (again, this feels tinged by 2015-16) could provide a smooth transition from capitalism to communism, but this seems unlikely. Instead, we can also imagine a shift from exterminism to communism. Frase reminds us that our society of relative abundance (in the historical sense) emerged from the genocide of indigenous peoples; a horrific reality of our past, but crucial to understanding the country's development. Regardless, we're not standing still:

> We can't go back to the past, and we can't even hold on to what we have now. Something new is coming-- and indeed, in some way, all four futures are already here, "unevenly distributed," in William Gibson's phrase. It's up to us to build the collective power to fight for the futures we want.

[^1]: During the 20th century, we saw the percentage of the US workforce involved in agriculture [drop from 41% to 2%.](https://foodsystemprimer.org/production/industrialization-of-agriculture) Not all of this shift is due to agricultural mechanization, but the impacts are hard to overstate. An [older citation](https://www.choicesmagazine.org/choices-magazine/theme-articles/immigration-and-agriculture/the-status-of-labor-saving-mechanization-in-us-fruit-and-vegetable-harvesting) (mid-2012) I found indicates that approx. 75% of vegetables and melons are mechanically harvested, along with 55% of fruits.

[^2]: This plan's time horizon is over the next 8-10 years. It remains to be seen whether the company will reach the intended target of 75%, but the article reports that Amazon is prototyping and refining its approach to automating fulfillment at its Shreveport facility in Lousiana. The internal documents claim that current efforts have reduced hiring needs by 25%, with this figure expected to grow as more robots are introduced. This quote from Dr. Acemoglu sounds right to me: "Once they [Amazon] work out how to do this profitably, it will spread to others, too."

[^3]: In 2024, Amazon [reported](https://finance.yahoo.com/news/amazon-prime-memberships-us-gain-175715711.html) a high of 180M Prime subscribers in the United States. This is a little over 1 subscription for every 2 people in the United States. The US Census Bureau [estimates](https://fred.stlouisfed.org/series/TTLHH) that there were 132M households in the US during 2024. Even if Amazon's numbers are inflated, we can assume that coverage across American households is extremely high.

[^4]: So much could be said at length about this, but it's hard for me to avoid a sense that we're drifting towards the lower-right quadrant. It's hard to understate how disastrous it is for the government of an economy our size to take the approach that climate change is essentially a conspiracy theory. The same could be said regarding the ongoing project to terrorize and kidnap people from US cities.
