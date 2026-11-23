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

Despite personal interests, I haven't had an opportunity to take coursework that approaches statistics from a specifically Bayesian perspective. I've wanted to build up my knowledge in this area, and found Gelman et al.'s [_Bayesian Data Analysis_](https://sites.stat.columbia.edu/gelman/book/) rigorous, but a bit steep. 

With the intention of working my way up to BDA's material, I've looked around for other options to get started. This led me back to [_Bayes Rules! An Introduction to Applied Bayesian Modeling_](https://www.bayesrulesbook.com/), by Alicia Johnson, Miles Ott, and Mine Dogucu. Unlike BDA, which is aimed at graduate students, _Bayes Rules!_ is meant to be approachable for undergraduate students.

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

Probability distributions have _parameters_ that control their behavior, such as their center and spread. The Poisson distribution has a single parameter, which is customarily denoted by the greek letter $`lambda`$ (lambda). If we know or have a value for $`lambda`$, we can compute the probabilities for different events. Say we knew that students finish an average of 3 books per month (which implies $`lambda = 3`$). We could then calculate the probability of a student finishing 5 books: 
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

It's from the collected data points that we produce estimates for $`theta`$. The process of producing estimates for unknown parameters from sample data is referred to as statistical inference. For Bayesian inference, the machine that produces an estimate, which we refer to as a _posterior distribution_ $`f(theta|D)`$, is called Bayes' Theorem:
```math
f(theta|D) = (P(theta)L(theta|D))/P(D).
```

In natural language, you could read this expression as "the posterior distribution is equal to the product of the _prior distribution_ and the data's _likelihood_, divided by the probability of the data." We'll see how we estimate a posterior distribution from our sample of student absences next, but it's worth noting a few aspects of this formula. 

First, our estimate for $`theta`$ is itself a probability distribution: $`f(theta|D)`$. Translating this notation a bit, our posterior distribution is a function that produces values between 0 and 1 for each value of $`theta,`$ _conditioned_ on collected data $`D`$. This means that questions such as "what is the probability that $`theta`$ is between 3 and 8?" can be calculated directly:
```math
P(3 <= theta <= 8|D) = cases(
  sum_(theta=3)^8 f(theta|D) "if" theta "takes discrete values,",
  integral_3^8 f(theta|D) dif theta "if" theta "is continuous".
)
```

Second, Bayes' Theorem requires us to represent what we think we already know about $`theta`$, using a prior distribution $`P(theta)`$. It's rare that we start from a state of pure ignorance about the processes we're interested in. We often have existing research or knowledge to draw upon, and this work can help us establish reasonable assumptions for the values we think $`theta`$ could take. Philosophically, I don't think it's strictly necessary for a prior distribution to reflect one's absolute state of belief about the world. Instead, choices about prior distribuitions allow us to bring more/less informed (or skeptical) perspectives into our analyses in a way that's transparent.

Third, our understanding of $`theta`$ is a reconciliation between our _prior beliefs_ about $`theta`$ and what is _likely_ true about the world, given the data we have. At least for me, this is an appealing way of thinking about the task of inference. When we talk casually about learning, we usually have a notion of experience that's cumulative. Through study or practice, one might improve (or inadvertently, worsen) performance on a task or in their understanding of a topic. We're also used to assuming some level of rationality between different actors. That is, if people with different prior beliefs are presented with the same information their understandings should eventually converge. Bayesian inference has the quality of embracing the sequential accumulation of data and convergence of beliefs. As we'll see, today's posterior distribution can just as easily be tomorrow's prior distribution.

# Returning to our example: learning from collected data

Let's assume our colleague has provided us with the reading data for the 24 students in their classroom:
<!-- Produced via rpois(24, 0.9) -->
```math
D = {X_1, X_2, ..., X_23, X_24} = {0, 0, 1, 2, 0, 1, 0, 2, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 2}.
```

Previously, we established our probability model $`cal(P)`$ for this study, and adopted the Poisson distribution as our probability measure for our sample space. In observing the class, our colleague is confident that students are choosing books individually, and completing them on their own. That is, we can be reasonably sure that student $`i`$'s habits are _independent_ of those for any other student $`j`$.

This assumption makes some of our computation much simpler. As part of our estimation, we need a _joint likelihood function_ $`L(lambda|D)`$ that measures how compatible values of $`theta`$ are with our dataset $`D`$. If our sample data is independent, $`L(lambda|D)`$ is simply the product of the Poisson probability mass function (p.m.f.) for each value of $`X_i`$.

Let's write out what we know about our statistical model at this point:
```math
X_i &attach(~, t: "i.i.d.") "Poisson"(lambda) &("data model for each" X_i) \
lambda &~ f(theta) &("prior") \
f(x|lambda) &= L(lambda|x) = frac(lambda^(x) e^(-lambda), x !) "   " &("Poisson probability mass function") \
L(lambda|D) &= product_(i = 1)^(24) f(X_i|lambda)  & ("joint likelihood function") \
            &= f(0|lambda) dot f(0|lambda) dot f(1|lambda) dot ... dot f(0|lambda) dot f(2|lambda) dot f(2|lambda) \ \
            &= frac(lambda^0 e^(-lambda), 0!) dot frac(lambda^0 e^(-lambda), 0!) dot frac(lambda^1 e^(-lambda), 1!) 
               dot ... dot frac(lambda^0 e^(-lambda), 0!) dot frac(lambda^2 e^(-lambda), 2!) dot frac(lambda^2 e^(-lambda), 2!) \ \
            &= (lambda^16 e^(-24 lambda))/96.
```
 
Ultimately, we want to use these components to apply Bayes' Theorem, and receive a posterior distribution $`f(lambda|D)`$:
```math
f(lambda|D) &= (P(lambda) L(lambda|D)) / P(D) \ \
            &= (f(lambda) (lambda^16 e^(-24 lambda))/96) / (integral_lambda (lambda^16 e^(-24 lambda))/96 dif lambda).
```

However, we still need to specify a prior distribution $`f(lambda)`$ that reflects what we think are plausible values for $`lambda`$.

---

In the above, I've attempted to concisely describe what we're doing when we use statistical methods, and what characterizes Bayesian methods in particular. I want to linger briefly on what appeals to me about the Bayesian approach. First, I appreciate how the approach emphasizes the work of writing down precisely what we're estimating and assuming. Even if certain approaches are very established (like using the Poisson distribution to model counts of events in period), we can be explicit on what exactly we're up to. Second, the approach requires us to think about our estimates and assumptions as _distributions._ It's not always possible to define and observe the entirety of a population of interest. We're often working with the data that we have, rather than the data we'd like. For brief moments, there might be "true" parameter values at the population level for an outcome of interest, but the world is constantly moving. In light of this, it _feels_ better to me to focus on what's _plausible_ (or not) for a parameter's value, given the data that we have in the moment. Lastly, I think it's extremely useful that the approach explicitly acknowledges that we (humans) possess prior beliefs before approaching a dataset. These beliefs ought to be transparent and encoded into the model we're constructing. Sometimes these beliefs are "strong", reflecting particular hypotheses that stem from theoretical knowledge or previous empirical studies. Alternatively, sometimes we merely want to _constrain_ the range of parameters to reflect our awareness of what's possible to occur within a physical system. Further, if we have data arriving periodically, we should be able to rationally update our understanding in light of what we already know.

[^1]: An 'experiment' is...
[^2]: The set of events $`cal(F)`$ must be what's referred to as a $`sigma`$-algebra, and the probability measure $`P`$ must be countably additive (that is, $`P(A union B) = P(A) + P(B)`$ for all disjoint events $`A, B subset cal(F)`$).

<style>
  h1, h2 {
    font-size: 1.2em;
  }
</style>