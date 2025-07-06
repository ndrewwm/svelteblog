---
title: "How are we feeling about LLMs in 2025?"
author: Andrew Moore
date: "2025-06-21"
slug: llms-2025
description: |
  A temperature check: how I'm feeling regarding the state of LLMs mid-2025, their uses related to software development, etc.
draft: false
categories: ["temp-check", "LLMs"]
preview: null
format:
  gfm:
    variant: +yaml_metadata_block
---

I don't think I've written a summary of my thoughts regarding LLMs since the emergence of ChatGPT in 2023. Two-ish years in, the landscape regarding mainstream use of LLMs is contoured mostly by hype, (less than fruitful) experimentation, and uncertainty. At least from my vantage, it seems like public enthusiasm about new versions/iterations of each major provider's LLMs has been declining. The January 2025 release of DeepSeek's R1 model looks like a point of acceleration for this trend.

My personal use of chat-based LLMs is still very sparing. I'd guess that I average less than a query per week, all within my work's enterprise-provided version of Copilot. I haven't tried any IDE-based integrations, and I don't use the smartphone or web-based applications for Gemini. Having distance from the tech might mean I'm less likely to have creative ideas on its use, but I think my skepticism has been a useful balance against the ambient levels of hype.

Preamble out of the way, I want to structure this post around areas where I think my impressions have _**adjusted**_ versus those where my thoughts are largely _**unchanged**_ from what they were in 2023. Admittedly, part of me wonders why I'm bothering to write this down at all. The internet certainly doesn't need _another_ dude spilling ink about ChatGPT, but I'm just trying to take some notes on my silly little blog. Anyways.

### Unchanged: LLMs are an inferior replacement for search engines.

