---
title: "Reading Bayes Rules"
author: Andrew Moore
date: "2026-11-22"
slug: reading-bayes-rules
description: >
  My notes/summary of what I've learned thus far while reading "Bayes Rules!"
draft: false
categories: []
preview: null
math: typst
---

<script>
  import GammaPrior from './GammaPrior.svelte';
  import GammaModel from './GammaModel.svelte';
</script>

Despite personal interests, I haven't had an opportunity to take coursework that approaches statistics from a specifically Bayesian perspective. I've wanted to build up my knowledge in this area, and found Gelman et al.'s [_Bayesian Data Analysis_](https://sites.stat.columbia.edu/gelman/book/) (BDA) rigorous, but a bit steep. 

With the intention of working my way up to BDA's material, I've looked around for other options to get started. This led me to [_Bayes Rules! An Introduction to Applied Bayesian Modeling_](https://www.bayesrulesbook.com/), by Alicia Johnson, Miles Ott, and Mine Dogucu. Unlike BDA, which is aimed at graduate students, _Bayes Rules!_ is meant to be approachable for undergraduate students.

I've been gradually working through _Bayes Rules!_ via its online website that the authors graciously provide to readers. For each chapter, I've been keeping notes and completing a smattering of the exercises that interest me. At the time of writing, I've gone through chapters 1 through 7. This post is meant to summarize what I've learned up to this point, an attempt to write down what I think I can explain to others (in a condensed form).

# Foundations: what is the task of "statistics"?

I'm going to follow the example of the authors of _Bayes Rules!_, and avoid spending time contrasting _Bayesian_ and _Frequentist_ approaches to statistics. Instead, I want to highlight the role that statistics serves within the tasks of scientific research, policy evaluation, forecasting, etc., and discuss how Bayesian methods fulfill goals within these domains.

At its deepest roots, statistics is a subdiscipline of applied mathematics that's historically tied to the work of governance and the analysis of economic production. Statistics is concerned with the task of _counting_ and _summary_ of events and processes (i.e., data analysis), in order to describe the state of our world and make qualified _inferences_ about unknown quantities or events. Among its various tools, statistics is commonly associated with _probability theory_, the area of mathematics concerned with the study of randomness.

In the work of research or evaluation, statisticians are tasked with proposing and refining statistical models used to evaluate theoretical hypotheses, generate predictions, and explain (or simulate) real-world processes. For any Bayesian analysis, the starting point is the construction of a probability model.

## What is a probability model?

Here we'll introduce a bit of notation. A probability model $`cal(P) = (Omega, cal(F), P)`$ for an experiment[^1] consists of:
- a sample space, $`Omega`$: the complete set of possible outcomes for an experiment,
- events, $`cal(F)`$: subsets of outcomes in the sample space, and 
- a probability measure, $`P`$: a mathematical rule for assigning probability values to each outcome and event.

The probability measure and set of events must satisfy some crucial mathematical properties[^2], but I won't delve into these in detail.

<!-- For example, a probability model $cal(P)$ can be a set of probability distributions, $P$ with different parameter values $theta$:

```math
cal(P) = {P_theta, theta in Theta}.
``` -->

I'll try to make this more concrete with an example. Let's assume we're assisting a teacher studying whether a particular pedagogy can be used to increase student reading rates. The teacher uses the pedagogy in their classroom, and they plan to provide us with a dataset $`(X_1, X_2, ..., X_n)`$. Each $`X_i`$ records the number of books that student $`i`$ finished during April of the most recent school year. Using this information, let's construct a probability model for our study.

For each individual student, we're recording the count of books they report having finished reading. Thus, the possible _outcomes_ that each $`X_i`$ could take (our sample space) is the set of positive integers, which we write as
```math
X_i in {0, 1, 2, ...} = Omega.
```

The events $`cal(F)`$ in our sample space are subsets of $`Omega`$, which we can often translate into natural language:
- $`X >= 4: \"X "is at least four\"" = {4, 5, 6, ..., 28, 29, 30, ...} subset Omega`$
- $`10 < X < 15: \"X "is between 10 and 15\"" = {11, 12, 13, 14} subset Omega`$
- $`X = 1: \"X "is exactly 1\"" = {1} subset Omega`$

Lastly, to complete our probability model $`cal(P)`$, we need a probability measure $`P`$. One candidate is the Poisson distribution: 
```math
P(X=x|lambda) = f(x|lambda) = (lambda^x e^(-lambda))/x! "for" x in {0, 1, 2, ...}.
```
Adopting the Poisson distribution as our measure is equivalent to assuming that each $`X_i`$ is a draw from a Poisson distribution, which we write as $`X_i ~ "Poisson"(lambda).`$ In general, when we want to refer to a random variable $`X`$ being a draw from an arbitrary (possibly unnamed) distribution $`f`$, we write $`X ~ f(theta)`$.

Probability distributions have _parameters_ that control their behavior, such as their center and spread. The Poisson distribution has a single parameter, which is customarily denoted by the greek letter $`lambda`$ (lambda). Here, $`lambda`$ is a rate (reflecting the average number of books completed in 30 days), and thus it's a real number that can take any value grater than 0. If we know or have a value for $`lambda`$, we can compute the probabilities for different events. Say we knew that students finish an average of 3 books per month (which implies $`lambda = 3`$). We could then calculate the probability of a student finishing 5 books: 
```math
P(X=5|lambda=3) = f(5|3) = frac(3^5 e^(-3), 5!) approx 0.101.
```

We could also compute the probability of a student finishing less than 3 books:
```math
P(X<3|lambda=3) &= sum_(x=0)^(2) P(X=x|lambda=3) \
  &= P(X=0|lambda=3) + P(X=1|lambda=3) + P(X=2|lambda=3) \
  &= (3^0 e^(-3))/0! + (3^1 e^(-3))/1! + (3^2 e^(-3))/2! \
  &approx 0.242.
```

<!-- For many named distributions, such as the Gaussian (Normal) and Poisson, parameter values correspond directly to statistics we care about, such as a distribution's mean (i.e., expected value) and variance. The Poisson has a special characteristic in that $`lambda`$ is the distribution's mean and variance:
```math
E(f(x|lambda)) = "Var"(f(x|lambda)) = lambda.
``` -->

# The machine behind Bayesian inference: Bayes' Theorem

Everything in the preceding section is within the realm of probability theory. Probability theory gives us a notation for talking about outcomes and events, as well as a means to assign probability values to events in our sample space. However, in practice we're never handed the values of the parameters in our model. Instead, we collect (or receive) a dataset $`D`$ that has been sampled from the data generating process $`f(theta)`$ we're hoping to learn about:
```math
D &= {X_1, X_2, ..., X_n: X_i ~ f(theta)}.
```

It's from the collected data points that we produce estimates for $`theta`$. The process of producing estimates for unknown parameters using sample data is called statistical inference. For Bayesian inference, the machine that produces an estimate, which we refer to as a _posterior distribution_ $`f(theta|D)`$, is called Bayes' Theorem:
```math
f(theta|D) = (P(theta)L(theta|D))/P(D).
```

In natural language, you could read this expression as "the posterior distribution is equal to the product of the _prior distribution_ and the data's _likelihood_, divided by the probability of the data." We'll see how we estimate a posterior distribution from our sample next, but it's worth noting a few aspects of this formula. 

First, our estimate for $`theta`$ is itself a probability distribution: $`f(theta|D)`$. Translating this notation a bit, our posterior distribution is a function that produces values between 0 and 1 for each value of $`theta,`$ _conditioned_ on collected data $`D`$. This means that questions such as "what is the probability that $`theta`$ is between 3 and 8?" can be calculated directly:
```math
P(3 <= theta <= 8|D) = cases(
  sum_(theta=3)^8 f(theta|D) "if" theta "takes discrete values,",
  integral_3^8 f(theta|D) dif theta "if" theta "is continuous".
)
```

Second, Bayes' Theorem requires us to represent what we think we already know about $`theta`$, using a prior distribution $`P(theta)`$. It's rare that we start from a state of pure ignorance about the processes we're interested in. We often have existing research or knowledge to draw upon, and this work can help us establish reasonable assumptions for the values we think $`theta`$ could take. Philosophically, I don't think it's strictly necessary for a prior distribution to reflect one's absolute state of belief about the world. Instead, choices about prior distribuitions allow us to bring more/less informed (or skeptical) perspectives into our analyses in a way that's transparent.

Third, our understanding of $`theta`$ is a reconciliation between our _prior beliefs_ about $`theta`$ and what is _likely_ true about the world, given the data we have. At least for me, this is an appealing way of thinking about the task of inference. When we talk casually about learning, we usually have a notion of experience that's cumulative. Through study or practice, one might improve (or inadvertently, worsen) performance on a task or in their understanding of a topic. We're also used to assuming some level of rationality between different actors. That is, if people with different prior beliefs are presented with the same information, their understandings should eventually converge. Bayesian inference has the quality of embracing the sequential accumulation of data and convergence of beliefs. As we'll see, today's posterior distribution can just as easily be tomorrow's prior distribution.

# Returning to our example: learning from collected data

Let's assume our colleague has provided us with the reading data for $`n = 24`$ students in their classroom:
<!-- Produced via rpois(24, 0.9) -->
```math
// set.seed(20261122)
// x <- rpois(24, 1.2)
// sum(x)
// x |> factorial() |> prod()
// str_c(x, collapse = ", ")
arrow(x) = (x_1, x_2, x_3, ..., x_n) = (1, 0, 1, 0, 2, 2, 2, 1, 2, 3, 2, 0, 0, 0, 1, 2, 2, 2, 0, 0, 1, 2, 2, 1).
```

Previously, we established our probability model $`cal(P)`$ for this study, and adopted the Poisson distribution as our probability measure for our sample space. In observing the class, our colleague is confident that students are choosing books individually, and completing them on their own. That is, we can be reasonably sure that student $`i`$'s habits are _independent_ of those for any other student $`j`$.

This assumption makes some of our computation much simpler. As part of our estimation, we need a _joint likelihood function_ $`L(lambda|arrow(x))`$ that measures how compatible values of $`lambda`$ are with our observations $`arrow(x)`$. If our sample data is independent, $`L(lambda|arrow(x))`$ is simply the product of the Poisson probability mass function (p.m.f.) for each observation $`x_i`$.

Let's write out what we know about our statistical model at this point:
```math
#let n = 24
#let sum_x = 29
#let factorial_x = 6144

X_i|lambda &attach(~, t: "ind") "Poisson"(lambda) &("data model for each" X_i) \

lambda &~ g(theta) &("prior distribution" g "with hyperparameter" theta) \

f(x|lambda) &= frac(lambda^(x) e^(-lambda), x !) "for" lambda > 0 "and" x in {0, 1, 2, ...} &("Poisson probability mass function") \

L(lambda|arrow(x)) &= product_(i = 1)^n f(x_i|lambda)  &("joint likelihood function") \
            &= f(x_1|lambda) dot f(x_2|lambda) dot f(x_3|lambda) dot ... dot f(x_n|lambda) \ \
            &= frac(lambda^(x_1) e^(-lambda), x_1 !) dot frac(lambda^(x_2) e^(-lambda), x_2 !) dot frac(lambda^(x_3) e^(-lambda), x_3 !) 
               dot ... dot frac(lambda^(x_n) e^(-lambda), x_n !) \ \
            &= frac(lambda^(sum x_i) e^(-n lambda), product x_i !) \
            &= (lambda^#sum_x e^(-#n lambda))/#factorial_x \ \

f(lambda|arrow(x)) &= (f(lambda) L(lambda|arrow(x)))/ (integral_lambda L(lambda|arrow(x)) dif lambda) prop f(lambda) L(lambda|arrow(x)) &("posterior distribution")
```

All that's left is to choose a prior distribution, $`f(lambda)`$. In the above we have a stand-in, $`g(theta)`$, but in order to find a posterior distribution we'll need to specify an actual probability density function to combine with our likelihood.

# Picking a prior distribution: why we like conjugacy

In theory, we could pick any probability density function with a support of $`(0, infinity)`$ as our choice for $`f(lambda)`$. However, the Poisson distribution has a well-known relationship with the _Gamma_ probability distribution. Specifically, the Gamma distribution is a _conjugate distribution_ for the Poisson. In this context, conjugacy means that the posterior model $`f(theta|arrow(x)) prop f(theta)L(theta|arrow(x))`$ is a member of the same model family as the prior. 

In particular, we'll aim to show the following claim: $`lambda|arrow(x) ~ "Gamma"(alpha + sum x_i, beta + n)`$.

```math
lambda &~ "Gamma"(alpha, beta) "for" alpha,beta > 0 \
f(lambda) &= beta^alpha / Gamma(alpha) lambda^(alpha - 1) e^(-beta lambda) "for" lambda > 0 & ("probability density function for the prior")  \
f(lambda|arrow(x)) &= (f(lambda) L(lambda|arrow(x))) / (integral_lambda L(lambda|arrow(x)) dif lambda) & ("Bayes' Theorem") \
  &= ((beta^alpha)/Gamma(alpha) dot lambda^(alpha - 1) e^(-beta lambda))
     dot (frac(lambda^(sum x_i) e^(-n lambda), product x_i !)) 
     dot 1/(integral_lambda L(lambda|arrow(x)) dif lambda) \
  &= (beta^alpha)/(Gamma(alpha) (product x_i !) (integral_lambda L(lambda|arrow(x)) dif lambda))
     dot (lambda^(sum x_i) e^(-n lambda))
     dot (lambda^(alpha - 1) e^(-beta lambda)) "      " & ("isolating constant terms") \
  &prop (lambda^(sum x_i) e^(-n lambda))
     dot (lambda^(alpha - 1) e^(-beta lambda)) \
  &= lambda^((alpha + sum x_i) - 1) e^(-(beta + n) lambda) & ("kernel of the posterior distribution").
```

As we can see, the kernel of $`f(lambda|arrow(x))`$ has the same dependency on $`lambda`$ as that of the prior $`f(lambda)`$. After removing constants from the expression, they both take the form of $`lambda^(qed - 1) e^(-qed lambda)`$, i.e., the form used by the Gamma distribution. Aside from the Gamma-Poisson model we're discussing, several well-known models have conjugate priors, including the _Beta-Binomial_, and the _Normal-Normal_ models. A key part of their attractiveness is that they greatly simplify the computational work needed to derive the posterior distribution. In our case, we merely need to have values for $`alpha, beta, sum x_i,`$ and $`n`$.

# Tuning our prior based on existing information
Based on our colleague's preliminary research about the pedagogy being implemented, they have some bounds for $`lambda`$ that can inform our analysis. In other classes that have implemented this pedagogy, students finish about 1.5 books in a monthly period. Further, only about 5% of studies in the literature show completion rates under 1. We can use this empirical information to specify the values for our prior distribution's hyperparameters: $`alpha`$ and $`beta`$.

Using the sliders below, you can adjust $`alpha`$ and $`beta`$ to change the shape of of the curve. A specification that matches our example colleague's review of the literature, Gamma(22.25, 15), is rendered as a dashed line.

<GammaPrior a={5} b={5} max={7} />

Based on the needs or information provided by our colleagues, various choices could be chosen for $`alpha`$ and $`beta`$ to reflect a point of view before we observe data. For example, if our colleague believed that the literature was too optimistic and wanted to give it less weight, we could pick Gamma(8.72, 5.7) as a choice that keeps the same mean, but allows for more variability.

# Summarizing the posterior distribution and hypothesis testing

Now that we have a (conjugate) prior in hand, we can combine it with our observed data to analyze our study's posterior distribution:
```math
#let prior_alpha = 22.25
#let prior_beta = 15
#let sum_x = 29
#let n = 24

X_i|lambda &~ "Poisson"(lambda) \
lambda &~ "Gamma"(alpha = #prior_alpha, beta = #prior_beta) \
lambda|arrow(x) &~ "Gamma"(alpha = #(prior_alpha + sum_x), beta = #(prior_beta + n))
```

Plotting our (scaled) likelihood, prior, and posterior together as curves, we can see that the posterior distribution is a compromise between the sample data's likelihood and our prior. The likelihood function shows the values of $`lambda`$ that our data is most compatible with. However, our posterior combines our sample's information with what we knew prior to data collection. Our results indicate that students in this class are finishing close to 1.3 books in a month, a bit lower than what we'd expect from the literature. We can also compute a _range_ of plausible values for $`lambda`$, called a _credible interval_. In our case, the 95% credible interval for $`lambda`$ is [0.98, 1.7].

<GammaModel />

In evaluating the pedagogy based on our (small) sample, we can compute a few additional summaries. First, our colleague is interested in knowing whether students learning under this approach are finishing more books than the district's average. Based on prior surveys, the district's best guess is that students at the same grade level in this school's district are completing around 1 book per month. Based on our posterior distribution, we have 
```math
P(lambda > 1|arrow(x)) = 1 - integral_0^1 f(lambda|arrow(x)) dif lambda approx 0.97.
```

...

```math
H_0: & lambda <= 1 \
H_1: & lambda > 1 \
"prior odds" &= P(H_1)/P(H_0) = (1 - integral_0^1 f(lambda) dif lambda)/(integral_0^1 f(lambda) dif lambda) approx 28.4 \
"posterior odds" &= P(H_1|arrow(x))/P(H_0|arrow(x)) = (1 - integral_0^1 f(lambda|arrow(x)) dif lambda)/(integral_0^1 f(lambda|arrow(x)) dif lambda) approx 27.6 \
"Bayes factor" &= "posterior odds"/"prior odds" approx 0.97
```
---

<!-- In the above, I've attempted to concisely describe what we're doing when we use statistical methods, and what characterizes Bayesian methods in particular. I want to linger briefly on what appeals to me about the Bayesian approach. First, I appreciate how the approach emphasizes the work of writing down precisely what we're estimating and assuming. Even if certain approaches are very established (like using the Poisson distribution to model counts of events in period), we can be explicit on what exactly we're up to. Second, the approach requires us to think about our estimates and assumptions as _distributions._ It's not always possible to define and observe the entirety of a population of interest. We're often working with the data that we have, rather than the data we'd like. For brief moments, there might be "true" parameter values at the population level for an outcome of interest, but the world is constantly moving. In light of this, it _feels_ better to me to focus on what's _plausible_ (or not) for a parameter's value, given the data that we have in the moment. Lastly, I think it's extremely useful that the approach explicitly acknowledges that we (humans) possess prior beliefs before approaching a dataset. These beliefs ought to be transparent and encoded into the model we're constructing. Sometimes these beliefs are "strong", reflecting particular hypotheses that stem from theoretical knowledge or previous empirical studies. Alternatively, sometimes we merely want to _constrain_ the range of parameters to reflect our awareness of what's possible to occur within a physical system. Further, if we have data arriving periodically, we should be able to rationally update our understanding in light of what we already know. -->

[^1]: An 'experiment' is...
[^2]: The set of events $`cal(F)`$ must be what's referred to as a $`sigma`$-algebra, and the probability measure $`P`$ must be countably additive (that is, $`P(A union B) = P(A) + P(B)`$ for all disjoint events $`A, B subset cal(F)`$).

<style>
  h1, h2 {
    font-size: 1.2em;
  }
</style>
