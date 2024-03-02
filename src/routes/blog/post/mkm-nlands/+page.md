---
title: Relationship of lands played with game winrate, MKM
description: |
  Examining how the number of lands a player includes is related to their success in traditional (best-of-three) draft games in MKM.
author: Andrew Moore
date: "2024-03-02"
# image: preview.png
categories: ["magic", "statistics", "dataviz"]
knitr:
  opts_knit: 
    base.url: "/"
  opts_chunk:
    fig.path: "./+page_files/"
    fig.width: 8.5
    fig.height: 5.6
    class-output: qmdresults
    class-message: qmdmessage
    echo: false
    message: false
format:
  gfm:
    variant: +yaml_metadata_block
---

<script>
  import BlogHead from "$lib/components/BlogHead.svelte";
</script>

<BlogHead title={title} date={date} />

I’m playing in the MKM Arena Open tomorrow; the day 2 event is
best-of-three (Bo3) draft. A classic question for a given limited format
in Magic is how many lands a player should be running in their list.
This isn’t a simple question to answer, and depends on the kind of deck
that’s been drafted. However, I wanted to see if there were any patterns
that have emerged over the lifetime of the set since it was released
last month.

For this analysis, I’ve used game data from
[17lands.com](https://17lands.com/), and tallied the number of basic
lands and
[nonbasic](https://scryfall.com/search?q=set:mkm+type:land+-type:basic)
lands that a player has included in their list (by game). I’ve excluded
any games where a player submitted a deck with more than 18 lands; the
decision to run 19 is atypical for any limited format. This exclusion is
about 400 games in total.

First, we have the overall performance, without regard for other factors
(such as the colors in a player’s deck). While the differences between
our groups are pretty small, running a list with 17 lands has the
highest rate of success. This is also the most common choice by far
(approx. 79% of games are running a list with 17 lands).

| \# Lands     |         Losses |           Wins |
|:-------------|---------------:|---------------:|
| 16 (or less) |  6,415 (43.1%) |  8,453 (56.9%) |
| 17           | 41,710 (41.7%) | 58,204 (58.3%) |
| 18           |  4,993 (42.3%) |  6,802 (57.7%) |
| Overall      | 53,118 (42.0%) | 73,459 (58.0%) |

Breaking apart the decks by colorpair, we see some hints that green
decks might benefit from running 18. (Note, I’m excluding monocolor and
3+ color decks, but I’m not breaking out splashes.) Interestingly, it
looks like only WB and UB are the only pairs benefit from running 16
lands. I’ve heard anecdotes that UB is best played as a tempo deck
(rather than a slow, controlling deck), and this seems to line up with
what’s visible in the plot.

![](./+page_files/unnamed-chunk-4-1.png)

It also feels notable that WR doesn’t seem to improve (on average) by
cutting lands. Given its popularity, I haven’t been able to draft this
deck frequently, but this result makes sense to me. In modern limited
formats, it’s difficult to overstate the importance of impacting the
board early. However, not playing a land on turn 3 appears to be
particularly punishing in MKM due to the *disguise* mechanic. Even in
aggressive decks (like WR), you have to keep pace with your opponent
along the mana curve. There simply aren’t enough cards that cost 2 mana
or less to form enough of a core for one’s deck.

In any case, the decision to run different land counts is complex, but
running 17 appears to be about as solid of a default as one can rely on.
It seems that green decks with 18 lands might be outperforming other
builds in their colors, but you’ll need some good intuition on whether
your pool leans more towards the deck’s theoretical ceiling to justify
cutting an additional spell.
