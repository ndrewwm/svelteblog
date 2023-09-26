---
title: "Moving to SvelteKit"
description: |
  I rebuilt my blog using Sveltekit. Here's what I learned.
author: "Andrew Moore"
date: "2023-07-28"
draft: false
categories: [javascript, svelte, sveltekit]
format:
  gfm:
    variant: +yaml_metadata_block
---

<script>
  import BlogHead from "$lib/components/BlogHead.svelte";
</script>

<BlogHead title={title} date={date} />

After several years of maintaining my site using blogdown, I've decided to start using [SvelteKit]() to maintain my personal website. I've wanted to start developing visualizations and content that makes use of JavaScript, and decided that Svelte/SvelteKit would be a good entry point to do so. Migrating my blog/personal site was a good starting point. This post expands on my [Credits](/credits) page, and hopefully includes some useful notes for anyone picking up the framework.

# compare and contrast

**[Blogdown](https://github.com/rstudio/blogdown)** is an R package that helps writers convert collections of `.Rmd` files into a static site. It abstracts away most of the work involved in web development, letting the user/author focus on the content they're producing. It's a great tool, and eliminates many barriers that are involved with setting up a personal site. Under the hood, blogdown uses [Hugo](https://gohugo.io/) to build the user's website; it's fast, lets users take advantage of flexible "shortcodes" to supplement standard markdown, and provides a wide range of themes to style one's site. That said, it's a bit rigid-- most sites I've seen that are built with blogdown have a very similar feel, even with the customizations that their authors layer on top.

**SvelteKit** is a framework/metaframework for developing web applications. I first learned about the framework by stumbling across a video from [the Pudding](https://www.youtube.com/watch?v=7y6MIXZumd8&list=PLsuhXm2zs07LgUWm2AehKSaCKtC_3-Vld), in which their web developer live-codes the rebuilding of their website using SvelteKit. Here are a handful of reasons why I decided to make the jump:

1. Svelte feels like HTML, most of the time
    - This appears to be part of the framework's stated philosophy, i.e., making HTML feel like a modern programming language. Being able to use common constructs like loops/conditionals inside of HTML markup has felt flexible and intuitive to me.

1. Scoped CSS is neat
    - Most of the time, you'll be happy to rely on the global styles that define how your site looks, but sometimes you need to slip out from under the defaults. Svelte allows developers to configure styling on a component-by-component basis. So, if you change the font family for the `<h1>` tag in a component, that change is contained just within that component, and doesn't leak anywhere else. This is another way that Svelte makes HTML feel "modern", in my opinion.

1. SvelteKit handles routing in a way that feels clean
    - Similar to what I was used to in blogdown, SvelteKit encourages you to represent individual pages as directories within a file system. This makes it natural to place supporting components or assets close to the markup of a whole page, which I think is tidy.

# what I wanted to build

My goal was to rebuild my blog, essentially from scratch. At a minimum I wanted to establish the following routes for my site:

```
ndrewwm.com/
  blog/
  projects/
  now/  
```

I also knew I wanted to support the following features:

1. Content authoring using markdown, specifically documents produced using Quarto
2. Relative image URLs when writing content in markdown
3. Support for mathematical writing
4. Footnotes and references
5. A consistent/minimalist look and feel for the site, with an accompanying `ggplot2` theme.

# first steps

I'm indebted to [Josh Collinsworth's tutorial](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) on how to build a markdown-based blog. I basically followed along from the top, starting with

```bash
npm create svelte@latest svelteblog
```

From there, we end up with a directory that looks like:

```
|---- svelteblog/
      |---- src/
            |---- lib/
            `---- routes/
      |---- static/
      `---- svelte.config.js
```

Building out the routes I wanted to support was as simple as adding the following:

```
|---- svelteblog/
      |---- src/
            |---- lib/
            `---- routes/
                  |---- blog/
                        |---- post/
                              `---- example-post/
                                    `---- +page.svelte  
                        `---- +page.svelte
                  |---- now/
                        `---- +page.svelte
                  |---- projects/
                        `---- +page.svelte
                  `---- +page.svelte
      |---- static/
      `---- svelte.config.js
```