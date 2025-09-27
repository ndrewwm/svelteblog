---
title: "How are we feeling about LLMs? (part 2): waiting for (model) collapse"
author: Andrew Moore
date: "2025-09-26"
slug: llms-2025-part-2
description: |
  Part 2 of my midyear temperature check on LLMs. An aside on how useful these tools are for software development, and my thoughts on Shumailov et al.'s 2024 paper covering model collapse.
draft: false
categories: ["temp-check", "LLMs"]
format:
  gfm:
    variant: +yaml_metadata_block
---

<svelte:head>
  <script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
</svelte:head>

This is a continuation of my midyear temperature check regarding LLMs; you can find part 1 [here](/llms-2025). In this post, I'm gathering my thoughts about "model collapse", focusing on a [paper](https://www.nature.com/articles/s41586-024-07566-y) published in 2024. To my chagrin, I think I'll need a part 3 to discuss where my head's at re: environmental and economic impacts. But, first a brief return to the topic of LLMs being used to support developer productivity.

### Aside: productivity boosts from LLM-based tools are not achieved as easily as anecdotes might suggest.

The day after posting part 1, I came across a post from an organization called METR (Model Evaluation & Threat Research) describing an RCT they'd conducted. METR recruited 16 experienced developers responsible for maintaining large open-source GitHub repositories (averaging 1M+ lines of code being maintained). The developers identified 246 high-priority issues (bug fixes or feature requests) across the repositories to address. METR then randomly assigned whether a developer was allowed to use LLM-based tools (Claude Cursor, Copilot, etc.) to complete the issue. During and after developers wrote code to address an issue, they were asked to estimate the degree to which the LLM-tool(s) impacted their speed. Here's a key visualization summarizing one of their findings:

<center>
<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:dll3hepzq76nymel5c3yt6nk/app.bsky.feed.post/3ltn3t3amms2x" data-bluesky-cid="bafyreif63ykwtnggvqdmk57fbq4khfpkvykiwngmsnofvs7bv2rikr4aym" data-bluesky-embed-color-mode="system">We ran a randomized controlled trial to see how much AI coding tools speed up experienced open-source developers.

The results surprised us: Developers thought they were 20% faster with AI tools, but they were actually 19% slower when they had access to AI than when they didn't.

<a href="https://bsky.app/profile/did:plc:dll3hepzq76nymel5c3yt6nk/post/3ltn3t3amms2x?ref_src=embed">[image or embed]</a>&mdash; METR (<a href="https://bsky.app/profile/did:plc:dll3hepzq76nymel5c3yt6nk?ref_src=embed">@metr.org</a>) <a href="https://bsky.app/profile/did:plc:dll3hepzq76nymel5c3yt6nk/post/3ltn3t3amms2x?ref_src=embed">July 10, 2025 at 1:47 PM</a></blockquote>
</center>

The full thread/study is worth looking at. In summary, all the parties involved in this study (including the authors) _overestimated_ the degree to which LLM-tools would boost productivity. Instead, their results show that using LLMs actually decreased their performance. One study doesn't close discussion, but it supports the hypothesis that LLMs aren't as helpful for maintaining/extending existing projects, and provides empirical data showing that _self-reports about AI-boosted productivity aren't reliable._ The benefits of these tools, if any, aren't accrued uniformly. There's a useful idea from computer science known as ["Amdahl's Law"](https://en.wikipedia.org/wiki/Amdahl%27s_law), which states that performance improvements gained through optimizing a single part of a system are limited by the proportion of time that part is actually used. LLMs may allow us to throw spaghetti (code) at the wall at unprecedented rates, but this likely isn't the most important bottleneck (further, this ability can be actively harmful, as we keep [finding out](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/)).

### Adjusting: model collapse might not be a practical issue for providers.

