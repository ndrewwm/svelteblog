---
title: "How should I get started with R?"
description: |
  Consolidating my thoughts for newcomers to the R-language.
author: Andrew Moore
date: "2018-07-15"
draft: false
categories: [r, rstats, self-learning]
slug: starting-with-r
format:
  gfm:
    variant: +yaml_metadata_block
---

Here's some evergreen advice from David Robinson:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When you’ve written the same code 3 times, write a function<br><br>When you’ve given the same in-person advice 3 times, write a blog post</p>&mdash; David Robinson (@drob) <a href="https://twitter.com/drob/status/928447584712253440?ref_src=twsrc%5Etfw">November 9, 2017</a></blockquote>

In a world overflowing with data science blogs, I've decided to write some notes about getting started in R. I recently crossed Robinson's threshold, and want to write down my basic advice (so, hi! if you're a friend/colleague, and I've pointed you here). I work in an academic research environment, and while I've used R for 4+ years, my initial exposure to working with data was in SPSS. My experience talking about R has often been in this community, speaking to SPSS/STATA users looking to expand their skills in a new software environment. Aside from having this group in mind, I also want to provide a resource that's somewhat current for 2018. R as a language is moving fast, and new(er) packages have given R a lot of strengths that I think are important to be aware of early.

# building fundamentals

Many of the folks I talk to about learning R have little or no experience with "real" programming languages, which described myself when I first encountered the language. If you're in this camp, I have a few recommendations to get started.

### 1. don't just install the R language-- install RStudio

[RStudio](https://www.rstudio.com/products/RStudio/) is an *integrated development environment (IDE);* it provides dedicated space for working with R. When programming, you'll be writing code in a text editor and running it in a console. IDEs help the user by highlighting parts of the syntax, and can autocomplete commands. RStudio also has tools for data visualization and report writing, among many other useful features. RStudio's desktop version is *free,* so definitely take advantage of the standard setup for most people working with the language.

### 2a. something to read

Once you've got the language and RStudio installed, I would point you to a book by Garrett Grolemund and Hadley Wickham, [R for Data Science.](http://r4ds.had.co.nz/) As a resource, it's a little over a year old, so the topics and packages utilized are current (in my opinion). To my continued amazement, the book exists *for free* as a website, and the material is of high quality. I wasn't aware of a resource like this when I first started, and it's the text I wish I'd had in the beginning. The chapters cover importing data, transforming & cleaning data, and creating visualizations, in addition to sections on modeling and communicating analysis results. These initial 3 sections are the bread and butter of using R, and will teach you how to accomplish them using packages from the [tidyverse.](https://www.tidyverse.org/packages/) Very few scripts I write don't include `library(tidyverse)` at the top of the file, so I think this is an important place to start in 2018.

### 2b. something to watch

~~If you're looking for something a little more interactive or perhaps lecture-esque, I would suggest looking at [DataCamp](https://www.datacamp.com/courses/free-introduction-to-r), and trying some of the introductory courses offered. DataCamp is an online learning platform in which learners can run code in an online prompt alongside exercises. Courses include lectures and other components. They're self-paced, and each individual course can be completed over a few days. Some content is free, but a subscription might be needed to finish certain courses. Students are typically offered discounts (or maybe even free memberships?), otherwise you're looking at around $29/month.~~

**Edit:** Up until earlier this year (spring 2019), I would often point people towards DataCamp, having found it useful. However, the company's handling of a sexual assault against one of their employees was disappointing and has pushed me away from recommending them. You can read some responses to this issue from some former instructors [here](https://juliasilge.com/blog/datacamp-misconduct/) and [here](https://www.noamross.net/2019/04/12/datacamp-sexual-assault/). In lieu of DataCamp, [Codeacademy's *Learn R* course](https://www.codecademy.com/learn/learn-r) might be a reasonable alternative. Codeacademy also offers a virtual terminal setup, where you'll work through guided lessons to build fundamentals in the language.

Alternatively, the first serious steps I took learning R were through the JHDS MOOCs offered through [Coursera](https://www.coursera.org/specializations/jhu-data-science). These courses are still being taught, but I don't personally know if their materials have been keeping pace with the R ecosystem. However, their materials were fine in terms of building fundamentals.

# building confidence

Your googling skills and ability to use [StackOverflow](https://stackoverflow.com/) will reinforce your grasp of R as a language. I haven't reached a point where I've written error-free code on the first iteration of a non-trival project. Finding bugs doesn't mean you're failing, it just means that you're programming.

Next, I want to plug something I've found valuable in my own learning and development: meetups. This recommendation is unfortunately location-dependent, but if you're in a larger city or college-town, it's likely there's an R User group that meets occasionally. These meetups are often focused on how to do something in R, or how R was used to solve a problem. For example, you might see demonstrations of new packages, or discussions of statistical/visualization techniques and how they're implemented using R. I don't do much machine learning in my day-to-day, but I've found it very helpful to be plugged into the community of people in my city who do. That last point underscores another benefit of meetups: you'll meet and talk to a lot of people you can learn from. This kind of experience is great for a beginner, or those early in their careers.

# building experience

If I was to place myself in one of the sections I'm covering, it would be here. Hopefully, you're at a point where you're able to use your skills as part of your work, but (based on your duties and project demands), this may or may not be happening. In any case, there are some things I've found myself doing to keep sharpening my skills. One resource I would point you to is [Kaggle](https://www.kaggle.com/). Kaggle hosts competitions around statistical model-building, and data analysis. Companies or non-profits will host data they want analyzed, and individuals or teams can compete to build models that can best predict an outcome or solve a problem of interest. You can write code in the cloud (no local environment is required!), or you can download data to work with locally. It's nice to practice on real-world problems, and gain experience with datasets that you wouldn't normally encounter. A useful feature is that you'll often be able to see how others have approached solving the same problem-- "kernels" or scripts that others have written can be made public, and are linked to competitions/datasets.

The second thing I'd suggest is starting a GitHub account, and to begin curating some of your projects. I'm placing this note in this section given that "maturity" in R probably means you'll have some projects to showcase, but you can (and should) start using GitHub early. Similar to learning how to frame questions and problems, version control systems (like Git) were things I had to gather knowledge around, but have really helped me build discipline in the projects I've worked on.

<hr>

Not a lot of this advice is original, but these are things that have been helpful in my learning. R is an incredibly flexible and powerful tool. It's liberating to see how much there is to learn-- I hope you find the language useful!
