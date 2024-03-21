---
title: How loud are Boise's downtown coffee shops? (part 1)
description: |
  Outline and rationale for a study of noise levels in Boise's downtown coffeeshops.
author: Andrew Moore
date: "2024-03-10"
image: preview.png
categories: [statistics, public health, urbanism]
knitr:
  opts_knit: 
    base.url: "/"
  opts_chunk:
    fig.path: "./+page_files/"
    class-output: qmdresults
    class-message: qmdmessage
format:
  gfm:
    variant: +yaml_metadata_block
---

<script>
  import BlogHead from "$lib/components/BlogHead.svelte";
</script>

<BlogHead title={title} date={date} />

Coffee shops are crucial [“third
places”](https://en.wikipedia.org/wiki/Third_place) for city residents
in the US. I visit them frequently to do homework, catch up with
friends, read, or otherwise break up a week’s monotony. To be effective
in their dual roles as social catalysts and caffiene merchants, a shop
needs to be comfortable and welcoming to its clients. Businesses spend
lots of effort and cash in developing the feel of their spaces. This
investment has essentially become a requirement, putting pressure on the
range of [acceptable
aesthetics](https://www.theverge.com/2016/8/3/12325104/airbnb-aesthetic-global-minimalism-startup-gentrification)
for how a shop should look. However, I’ve recently been wondering if, at
least in my city, the acoustic dimension of these places has been
neglected.

Anecdotally, as I’ve passed through local coffee bars in downtown Boise,
they’ve increasingly reminded me of, well, actual bars. They’re usually
busy, and conversation fills the air; these are good things, signs of a
healthy business! But the music in these shops can be pretty noisy,
which prompts people to speak louder so they can be heard, etc. I’ve
read that elevated noise levels of music in bars serving alcohol is
associated with patrons a) drinking more, and b) spending (slightly)
less time in the establishment.[^1] The suspicion that restaurant/bar
owners are aware of this seems fairly plausible to me. A loud
environment makes communication more difficult, which pushes people to
focus on other things (such as drinking), and might cause them to turn
over their tables more quickly (allowing the establishment to cycle
through more customers). I could see a similar dynamic playing out in
loud coffee shops, but wasn’t able to find any papers on the topic. In
any case, I wanted to see whether my recollections were tracking with
reality or just a symptom of aging. I found a website/app called
[Soundprint](https://www.soundprint.co/locations/us/id/boise/coffee-tea)
that crowdsources measurements of sound levels at different businesses.
Unfortunately, only a handful of shops in Boise have been listed, and
they’re dispersed all over the city (rather than just the downtown).
With little to go off, I guess I’ll try collecting some data of my own.

## A (simple) study

### Inclusion criteria

My goal is to focus on shops in Boise’s central downtown. I’ve assembled
a list of 16 coffeeshops in the Boise downtown area within 500 meters of
the Grove Plaza, and verified (via Google Maps) that each shop in the
list was open each day of the week between 8am and 4pm.

### Measurement and analysis plan

I’m interested in the following quantities to describe the levels of
ambient noise in Boise’s coffee shops. Defined as random variables, let
$Y$, $Y_{min}$, and $Y_{max}$ be the *average*, *minimum* and *maximum*
A-weighted decibel levels (dBA) recorded over a 15 minute period in a
coffeeshop during a given timepoint. My intention is to collect a
dataset of 15 observations.[^2] Given the small sample size, I will use
bootstrap resampling to provide interval estimates for statistics of
$Y$, $Y_{min}$, and $Y_{max}$. Descriptive statistics for each variable
will be presented in tabular and graphical form. Additionally, I will
test the directional hypothesis that the average and median value for
$Y$ is *below* 85 dBA.[^3]

### Survey design

Our population is the universe of 15-minute audio recordings within the
list of shops, on a given weekday and hour. To ensure that the data is
representative, we’ll use a probability sample, with simple random
sampling. We have the following criteria that define an observation:

- $i = 1, 2, \cdots, 15, 16$ where $i$ is an index representing the 16
  coffee-shops that could be visited.
- $d = 1, 2, \cdots, 6, 7$ where $d$ is an index representing the day of
  the week. We’ll set $d = 1$ as “Monday”.
- $h = 8, 9, \cdots, 14, 15$ where $h$ is the *hour* (in
  military/standard time) of the day the shop is visited.

From these combinations, we have a sample space of
$N = 16 \cdot 7 \cdot 8 = 896$. Our sample size will be $n = 15$. Now,
we’ll create our survey plan by drawing 15 combinations of $i$, $d$, and
$h$, using R to perform the randomization.

``` r
set.seed(20240310)

shops <- c(
  "Form & Function",
  "Cafe D'arte",
  "The District",
  "Alia's Coffee House",
  "Dawson Taylor",
  "Alchemist Downtown",
  "Jitters by Jayne",
  "Dutch Bros",
  "Neckar",
  "Java Downtown",
  "The Flying M",
  "Goldy's Corner",
  "Slow x Slow",
  "Broadcast Coffee",
  "Guru Donuts",
  "ā café"
)

days <- c("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

n <- 15

plan <- expand_grid(Shop = shops, Weekday = 1:7, Hour = 8:15) |>
  slice_sample(n = n) |>
  arrange(Weekday, Hour) |>
  mutate(Weekday = factor(Weekday, levels = 1:7, labels = days, ordered = TRUE))
```

Having generated 15 observations, we now have a sampling plan for which
shops I’ll visit:

| Shop                   | Weekday |   Hour | Completed |
|:-----------------------|--------:|-------:|:---------:|
| The Flying M           |     Mon |     10 |           |
| Goldy’s Corner         |     Mon |     11 |           |
| Broadcast Coffee       |     Mon |     14 |    ✅     |
| The Flying M           |     Tue |      9 |           |
| Neckar                 |     Tue |     13 |    ✅     |
| Slow x Slow            |     Wed |      8 |           |
| The Flying M           |     Wed |     12 |    ✅     |
| Java Downtown          |     Wed |     13 |           |
| Guru Donuts            |     Thu |      9 |    ✅     |
| ā café                 |     Thu |     11 |    ✅     |
| Guru Donuts            |     Thu |     13 |           |
| ~~Alchemist Downtown~~ | ~~Thu~~ | ~~15~~ |    ⚰️     |
| Cafe D’arte            |     Fri |      9 |    ✅     |
| Alia’s Coffee House    |     Fri |     12 |    ✅     |
| Slow x Slow            |     Fri |     13 |           |
| The District           |     Sun |     14 |    ✅     |

The plan includes 12 of the 16 shops.

**Update, 3/19:** unfortunately, one of the shops in my plan
[closed](https://www.idahostatesman.com/entertainment/restaurants/article286832285.html)
before I was able to collect data. To keep the $n = 15$ sample size, I
randomly selected an additional time from the grid.

### Data collection

Based on the plan above, I’ll work my way through each row in the table
and visit the shop between $h$ and $h+1$ on the listed day. Due to my
work schedule, I probably won’t complete more than one or two visits on
a given day during the week, but I’ll attempt to collect data for each
row as soon as convenient. I will be using my smartphone’s microphone
(Android, Pixel 7) to collect a 15 minute audio recording of the coffee
shop when I visit, using the “Decibel X” application. Before starting
the recording, I’ll find a place within the general seating of the shop,
setting my phone on a flat surface. I’ll record the average decibel
level during the interval, and the minimum and maximum levels observed.
In addition to the quantitative measures of noise, I’ll note the date,
whether the shop is playing music, the number of guests present during
the recording (including myself), and any other details that might
provide additional context.

[^1]: This [field
    study](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1530-0277.2008.00764.x)
    by Guéguen et al. (2008) appears to be one of the more commonly
    cited papers. A [systematic
    review](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1530-0277.2008.00764.x)
    from 2011 also found that in 3 of 4 countries where the topic was
    studied, loud music was associated with greater intoxication or
    consumption amongst patrons.

[^2]: Keeping the total number of observations down will keep the costs
    small, and be a reachable number I can collect.

[^3]: Sustained exposure to sounds at or above 85 dBA can cause hearing
    loss. Source: [NIDCD
    NIH](https://www.nidcd.nih.gov/news/2020/do-you-know-how-loud-too-loud)
