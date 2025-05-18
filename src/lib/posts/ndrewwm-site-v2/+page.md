---
title: "v2.0.0 of ndrewwm.com"
author: Andrew Moore
date: "2025-05-18"
slug: ndrewwm-site-v2
description: My site has been overhauled! Here's what I changed.
draft: false
categories: [javascript, svelte, sveltekit]
format:
  gfm:
    variant: +yaml_metadata_block
---

Today I deployed the changes to my website I've been working on! I'm calling this iteration of my SvelteKit based personal site version 2. Here we say goodbye to the CLI that I was using at the site's root (Sep. 2024 - May 2025, RIP). A fair number of things have changed, so I figured I'd write a down what I was thinking about as I implemented them. (Just as a reminder, the source code for my site is available [on GitHub](https://github.com/ndrewwm/svelteblog).)

While doing some housecleaning on my personal site this month, I was feeling itchy. The CLI that I'd been using was fun, but it wasn't the most friendly to visitors. A techie person might enjoy the gimmick, but that was coming at the expense of anyone else I might want to share my site with. As I wrapped up my final semester at Boise State, I realized how much I was appreciating the simplified layout of my final project's website. I briefly toyed with the idea of going back to a Hugo based site; the idea of only managing markdown and some CSS was attractive. However, that meant giving up the ground I feel I've gained in working with JS/HTML more directly. Controlling the layout and theme of my site via code (even if it's been fairly simple), has been satisfying to me, and a good learning experience. I also didn't want to rule out interactive projects that might involve doing work server-side. I resolved to stick with Svelte/SvelteKit, and began looking around for inspiration.

I think what I've landed on is much more minimal and intuitive to visitors. Both [Tom MacWright's](https://macwright.com) and [Kyaw's](https://kyswtn.com) websites were big influences. The site's colors and fonts have remained the same, but each page should have improved structure re: HTML and the site's homepage is better about directing you to the different kinds of content that can be browsed. Additionally, the site will now respect the user's preferences re: dark/light mode. I haven't rigged things up to let the user switch interactively, but if your OS/browser prefers dark mode, you'll get an inverted presentation of the site's theme.

While filling up my homepage, I took a cue from Tom MacWright's site and developed dynamic routes for each book review I've written. For the past few years, I've collected annual summaries of the books I've read as blog posts. While I liked the 2-column view I'd put together for each review (which showcases the book's cover and basic info), these tended to be really long posts. Tom's approach was simpler: just give each book its own page. Essentially, you end up providing a home-baked version of Goodreads, sans the social web integrations. This is really sensible, and I quickly realized that the same setup I used for blog posts (a dynamic route, with content written in Markdown and wrangled via [mdsvex](https://mdsvex.pngwn.io/)) could easily be applied to what I was writing for each book. This gives each book/review space to breathe, and feels more organized. With this in place, I have a path to migrate away from using Goodreads, which I think is neat.

Lastly, here are a few things that I want to tackle next:

- **Automate remaining features from Goodreads:** there are a few things I'd like to have in order to fully get off Goodreads.
  - First, I definitely need a "list" for books I intend to read (but haven't started). The most natural way would be to add a new subfolder in `lib/reading/` for the book I plan on tackling. I'll miss the ability to do this via my phone, but a Google Keep note might suffice until I get back to my laptop.
  - Second, I've been writing a wrap-up of all the books I read in a given year. Automating this seems like a nice little feature.
  - Third, there are some quality-of-life things I might want to add. It'd be nice if each book cover could have a loading animation and placeholder, and the "in-progress" view is a bit sparse. I also think I'd like to be able to add sections to each page, one for the overall review, and perhaps another for quotes or in-progress thoughts.
- **Add a `/cooking` and/or a `/libations` route:** inspired by the new `/reading` route, I was thinking about other things I might want to write down and share with people in my life that aren't blog posts. A list of recipes I enjoy feels fun, and useful to put in one place.
- **Upgrade to Svelte 5:** no rush on this, but it's something I've been meaning to get to.

