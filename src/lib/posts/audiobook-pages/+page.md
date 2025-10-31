---
title: "Guessing a book's page length from the audiobook's duration"
author: Andrew Moore
date: "2025-10-19"
slug: audiobook-pages
description: >
  Are page-lengths and listening-times comparable? Some basic analysis using my collection of finished books.
draft: false
categories: [statistics, reading]
preview: null
format: 
  gfm:
    variant: +yaml_metadata_block
---

<script lang="ts">
  import { Plot, Line, Dot, RegressionY, HTMLTooltip, RuleX, RuleY } from 'svelteplot';
  import { regressionLinear } from "d3-regression";
  import { mean, deviation } from "d3";
  import bookData from "./bookData";

  let reg = regressionLinear().x(d => d.minutes).y(d => d.pages);
  let fit = reg(bookData);

  // Sample statistics
  let resid = bookData.map(d => d.pages - fit.predict(d.minutes));
  let uni_pages = {
    m: mean(bookData.map(d => d.pages)).toFixed(1),
    s: deviation(bookData.map(d => d.pages)).toFixed(1),
  };
  let uni_min = {
    m: mean(bookData.map(d => d.minutes)).toFixed(1),
    s: deviation(bookData.map(d => d.minutes)).toFixed(1),
  };
  let uni_hrs = {
    m: mean(bookData.map(d => d.minutes / 60)).toFixed(1),
    s: deviation(bookData.map(d => d.minutes / 60)).toFixed(1),
  };

  // Predictions
  let hours = $state(11);
  let minutes = $state(30);
  let durationInMin = $derived(hours * 60 + minutes);
  let pred = $derived(fit.predict(durationInMin));
</script>

Over the past year, I've been gradually adding features I used from Goodreads within the <a href="/reading">/reading</a> route of my site. I've made dedicated subpages for each book that I've finished, a timeline, and a display of books I'm currently reading. Most recently, I've been working on a <a href="/reading/stats">/reading/stats</a> page that summarizes my reading activity each year.

Aside from the book covers, all of the metadata I add about each book is recorded by hand. For example, I'll write down the number of pages in the edition I'm reading. The newest data point I've started tracking the medium I used when reading a book (e.g., ebook, vs. audiobook, vs. print). As I went back to note which books I'd listened to, I started to feel itchy: are audiobook lengths and page-lengths really comparable? I'd like to be able to have a general sense for how "large" books are within my collection, and it'd be nice if I could use a standard measure.

Books are printed in various sizes, which means the the number of words on a page varies by book. However, most e-readers can track progress based on the print edition's page numbers, so there's at least some correspondence. But, what about audiobooks? From personal experience, it does seem like some narrators are a bit faster or slower. Perhaps the book's subject matter or genre also influences how fast the book is read. These hunches suggest that we'll see variability in audio-length at different page-lengths.

Comparing these lengths directly is probably the best starting point. At the time of writing this post, I've recorded data for {bookData.length} books. For each book, I went back and wrote down Amazon's "listening length" value for each book in audiobook form. First, some univariate statistics:

<table>
  <thead>
    <tr>
      <th scope="col" rowspan="2">N</th>
      <th scope="col" colspan="2">Pages</th>
      <th scope="col" colspan="2">Minutes</th>
      <th scope="col" colspan="2">Hours</th>
    </tr>
    <tr>
      <th>Mean</th>
      <th>SD</th>
      <th>Mean</th>
      <th>SD</th>
      <th>Mean</th>
      <th>SD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{bookData.length}</td>
      {#each [uni_pages, uni_min, uni_hrs] as uni}
        <td>{uni.m}</td>
        <td>{uni.s}</td>
      {/each}
    </tr>
  </tbody>
</table>

Here's what things look like when plotted. Herbert P. Bix's _Hirohito and the Making of Modern Japan_ is a bit of an outlier, but the relationship looks fairly linear. The equation for the regression line is **pages** $=$ {fit.a.toFixed(1)} $\times$ **minutes** $+$ {fit.b.toFixed(1)}. Across the whole collection, the model makes prediction errors of about {deviation(resid).toFixed(1)} pages (RMSE).

<Plot
  grid
  x={{ domain: [0, 1900], ticks: [200, 600, 1000, 1400, 1800]}}
  y={{ domain: [0, 1000], ticks: [200, 400, 600, 800, 1000] }}
>
  <!-- <RuleX x={durationInMin} strokeOpacity=0.5 /> -->
  <!-- <RuleY y={pred} strokeOpacity=0.5 /> -->
  <Dot data={bookData} x="minutes" y="pages" />
  <RegressionY data={bookData} x="minutes" y="pages" />
  {#snippet overlay()}
    <HTMLTooltip data={bookData} x="minutes" y="pages">
        {#snippet children({ datum })}
          <div class="tooltip">
            <div>Pages: {datum.pages}</div>
            <div>Minutes: {datum.minutes}</div>
            <div>Title: {datum.title}</div>
          </div>
        {/snippet}
    </HTMLTooltip>
  {/snippet}
</Plot>

<span>
  So, for an audiobook that's
  <input 
    type="number"
    name="hr"
    id="hr"
    min=2
    bind:value={hours}>
  <label for="hr">hours</label> and
  <input
    type="number"
    name="min"
    id="min"
    min=0
    bind:value={minutes}>
  <label for="min">minutes</label> long ({durationInMin} min.), we'd estimate <strong>{Math.round(pred)} pages.</strong>
</span>

The fit isn't great for some books close to 600 pages in length; the 4 points with large residuals are each Sci-Fi epics. Genres might actually be relevant for prediction, but this could easily be noise due to the small sample size.

In practice, I think I feel good about only recording page-lengths for each book (rather than also recording listening times). It looks like the model is doing an okay job of predicting pages for audiobooks 5 to 14 hours in duration. Maybe I'll revisit this in a year, and we can see what's happening with longer books.

<style>
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
  }

  input {
    width: 3em;
    /* line-height: 1; */
    border: none;
  }
</style>