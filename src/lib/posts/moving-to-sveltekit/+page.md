---
title: "Moving to SvelteKit"
description: |
  I rebuilt my blog using Sveltekit. Here's what I learned.
author: "Andrew Moore"
date: "2024-08-31"
draft: false
categories: [javascript, svelte, sveltekit]
slug: moving-to-sveltekit
format:
  gfm:
    variant: +yaml_metadata_block
---

For years, I've maintained my personal site using [blogdown](https://github.com/rstudio/blogdown), a Hugo-based static site generator. For almost everything, blogdown worked great for me. It allowed me to write in markdown and mingle written content with output from code. But over the past few years, I've been dabbling more with JS and HTML/CSS. I've wanted to explore more dynamic/interactive data visualizations/projects, and leveraging a "real" framework for web development seemed like a natural step. I landed on [SvelteKit](https://kit.svelte.dev) as my framework of choice, appreciating its file-based routing system and its minimalist approach. I first learned about the framework by stumbling across a video from [the Pudding](https://www.youtube.com/watch?v=7y6MIXZumd8&list=PLsuhXm2zs07LgUWm2AehKSaCKtC_3-Vld), watching one of their web developers live-codes the rebuilding of their website. Here are a handful of reasons why I decided to make the jump:

1. Svelte feels like HTML, a lot of the time.
    - This appears to be part of the framework's stated philosophy, i.e., making HTML feel like a modern programming language. Being able to use common constructs like loops/conditionals inside of HTML markup has felt flexible and intuitive to me.

1. Scoped CSS is neat.
    - Most of the time, you'll be happy to rely on the global styles that define how your site looks, but sometimes you need to slip out from under the defaults. Svelte allows developers to configure styling on a *component-by-component basis*. So, if you change the font family for the `<h1>` tag in a component, that change is isolated within that component and doesn't leak anywhere else.

1. As I mentioned, SvelteKit handles routing in a way that feels clean.
    - Similar to what I was used to in blogdown, SvelteKit encourages you to represent individual pages as directories within a file system. This makes it natural to place supporting components or assets close to the page's markup, which I think is tidy.

I set out to rebuild my personal site (including its blog), essentially from scratch. I knew I'd want the following features: 1) a route for my blog, 2) a homepage (containing a view of my current resume and background), and 3) a route (or collection of routes) for personal projects. I also knew I wanted to support the following features:

1. Content authoring using markdown, specifically documents produced using Quarto
2. Relative image URLs when writing content in markdown
3. Support for mathematical notation
4. Footnotes and references
5. A consistent/minimalist look and feel for the site, with an accompanying `ggplot2` theme.

# Preprocessing using `mdsvex`

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

The `extensions` key controls which file extensions are to be treated as *Svelte* components; `".svelte"` is the default for any SvelteKit project, but the crucial addition is `".md"`. This means that any `.md` file can be treated (and imported!) as a svelte component, including as a page in the app/site. Under the `preprocess` key, we have specific configuration for `mdsvex`. Here you're able to add plugins (remark and rehype), which filled in the gaps for items 2-4 in my list.

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
```

The layout is controlled by a dynamic route at `src/routes/blog/post/[slug]`, ensuring that the heading and format for each post looks the same.

Developing the look/feel was slow going. I built each part of the layout gradually, tweaking the CSS until it looked tidy. The finishing touch was a plotting theme for any `ggplot` based graphics I might include in the blog. I've tucked the source file for the theme in `src/lib/assets`. When I'm developing a post locally, all I need is a bit of setup code at the top of my `.qmd` file I'm working on:

```r
source("../assets/theme-ndrewwm.r")
theme_set(theme_ndrewwm())
```

It's cool to have a coherent theme! I've never had one before, but it also makes me feel slightly nervous. Plots from `ggplot2` are static, so if I end up changing the site's palette, I'd have to rebuild all of the posts that include a plot. I plan on using Observable Plot in more places (whose elements can be controlled via CSS), but for most of what I'm migrating now, change isn't free.

Please checkout my site's [repo](https://github.com/ndrewwm/svelteblog) if you're interested in seeing how I've configured things. I'm planning on creating a "credits" page or a "design" page in which I list the resources that helped me get started.
