---
title: 'Taking splash damage: why you should avoid double pips'
author: Andrew Moore
date: '2026-08-02'
slug: avoid-double-pips
description: >
  This post explores why it's not advisable to splash an expensive
  "double-pipped" card when playing a 40-card deck in MtG limited. I construct a
  simulation to estimate the joint probability of drawing and casting an
  expensive splash, and use data from 17lands.com to assess the impact of
  mulligans on a player's win rate.
draft: false
categories:
  - mtg
  - simulation
preview: null
knitr:
  opts_knit:
    base.url: /
  opts_chunk:
    fig.path: ./+page_files/
    class-output: qmdresults
    class-message: qmdmessage
    warning: false
    message: false
    echo: false
    fig-align: center
format:
  gfm:
    variant: +yaml_metadata_block
---


This post is a bit of theorycrafting about building limited decks in
*Magic: the Gathering*. Consider this hypothetical:

> You’ve just finished a booster draft with 8 of your friends. During
> the draft, you were able to pick a 5UU
> [bomb](https://scryfall.com/card/thb/52/kiora-bests-the-sea-god) that
> greatly shifts the game in your favor when you cast it. The rest of
> your picks support an aggressive white-red deck with a low curve,
> combat tricks, and some removal. However, you decide to include the
> off-color card due to its power. Your 40-card deck has 5 mana sources
> that produce blue mana: 3 islands, a [Mana
> Confluence](https://scryfall.com/card/jou/163/mana-confluence), and a
> utility [artifact](https://scryfall.com/card/a25/229/prophetic-prism)
> that can produce blue mana. Your remaining lands (13) are split
> between plains and mountains.

For a limited format that doesn’t emphasize multicolor play, this
configuration of lands/sources is usually about as far as you can
stretch things. Now, here’s a question: *is splashing for this powerful
card a good idea?* The answer ultimately depends on one’s goals. If the
goal is to build the deck to cast the exciting spell, this post isn’t
here to yuck anyone’s yum. However, if winning games is part of what
makes limited fun for you, my hope is to convince you to avoid splashes
like this when building your decks. Below, we’ll use a bit of math and
simulation to see what happens when we build a deck to splash a
double-pipped card (i.e., a card whose casting cost is something like
5UU; each “U” is called a “pip”).

Let’s start by naming some probabilities of interest:

- $Pr(\text{Keep}) =$ “the probability of drawing a viable opening
  hand”,
- $Pr(\text{Bomb}) =$ “the probability of seeing the bomb in the first
  18 cards of your deck”,
- $Pr(\text{Splash}) = Pr(\text{2+ blue sources in first 18 cards}) =$
  “the probability of seeing two or more blue sources in the first 18
  cards of your deck”,
- $Pr(\text{Lands}) = Pr(\text{7+ lands in first 18 cards}) =$ “the
  probability of seeing at least 7 lands in the first 18 cards of your
  deck”,
- $Pr(\text{Cast}) = Pr(\text{Bomb} \cap \text{Splash} \cap \text{Lands}) =$
  “the probability you can cast the bomb, after seeing 18 cards”, and
- $Pr(\text{Cast} \ | \ \text{Keep}) =$ “the probability you can cast
  the bomb after seeing 18 cards, given that the opening hand was
  viable”.

The natural way to think about these events is that we’re flipping over
the first 18 cards of a shuffled deck.[^1] Either we’re drawing them one
at a time or surveiling/scrying.[^2] This means we’re ignoring scenarios
where your opponent puts cards from play *back* into your deck. We’re
also assuming you’ll *survive* to see 18 cards: your opponent might be
able to win in the first 7-ish turns, they might cause you to discard or
mill one or more cards you need, etc. We’ll revisit this later, but
let’s be as generous as possible to what this hypothetical deck is
trying to do on paper, for now.

Deriving $Pr(\text{Cast})$ or $Pr(\text{Cast} \ | \ \text{Keep})$ is
complicated, due to the fact that the events ($\text{Bomb}$,
$\text{Splash}$, and $\text{Lands}$) are not independent. For example,
drawing a island implies you’re also closer to having the lands needed
on-time to cast your bomb. However, we can get around this by simulating
the process, letting a computer shuffle the deck thousands of times, to
get an estimate. Laying things out, this is what we’ll be giving to the
computer to shuffle for each “game”:

| Category | Cards |
|:---|:---|
| Spells | B, A2, SR1, SW1, SW1, SR2, SR2, SW4 |
| Lands | P, P, P, P, P, P, P, M, M, M, M, M, M, I, I, I, E |
| Creatures | CW, CR1, CR1, CR1, CW1, CW1, CR2, CR2, CR2, CW2, CW2, CR3, CR3, CW3, C4R |

B = bomb, A = artifact, C = creature, S = inst/sorc, I = island, P =
plains, M = mountain, E = mana confluence

For our simulation, we’ll perform the following 10,000 times:

1.  shuffle the deck
2.  draw 7 cards from the top (the opening hand)
3.  determine if the opening hand is viable:
    - **mulligan** if the hand contains 0-1 lands, or more than 4 lands
    - **keep** the hand if it contains 2 lands and 2+ playable spells
      (at least 1 being a creature)
    - **keep** the hand if it contains 3 lands and 2+ playable creatures
    - **keep** the hand if it contains 4 lands, and 3 playable spells
      (at least 2 being creatures)
    - **mulligan** all other scenarios
4.  draw until you’ve seen 18 cards, and then count:
    - the total number of green sources observed,
    - the total number of lands observed, and
    - whether the bomb was found

**Note:** in step 3, a “playable” card is one that can be cast using the
lands available in the hand. Our utility artifact (`"A2"` in our list)
can fix our colors, but we need to spend mana in order to put the
artifact into play. This is has a cost, chiefly that we’re not able to
play something that can block or attack in the early turns.

<!-- Simulation -->

Now, here are the results. Under this list and heuristic for mulligans,
the simulation suggests you’ll only be able to find a viable hand in
49/100 games. Notably, this means the chance that you have to mulligan
twice in a row is
$Pr(\text{Mull Twice}) = Pr(\text{Keep}^c) \cdot Pr(\text{Keep}^c) = (1 - 0.488)^2 = 0.262$!
In instances where we see a viable opening hand, we’ll only be able to
cast the bomb in 20/100 games.

|           Quantity | Estimate |
|-------------------:|---------:|
|           Pr(Keep) |    0.488 |
|   Pr(Bomb \| Keep) |    0.419 |
| Pr(Splash \| Keep) |    0.605 |
|  Pr(Lands \| Keep) |    0.786 |
|   Pr(Cast \| Keep) |    0.200 |

This could sound appealing, but this means that in 80/100 games at least
one of those conditions isn’t true. Maybe the rest of your deck
functions, but a large share of the time your utility artifact isn’t
helping you attack, and your islands are only adding generic mana (this
issue is even more problematic when your deck includes double-pipped
cards in your base colors, e.g., 2RR).

<!-- Alternative: a "normal" deck -->

Something else that’s crucial to remember is that our simulation’s
estimate for $Pr(\text{Keep})$ is lower than what we’d expect if we
excluded the splash. Using the same simulation procedure with a purely
2-color deck (swapping the three islands for three basics of our base
colors, and the utility artifact for a 2-mana creature), we’d estimate
that $Pr(\text{Keep}) \approx$ 0.597, a much more comfortable proportion
of viable hands. This matters quite a bit, given how costly a mulligan
can be.

<script>
  import MullPlot from "$lib/posts/avoid-double-pips/MullPlot.svelte";
</script>

<MullPlot />

Mulligans hurt a deck’s win rate because they deprive players of vital
early resources. However, cards that are stranded in your hand are a
similar kind of deprivation. Stranded splash cards are lost
opportunities to play spells that keep you alive. Outside the
simulation, we should remember that one’s opponents are generally
disinclined to wait for you to cast an expensive card. An early stumble
to find your colors or taking a turn off to play a prophetic prism are
moments that opponents capitalize on.

Lastly, I don’t want any readers come away from this post thinking they
should mulligan less. Decisions to mulligan an opening hand are an
unavoidable part of the game. Rather than dreading them, I think it’s
best to view them as a tool that we can learn to apply appropriately. In
this spirit, we can build decks that reduce the chances that a mulligan
is necessary. In summary, try your best to play a two-color deck, and
resist the urge to include an off-color card just due to its power. Your
manabase (and I!) will thank you.

<style>
  ul {
    margin-top: 1vh;
  }
</style>

[^1]: Why 18? This is a bit of a subjective choice, but it’s meant to
    compromise between a few things. First, in our scenario the player
    will need to play one land per turn for seven turns in order to cast
    their bomb. This means they’ll see between 6-7 cards from draw steps
    over that period (depending on whether they played first or second)
    in addition to their opening hand. Thus, a player will see 14-ish
    cards as a minimum.

    Second, in modern limited play, casting creatures or spells usually
    gives players the chance to see one or more cards from the top of
    their deck. Choosing 18 cards lets us assume the player is seeing
    around 4-ish extra cards in addition to what they’d draw normally. I
    think one could argue that this is either too generous or too
    conservative, but regardless, we should assume players will see more
    than what they’re given each draw step.

[^2]: Here we can pretend that scrying and surveiling essentially behave
    the same way. For a limited game that takes a “normal” number of
    turns (9±5.8), it’s unlikely that a player will ever draw all the
    cards in their deck. We might say that if we haven’t shuffled,
    putting a card on the bottom of your library means it’s “out of the
    deck” until we reveal *all* of the preceding cards above it.
