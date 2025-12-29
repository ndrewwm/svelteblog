---
title: "Waiting for snow"
slug: "waiting-for-snow"
author: Andrew Moore
date: "2025-12-29"
description: We still haven't been skiing yet this year. This is the worst recorded year since the USDA/NRCS has been tracking snow depth at Bogus Basin.
draft: false
categories: ["climate change"]
preview: null
format:
  gfm:
    variant: +yaml_metadata_block
---

<script>
  import SwePlot from "./SwePlot.svelte";
</script>

Jenny and I haven't been skiing yet this year. The reason is straightforward: there's not enough snow at Bogus Basin (our home resort). As of today (12/29), only one lift is open-- the "Coach" chair, which is great for beginners, but doesn't offer much for anyone who's not an early learner. According to my journal, we'd been up 3 times at this point last year (our first day was 12/22). From everyone I've talked to, this has been the worse year for snow they've seen.

Based on data collected by the Natural Resources Conservation Service (NRCS), we can see that this is objectively true. We have detailed records that track the amount of snow that's accumulated at various points via an automated system called [SNOTEL](https://www.nrcs.usda.gov/programs-initiatives/sswsf-snow-survey-and-water-supply-forecasting-program). There are numerous stations across the western US, and there happens to be one in the center of the Bogus Basin resort. 

Thanks to the NRCS, the data are [available](https://wcc.sc.egov.usda.gov/nwcc/site?sitenum=978) via a public API, so we can plot the data fairly easily. Here's what we can see, looking at daily snow-depth for every year since 2000.

<SwePlot />

This is not great, to put it mildly. It felt super weird to see weather typical for spring during the Christmas holiday. Snowpack is crucial for refilling our reservoir and providing hydropower to the state. Maybe we'll get lucky and have a blizzard or two in the coming weeks, but it's clear we're outside of what's been historically normal.