In part 1, I talked about my fears that LLM-based tools like ChatGPT would negatively impact knowledge-sharing communities like StackOverflow. However, I didn't discuss an important aspect of this recent history, in which the site's moderators [banned the use of ChatGPT](https://meta.stackoverflow.com/questions/421831/policy-generative-ai-e-g-chatgpt-is-banned) for generating questions/answers shortly after its release. Not only are LLMs capable of spitting out Javascript at inhuman speeds, they're able to do the same for any form of text. This poses an ecological problem for the broader internet, where a large share of communication is still text-based. The rate at which spam can be produced has always been a strength in the long-running conflict between spammers and mods. It's not great that LLMs are augmenting this already considerable advantage.

The issue is that human comprehension is always slower than the rate of text-production. The fluency and dynamic nature of LLM outputs means that certain anti-spam automations are less effective.[^1] As we've seen over the past few years, LLMs are being used to generate email replies, social media posts, long-form documentation, essays, reports, articles, novels, etc. Various forms of slop, as the kids say. Much of this output is intended to land publicly on the internet, where many people could (in theory) read it. Thus, it seems inevitable that future iterations of LLMs will ingest LLM-generated text as part of their training.

A reasonable intuition is that this seems bad for the future utility of these models. LLMs model natural language probabilistically; they're products of statistical learning upon massive corpora of textual data. As models, LLMs are approximate a (conditional) probability distribution of language.[^2] This being the case, LLMs share a quality of all statistical models, in that their performance depends on the quality and diversity of data used for training. "Garbage in, garbage out" (GIGO), as the saying goes. To the point: indiscriminantly mixing _generated_ text with human-written text for training seems problematic, because generated text isn't part of the real/target distribution. So, what will happen as LLM output accumulates in available training data? I was excited to find this paper in 2024, [_"AI models collapse when trained on recursively generated data"_](https://www.nature.com/articles/s41586-024-07566-y) (Shumailov et al., 2024), which works through some of the theory behind this question.

#### What is model collapse?

<!-- 2023: https://www.hendrik-erz.de/post/why-gzip-just-beat-a-large-language-model -->
<!-- 2024: Language Modeling is Compression https://arxiv.org/pdf/2309.10668 -->

<!-- sources of error:
- statistical approximation error
- functional expressivity error
- functional approximation error -->

As the paper's authors describe it, _model collapse_ is "a degenerative process whereby, over time, models forget the true underlying data distribution, even in the absence of a shift in the distribution". The phenomena is caused by "indiscriminate learning" from data produced by other models, rather than actual examples (i.e., human-written language, in the context of LLMs). As we've seen, LLM providers train their models generationally, with each new generation getting access to newer data. Shumailov et al. ask what happens in a future where "_GPT-n_" is trained on data consisting of mostly LLM output. Their conclusions, based on theoretical results and experimentation, motivate the authors' concerns that use of LLMs at scale to publish internet content will gradually contaminate data necessary for training successor models.

The next few paragraphs are a little technical, but I want to walk through some of what the authors are discussing. In particular, I want to reproduce one of their simpler examples to show what the authors mean by a model "forgetting" part of the original distribution. This involves a bit of mathematical notation, but I hope you'll bear with me!

The authors describe a generational process of model fitting, in which model outputs are subsequently used for training future generations. This process is model-agnostic, i.e., it applies to the training of LLMs, and other categories of predictive models. In the authors' notation, they describe a dataset, $\mathcal{D}_i$, comprised of random variables from generation $i$:

$$
\mathcal{D}_i = \{ X^i_1, X^i_2, \cdots, X^i_j, \cdots, X^i_{M_i} \overset{i.i.d.}{\sim} p_i(\theta) \}. 
$$

A _functional approximation_ of $\mathcal{D}_i$'s probability distribution is estimated via training: $p_{\theta_{i+ 1}} = \mathcal{F}_\theta (p_i)$. The next generation's dataset, $\mathcal{D}_{i + 1}$, is generated by sampling from

$$
\begin{align*}
p_{i + 1} = \alpha_i p_{\theta_{i + 1}} + \beta_i p_i + \gamma_i p_0, \text{ where } &\alpha_i, \beta_i, \gamma_i > 0 \\
\text{ and } &\alpha_i + \beta_i + \gamma_i = 1.
\end{align*}
$$

Here, $\alpha_i$, $\beta_i$, and $\gamma_i$ represent proportions of $\mathcal{D}_{i + 1}$ coming from the current generation $i$, previous generation $i - 1$, and the original data, respectively.[^3] [^4] To demonstrate model collapse, they discuss several examples, setting $\alpha_i = 1$ and $\beta_i = \gamma_i = 0$.

As is tradition, the authors provide an example using the 1-dimensional Gaussian distribution to build intuition. We can treat this as a vastly simpler stand-in for the more involved process of building an LLM with billions of parameters. To model a Gaussian distribution (the classical "bell curve"), we only need to estimate two parameters from a dataset $\mathcal{D}_i$: the mean $\mu_{i + 1}$, and variance $\sigma^2_{i + 1}$. Once these parameters are found, we can sample from $p_{i + 1}$ to produce $\mathcal{D}_{i + 1}$: 

$$
\begin{align*}
\mathcal{D}_i &= \{ X^i_1, \cdots, X^i_{M} \overset{i.i.d.}{\sim} \mathcal{N}(\mu_i, \sigma^2_i) \} \\
\mu_{i + 1} &= \frac{1}{M} \sum_j X^i_j \\ \sigma^2_{i + 1} &= \frac{1}{M - 1} \sum_j (X^i_j - \mu_{i + 1})^2 \\
\mathcal{D}_{i + 1} &= \{ X^{i + 1}_1, \cdots, X^{i + 1}_M \overset{i.i.d.}{\sim} \mathcal{N}(\mu_{i + 1}, \sigma^2_{i + 1}) \}
\end{align*}
$$

Visualizing this process via simulation (using initial values $\mu_0 = 0$, $\sigma^2_0 = 1$, and fixed $M = 100$), we clearly see how the distribution's variance (the distribution's "spread") approaches 0 in just a few generations. You could say that after the fourth generation, the model "forgets" about the possibility of data with an absolute value greater than 2. This is what the authors call "early" model collapse. By the sixth generation, we have "late" model collapse, in which the distribution's variance disappears.

<script>
  import { Plot, RectY, binX } from 'svelteplot';
  import { range } from 'd3-array';
  import { randomNormal, randomLcg } from 'd3-random';
  import { mean, sum } from 'd3';

  function sim(m, D, mu_0, sd_0, alpha, beta, gamma) {
    let rnorm = randomNormal.source(randomLcg(20250924));
    let mu = mu_0;
    let sd = sd_0;

    let d = [];
    for (let index = 0; index < D; index++) {
      let mu_1 = mu;
      let sd_1 = sd;

      let x = [
        ...range(m * alpha).map(rnorm(mu, sd)),
        ...range(m * beta).map(rnorm(mu_1, sd_1)),
        ...range(m * gamma).map(rnorm(mu_0, mu_0)),
      ];

      mu = mean(x);
      sd = (m - 1)**(-1) * sum(x.map(i => (i - mu)**2));

      d.push(...x.map(item => ({ i: `i = ${index + 1}`, "x": item })));
    }

    return d;
  }

  let res = sim(100, 6, 0, 1, 1, 0, 0);
</script>

<Plot grid>
    <RectY
        {...binX(
            { data: res, x: 'x', fx: 'i' },
            { y: 'count' }
        )} />
</Plot>

This toy example risks being so simple as to be obvious, but it illustrates how building models recursively can be fraught. More interestingly, however, the authors show that LLMs are vulnerable to the same problem. By fine-tuning a published model over successive generations (in which the model is trained with samples from the prior generation), high probability outputs from generation 0 become even more probable in the model's descendants. Here's a passage from the paper, which you may have already seen in popular coverage:

> Example of text outputs of an OPT-125m model affected by model collapse—models degrade over generations, for which each new generation is trained on data produced by the previous generation.
> 
> **Input:** some started before 1360 — was typically accomplished by a master mason and a small team of itinerant masons, supplemented by local parish labourers, according to Poyntz Wright. But other authors reject this model, suggesting instead that leading architects designed the parish church towers based on early examples of Perpendicular.
> 
> **Outputs:**
> 
> **Gen 0:** Revival architecture such as St. John’s Cathedral in London. The earliest surviving example of Perpendicular Revival architecture is found in the 18th @-@ century Church of Our Lady of Guernsey, which dates from the late 19th century. There are two types of perpendicular churches : those.
> 
> **Gen 1:** architecture such as St. Peter’s Basilica in Rome or St. Peter’s Basilica in Buenos Aires. There is no evidence that any of these buildings were built during the reign of Pope Innocent III, but it is possible that they may have been built during the reign of his successor, Pope Innocent.
> 
> **Gen 5:** ism, which had been translated into more than 100 languages including English, French, German, Italian, Spanish, Portuguese, Dutch, Swedish, Norwegian, Polish, Hungarian, Slovak, Lithuanian, Estonian, Finnish, Romanian, Bulgarian, Turkish, Croatian, Serbian, Ukrainian, Russian, Kazakh, Kyrgyz.
> 
> **Gen 9:** architecture. In addition to being home to some of the world’s largest populations of black @-@ tailed jackrabbits, white @-@ tailed jackrabbits, blue @-@ tailed jackrabbits, red @-@ tailed jackrabbits, yellow @-.

"Collapse" certainly feels apt as a description for what we see as a response in Gen 9. That said, if we're persuaded by the authors' results, what might they suggest for models trained in the (near-ish) future? In the main text, the authors consider two different scenarios for training LLMs: $\gamma_i = 0.0$, and $\gamma_i = 0.1$. The first imagines a world in which all text that's available for training is output from a prior LLM. We can grant this isn't meant to be realistic, and understand it's meant to demonstrate the process of interest. But, the second scenario, $\gamma_i = 0.1$, also doesn't feel satisfying to me; it reads too similar to the first. Unsurprisingly, the authors show that model collapse still occurs, just a bit more slowly. In their supplemental materials, they also observe that model collapse eventually occurs when $\alpha_i$, $\beta_i$, and $\gamma_i$ are allowed to vary randomly. 

Fair enough, but the most realistic scenario anticipates practitioners actively working to ensure that future datasets are clean when they arrive in their hands. That is, when a dataset is assembled for training LLM-generation $i$, the true values for $\alpha_{i - 1}$, $\beta_{i - 1}$ and $\gamma_{i - 1}$ may be unknown and random, but I think we should assume that $\mathcal{D}_i$ will be constructed in a way that tries to minimize $\alpha_{i - 1}$ and $\beta_{i - 1}$. My sense is that reaching "late" model collapse will take many more generations if $\gamma$ is consistently high. This seems to hold up in the Gaussian simulation if we set $\gamma = 0.9$ and $\alpha = 0.1$. At $i = 300$, the distribution's variance was still very close to the true/original value of 1.

Currently, it seems to take providers roughly 6-12 months to produce a new generation of their models. This leads me to wonder whether model collapse is actually a practical issue. Perhaps in the future it will be costly (or otherwise problematic) to constrain $\alpha$ and $\beta$, but data cleaning is a normal part of model development. Even before the advent of current LLMs, practitioners developed methods to avoid training models on duplicated documents/text.[^5] New approaches to flag LLM-generated output may have varying levels of success, but I wish the authors had addressed this a bit more directly with their results, rather than touching on it in the paper's discussion.

#### Possible futures: collaboration, or competition and hoarding

After reading through this paper, it's not clear that model collapse will threaten the viability of future models. It's inevitable that model providers will take proactive steps to avoid or mitigate this problem. Maybe hoping the technology would conveniently poison itself was never realistic, but it's still disappointing. I worry we're destined for a future where the digital commons are polluted by these models, and we don't get the consolation of it becoming unusable for these machines.

In the paper's discussion, the authors sketch two possible directions to sustain future training of LLMs. First, the broader community of model-builders/providers could coordinate in order to establish the provenance of data being used to train LLMs. There's a bit of precedent for this; one example is the use of "model cards" to summarize a published model (which should contain metadata about the model's data sources), but these efforts are not standardized. Major providers could also engage in what's called ["watermarking"](https://arxiv.org/abs/2301.10226) LLM output, in which certain tokens in the LLM's vocabulary are made (imperceptibly) more likely. However, as David Gilbertson [argues](https://ai.gopubby.com/why-llm-watermarking-will-never-work-1b76bdeebbd1), watermarking is unlikely to be successful, primarily because we have no means of requiring the technique be used. In any case, model-builders/providers are focused principally on competing with each other for users/contracts. Time spent on coordination and harm mitigation only distantly (if at all) supports a firm's overriding objectives, and other firms can free-ride on those efforts. In short, _this is a classic tragedy of the commons_, one that's been apparent from the outset.

Further, even if there was meaningful interest among model-builders/providers to coordinate, screening methods needed to attribute the origins of text "in the wild" to various models or humans are still being developed. All the LLM output that's already been published can't be clawed back. Right now, our ability to track the publication of content that's either wholly or partially generated by LLMs is limited. In the case of undeclared LLM usage in scientific/academic publishing, I've seen estimates as low as [1-3%](https://www.mdpi.com/2504-2289/8/10/133) and as high as [25%](https://www.nature.com/articles/d41586-025-02936-6). These two citations focus on detection of _any_ LLM-generated text, cover different disciplines, and focused on different parts of sampled manuscripts (introductions in the former, abstracts in the latter), but getting precise estimates of this phenomena seems challenging. It's also likely that future training efforts will continually blunt the effectiveness of detection methods (Wu et al., [2025](https://direct.mit.edu/coli/article/51/1/275/127462/A-Survey-on-LLM-Generated-Text-Detection-Necessity); see section 8.2 "Training Threat Models").

Given these issues, my guess is that providers will have to continue relying largely on pre-2023 data as a foundation for their training data. Better resourced providers will be able to acquire presumably pure (i.e., human-created) data sources via licensing, or other means. But the collective action problem sketched above means that the issue of avoiding unwanted LLM-outputs in training data is just another axis on which providers will compete. Each provider will have access to research on the topic, and their own internal/bespoke approaches for building their product(s). If the web becomes filled increasingly filled with slop, it may become difficult to train future generations, but this seems to put larger providers at an advantage. They'll have the ability to acquire any smaller firms with innovative approaches, and the rich will get richer. This is all apiece with how today's economy works, and I don't foresee this changing in the near future.

### More in [part 3.](/blog/post/llms-2025-part-3)

I think this is about where I'm ready to leave things as of 2025. If I was writing a tl;dr for this post, it'd boil down to three things:

1. the web will continue to be contaminated by LLM output, but this won't kill the technology, because
2. providers will resist the factors that cause model collapse, and
3. providers will compete amongst themselves in preventing degradation (which will encourage consolidation).

Perhaps point 3 is a bit underdeveloped, but maybe it's worth revisiting in the future, or in my next post in this series. We're beginning the fall of 2025 in the US, and over the summer we saw more open acknowledgements that tech (and perhaps the broader US economy) is in the midst of an "AI bubble". I want to dig into this in the next post; maybe we'll finish things up before the year is over!

[^1]: In some cases, traditional approaches still work when spam-producers don't bother to remove common tells that indicate chatbot output (like "happy to help!", or "certainly!"). But, we've definitely kicked off a new arms-race between factions in this conflict. 

    I haven't discussed the issue in either of these posts, but it's extremely concerning to read reports about LLM usage for writing assignments in high-school and college. Automated approaches for plagiarism detection will inevitablely miss some true instances, and injure honest students via false positives. I don't think we were effectively engaging with these nuances as a society before 2022. The fact that this problem is more urgent today is not encouraging.

[^2]: I think this description is workable, but I feel unsatisfied in stating it. If you treat prediction as a problem to be solved, probability theory is certainly applicable to the task of predicting future tokens. But, even if we grant that LLM outputs qualify as "language", I don't know if the probability distribution they model can faithfully describe "our" language(s).

    The foundation models required massive amounts of text for (pre-)training. Necessarily, this means that text used was sourced across large spans of time, and relects what was _available_ for ingestion. That is, there are real selection processes in determining what text lands on the internet, and they're relevant even if we'll never fully understand them. Some argue that this resembles how humans acquire their own linguistic abilities (i.e., people develop their way of writing/speaking via cumulative experiences and sampling, which is biased in all sorts of ways), but I think this analogy is unconvincing. Children don't read the entirety of Wikipedia to acquire fluency; these are vastly different processes, and their comparison is largely unhelpful.

    I think a moderate perspective is that LLMs produce "machine language" or "synthetic language". Output from a LLM-based service like ChatGPT is largely a smoothed amalgam of text from Common Crawl (this [paper](https://dl.acm.org/doi/10.1145/3630106.3659033) reports that 80% of the ChatGPT-1's tokens came from it). It resembles what humans produce, but the qualifier is a necessary floor for discussion. We should be foregrounding this difference (rather than eliding it).

[^3]: The definition for $p_{i + 1}$ and $\alpha_i$, $\beta_i$, and $\gamma_i$ characterizes $p_{i + 1}$ as a [finite mixture distribution.](https://en.wikipedia.org/wiki/Mixture_distribution) This is equivalent to saying that for a random draw from $p_{i + 1}$, the values of $\alpha_i$, $\beta_i$, and $\gamma_i$ are probabilities of selection from the distributions $p_{\theta_{i + 1}}$, $p_i$, and $p_0$.

[^4]: By the "original distribution", $p_0$, I believe the authors mean a probability mass/density function whose parameters are unknown but fixed at time 0. In the context of LLMs, we might not be able to write down $p_0$, but we could sample from it by tokenizing documents/text available before generation $i = 1$. However, I've found myself thinking about another definition for $p_{i + 1}$, reformulated as:

    $$
    p_{i + 1} = \alpha_i p_{\theta_{i + 1}} + \beta_i p_i + \gamma_i p_0 + \eta_i p_i^*,
    $$
    
    where again $\alpha_i + \beta_i + \gamma_i + \eta_i = 1$, $\alpha_i, \beta_i, \gamma_i, \eta_i > 0$, and $p_i^*$ is the probability mass/density function for data available at generation $i$ that is _not_ generated by a model. I think this is helpful, in that it explicitly acknowledges that practitioners will likely want to include "fresher" data (e.g., authentic human-generated text, in the context of LLMs) reflecting the state of the world at generation $i$. Maybe this distinction isn't critical, but datasets never simply fall from the sky. $D_{i + 1}$ will be _collected_ and/or _assembled_ by practitioners in order for it to be used for training. It might be that $\alpha_i$, $\beta_i$, $\gamma_i$, and $\eta_i$ are allowed to be random, but I can imagine instances where practitioners might intervene to constrain one or more of these values.

[^5]: While different from model collapse, training on data using duplicated information also results in a fitted distribution with smaller variance than the actual distribution.

<style>
  h3 {
    font-size: 1.25em;
    margin-bottom: .8em;
  }
  h4 {
    font-size: 1.15em;
    margin-bottom: .8em;
  }
</style>
