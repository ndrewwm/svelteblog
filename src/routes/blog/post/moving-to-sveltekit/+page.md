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

After several years of maintaining my site using blogdown, I've decided to start using [SvelteKit](https://kit.svelte.dev) to maintain my personal website. I've wanted to start developing visualizations and content that makes use of JavaScript, and decided that Svelte/SvelteKit would be a good entry point to do so. Migrating my blog/personal site was a good starting point. This post expands on my [Credits](/credits) page, and hopefully includes some useful notes for anyone picking up the framework.

# Compare and contrast

**[Blogdown](https://github.com/rstudio/blogdown)** is an R package that helps writers convert collections of `.Rmd` files into a static site. It abstracts away most of the work involved in web development, letting the user/author focus on the content they're producing. It's a great tool, and eliminates many barriers that are involved with setting up a personal site. Under the hood, blogdown uses [Hugo](https://gohugo.io/) to build the user's website; it's fast, lets users take advantage of flexible "shortcodes" to supplement standard markdown, and provides a wide range of themes to style one's site. That said, it's a bit rigid-- most sites I've seen that are built with blogdown have a very similar feel, even with the customizations that their authors layer on top.

**SvelteKit** is a framework/metaframework for developing web applications. I first learned about the framework by stumbling across a video from [the Pudding](https://www.youtube.com/watch?v=7y6MIXZumd8&list=PLsuhXm2zs07LgUWm2AehKSaCKtC_3-Vld), in which their web developer live-codes the rebuilding of their website using SvelteKit. Here are a handful of reasons why I decided to make the jump:

1. Svelte feels like HTML, most of the time
    - This appears to be part of the framework's stated philosophy, i.e., making HTML feel like a modern programming language. Being able to use common constructs like loops/conditionals inside of HTML markup has felt flexible and intuitive to me.

1. Scoped CSS is neat
    - Most of the time, you'll be happy to rely on the global styles that define how your site looks, but sometimes you need to slip out from under the defaults. Svelte allows developers to configure styling on a component-by-component basis. So, if you change the font family for the `<h1>` tag in a component, that change is contained just within that component, and doesn't leak anywhere else. This is another way that Svelte makes HTML feel "modern", in my opinion.

1. SvelteKit handles routing in a way that feels clean
    - Similar to what I was used to in blogdown, SvelteKit encourages you to represent individual pages as directories within a file system. This makes it natural to place supporting components or assets close to the markup of a whole page, which I think is tidy.

1. If I want to learn a bit more about JS, maintaining my website in a modern JS-based framework feels like a good "real" project.

# How to draw an Owl

My goal was to rebuild my personal site (including its blog), essentially from scratch. At a minimum I wanted to establish the following routes for my site:

```
ndrewwm.com/
  blog/
  projects/
  now/  
```

I also knew I wanted to support the following features:

1. Content authoring using markdown, specifically documents produced using Quarto
2. Relative image URLs when writing content in markdown
3. Support for mathematical notation
4. Footnotes and references
5. A consistent/minimalist look and feel for the site, with an accompanying `ggplot2` theme.

# Draw the rest of the Owl

Setting up the site to read `.md` based posts was probably the easiest step. The [`mdsvex`]() package can be used to add preprocessing to your site in its `svelte.config.js` file. Here's what my config looks like:

```js
// Imports excluded
const config = {
  extensions: [".svelte", ".svx", ".md"],

  // ...

  preprocess: [
    mdsvex({
      extensions: [".md", ".svx"],
      remarkPlugins: [relativeImages, [remarkFootnotes, {inlineNotes: true}], remarkMath],
      rehypePlugins: [rehypeKatex],
    })
  ],
};
```

The `extensions` key controls which file extensions are to be treated as *Svelte* components; `".svelte"` is the default, but the crucial addition is `".md"`. This means that any `.md` file can be treated (and imported!) as a svelte component, including as a page in the app/site. Under the `preprocess` key, we have specific configuration for `mdsvex`. Here you're able to add plugins (remark and rehype), which filled in the gaps for items 2-4 in my list.

I'm quite impressed with the `mdsvex` package. A neat feature is that tags from the document's YAML header are exposed for use in the site. For example, here's what I have in my template for new posts:

```md
---
title: A title.
description: |
  A description.
author: Andrew Moore
date: ""
image: preview.png
categories: []
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
```

I have a component called `BlogHead` which renders the post's title and the date. I haven't done much with the tags/categories yet, but all I'd need to do is update the component to accept the array, and then I'd be able to make use of that data.

Developing the look/feel was slow going. I built each part of the layout gradually, tweaking the CSS until it looked tidy. The finishing touch was a plotting theme for any `ggplot` based graphics I might include in the blog. I've tucked the source file for the theme in `src/lib/assets`. When I'm developing a post locally, all I need is a bit of setup code at the top of my `.qmd` file I'm working on:

```r
#| echo: false
source("../../../../lib/assets/theme-ndrewwm.r")
theme_set(theme_ndrewwm())
```

I'm glad to have a coherent theme, but it also makes me feel slightly nervous. Plots from `ggplot2` are static, so if I end up changing the site's palette, I'd have to rebuild all of the posts that include a plot. I'm hoping to start using more interactive graphics (whose elements can be controlled via CSS), but for most of what I'm migrating now, change isn't free.

# Wrap-up

Even though I've just scratched the surface of what Svelte/SvelteKit can do, I'm happy to have some a foundations to stand upon as I continue learning. Please do check out the [credits](/credits) page, if you'd like to learn a bit more about starting with Svelte. I've listed a few tutorials and resources that were invaluable in getting started.