Very soon after ChatGPT was made generally available, we started to accumulate reports [like this](https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/), illustrating the propensity that LLMs have for producing untrue information. This is a fundamental feature of the technology, as many have exhaustively noted. LLMs like those that power ChatGPT are machines that take input tokens (the user's prompts) and use them to _predict_ future tokens. It feels beyond tedious to note, but text prediction is not the same as information _retrieval_. Search engines tell us directly when a query produces few results. It's also possible for us to craft a query that fails to match _any_ items in the collection being searched. Further, in every use of a search engine, its results actually map back to real items.

This is not true for a LLM. Unlike a search engine, its task is the production of _plausible_ text, based on provided inputs. When an LLM answers a question, such as "what is the weather like in Seattle on an average day?", plausible outputs might overlap with what we might think would be a "right" answer. But this only reflects the fact that digitized text referring to Seattle's weather is overwhelmingly likely to note that it's often overcast and rainy. For trivial questions like this, the abundance of text used for training LLMs probably has the virtue of containing mostly true answers. But, we're accustomed to using to using technology for all kinds of purposes, not merely amusement. Acting as if an LLM's outputs correspond neatly to reality (instead of treating them as statistical phenomena), as the lawyers referred to in the Reuters story did, can have dangerous consequences. 

So, you might say, it's a tool and we have to check its work, much like anything else we use. What's the problem here? Let me answer along two lines. First, despite stories like the one I've linked, my sense is that the public is generally willing to use LLM-based applications as if they're "enhanced" search engines. Collectively, it feels like we're facing a trade-off between rapid on-demand information summary that has widely ranging probabilities of being incorrect, vs. the status quo of "standard" search engines. And, to the extent the public is aware of the trade-off at all, it's being accepted. The "choice" between these options isn't occurring in isolation, of course; providers like OpenAI benefit from the conflation between search engines and LLMs. Meanwhile, flagship search engines (like Google's) continue to be ["enshittified"](https://pluralistic.net/2024/04/24/naming-names/#prabhakar-raghavan). So, what should we use to vet LLM output? And more fundamentally, if you lack topical knowledge, how will you know if vetting is needed? Prompting an LLM to tell it that it's "wrong" or to "try again" is a comical non-solution to these questions.

Second, my guess is that we'll see more constrained applications of LLMs in various contexts. An example of this existing today is Google's inclusion of an "AI Weather Report" in Android's weather app. I think narrow uses like this are more likely to be innocuous on average. Prefect's [ControlFlow](https://github.com/PrefectHQ/ControlFlow) is maybe a clue for what the future might look like: harnessing LLMs by requiring their output be structured and typed. But, the fundamental question is still at play: how do you know when the LLM is giving you something wrong? Will average users be able to verify what a tool is telling them when it matters? Will they even want to? I'm not sure of either of these things, and extra layers of abstraction could make this problem even worse. In essence, the technology's use is being normalized, but the conflation, integration, and replacement of "regular" search is worrying. For some folks, this may not even register as a loss.

### Adjusting: LLMs are helpful for some varieties of software development.

With some caveats, at this point I don't think this claim is really disputable. Of all the various places LLMs have been pitched for deployment, using them to support software developers (whose work product is computer code, i.e., _text_) feels like an appropriate niche. When initially trying out Copilot in 2023, I was unimpressed with the answers it provided to various Python related questions. But today, I've found Copilot occasionally useful at work for navigating nuances around dialect-based differences in SQL/database functions, or for generating boilerplate for CI/CD workflows. LLMs can't behave autonomously, but they're able to get fairly far in building certain kinds of applications (particularly front-end code).

Having access to these qualities definitely gives an individual developer a bit of a boost, but the idea that these things can replace developers outright still feels overblown. Rather than substitutes, LLMs are much closer to catalysts. They're most useful when you're able to effectively convey the "shape" of the idea you're pursuing, and know what the result should look like. This means that smaller, modular, pieces of code are easier to prompt for (rather than entire applications). Phrased more simply, you have to know what to ask and how to provide the LLM with feedback, which requires expertise. Anecdotally, I've seen many developers say that it's like having a junior engineer's coding ability on tap, which might be good for volume, but requires babysitting (and debugging). As I saw Orual (@nonbinary.computer) on Bluesky [say](https://bsky.app/profile/nonbinary.computer/post/3ltcfmfqtas2w), it's the "weirdest form of pair programming".

All of this might still be useful, but it feels worth noting that this is sort of the opposite of what the likes of OpenAI have promised. The pitch has been *replacement* of labor, to the point where reducing FTEs is feasible. Over the last few years, we've seen companies embrace LLMs and operate as if this pitch reflected the tech's actual capabilities. I'm not sure if I've seen any real success stories, but we have seen companies retreat from initially optimistic projections.[^1] In the context of software development, my completely unrigorous guess is than an LLM in the hands of a competent dev _maybe_ allows them to perform at the equivalent of 1.1 FTEs, instead of simply 1.0. These tools are great for spitballing and boilerplate, but the world needs more than boilerplate. Further, I'm doubtful that the cumulative benefits (fuzzy as they are), will really enable companies to 


- Natural language based query engines still aren't standard
- The idea that we can do the equivalent of NLP-based SQL query generators for web development does not seem feasible.
- The web is a mess of so much different technology-- engineers will still be needed to glue things together; they'll need to be able to write code and debug it

### Unchanged: the technology (as deployed) is extremely corrosive.

Where does one even begin with this point? Let's stick with the topic of software development. In 2023, one of the first things I remember learning about ChatGPT was that OpenAI's LLMs had been trained on StackOverflow questions and answers. This is part of what gives the large foundation models their ability to solve coding problems. In the first few conversations I had with friends/peers, I was worried. Why would an average person bother visiting the site if they could get comparable content "on tap"? What incentive would contributors have to answer questions, if they knew their responses would be vacuumed up and regurgitated later without attribution?

Many people had the same insights at the time, and they appear to be vindicated: StackOverflow [looks like it's dying](https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/). The site's decline appears to predate the launch of ChatGPT and co., but the rise of LLMs may have been enough to finish it off. Questions that might have been posted previously are staying inside ChatGPT. This is a vicious cycle; even for the stalwarts, there's less and less to respond to. As of May 2025, the site is receiving new questions roughly at the rate it was when it lauched in 2009.

Everywhere I read about StackOverflow I see complaints about the rudeness of its commenters, but this perception has never felt very relevant to me. If the share of StackOverflow's comments ranging from terse to toxic is higher than we'd want, this seems somewhat overdetermined based on who its userbase is/was and the state of tech during its era. Normatively, we should prioritize inclusion and hold communities to higher standards, but any site driven by volunteer contributions will inevitably develop its own culture. Given the site's decay, the task of trying to reform or change its community seems moot.

All that said, it doesn't change the fact that answers on StackOverflow have essentially functioned as a public good (à la Wikipedia). Writing good questions takes effort, but moderation and writing useful responses requires _more_. For over a decade, people have shared knowledge, snippets, examples, and perspectives with little expectation of reward. Maybe the style and tone can be rough, maybe not all of its content is useful, but if this collection of knowledge is valuable, it was produced via the collective generosity of strangers. I benefited a lot from StackOverflow early in my career, and despite the site's flaws, I don't think you can unpoison this well. Programmers will find new places to discuss online, but aside from beginner-oriented forums (like FreeCodeCamp's) or some subreddits, I think we're headed for a more decentralized (and less accessible) future.

Moving on from the destruction/enclosure of the digital commons, [Cluely](https://techcrunch.com/2025/07/03/cluelys-arr-doubled-in-a-week-to-7m-founder-roy-lee-says-but-rivals-are-coming) feels like an almost too perfect example of the acid that LLMs are pouring on social trust. Abstractly, Cluely is a voice-to-text interface and screen-reader for LLMs, allowing a user to prompt a model hands free in real time. In practice, it's software expressly designed to enable users to misrepresent their knowledge to other people. The company has polished itself as a tool for transcription and perhaps "augmented" conversation, but the fact that it was created as a means to cheat during software job interviews is significant. Here's some of the company's [manifesto](https://cluely.com/manifesto), presented (I assume) unironically:

> We built Cluely so you never have to think alone again.
> 
> It sees your screen. Hears your audio. Feeds you answers in real time. While others guess — you're already right. And yes, the world will call it cheating. ...
> 
> Why memorize facts, write code, research anything — when a model can do it in seconds?



### Adjusting: the jury appears to be out on model collapse.

- it hasn't happened (yet)
- metaphor of pure steel (uncontaminated from nuclear radiation)
- returning to the topic of search: retrieval augmented generation (RAG)
  - adding the contents of the web to the the LLM's context window
  - slop serving slop

### Adjusting: concerns related to the environmental impact of LLMs may have been overstated.

- LLMs take _more_ energy than standard searches, but it's not drastically different
- Data centers do use a lot of water, they might be creating negative ecological impacts, but agricultural practices in the US are still so much more concerning
- Transit use is also much more problematic in the US
- The sociotechnical impacts of the technology are much more concerning-- we need to address them head on, and ensure our critiques are effective (how are they actually harmful, what do they enable, what are they being used to do?)

[^1]: [Klarna's](https://techstory.com.au/2025/05/20/klarnas-ai-experiment-backfires-ceo-reverses-course-after-40b-valuation-drop/) efforts to replace customer support with "AI" has been a prominent example. [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-10-gartner-predicts-50-percent-of-organizations-will-abandon-plans-to-reduce-customer-service-workforce-due-to-ai), a major consulting company, predicts that 50% of organizations will abandon their attempts to downsize customer support services through the use of "AI".

<style>
  h3 {
    font-size: 1.25em;
    margin-bottom: .8em;
  }
</style>
