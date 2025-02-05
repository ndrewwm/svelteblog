---
title: "jobs where you control 20% of GDP and you test in prod"
description: This is bad
author: "Andrew Moore"
date: "2025-02-04"
draft: false
categories: []
slug: treasury-testing-in-prod
format:
  gfm:
    variant: +yaml_metadata_block
---

For the past few days, I've been watching the alarming news surrounding what's been happening as people affiliated with "DOGE" have gained access to US Treasury Department IT systems. Just writing out a description of what I'm reading makes me feel like a certified crank. At 1am today, [Wired](https://www.wired.com/story/elon-musk-associate-bfs-federal-payment-system/) reported this:

> A 25-year-old engineer named Marko Elez, who previously worked for two Elon Musk companies, has direct access to Treasury Department systems responsible for nearly all payments made by the US government, three sources tell WIRED.
> 
> Two of those sources say that Elez’s privileges include the ability not just to read but to write code on two of the most sensitive systems in the US government: the Payment Automation Manager and Secure Payment System at the Bureau of the Fiscal Service (BFS). Housed on a secure mainframe, these systems control, on a granular level, government payments that in their totality amount to more than a fifth of the US economy.

Earlier last week, the seniormost nonpolitical official at the US Treasury, David Lebryk, appears to have been forced out after pushing back against Musk/"DOGE"'s efforts to gain access to Treasury systems. Something like [88% or more](https://prospect.org/economy/2025-02-03-filled-with-unmitigated-terror-musk-treasury-tankus-qa/) of the payments issued by the federal government flow through these BFS systems, and it appears that Elez/DOGE is actively working to [build backdoors](https://talkingpointsmemo.com/edblog/musk-cronies-dive-into-treasury-dept-payments-code-base) that could let Musk block payments. Again, these systems are what enable social security payments to flow smoothly to retirees, for service agencies (such as hospitals!) to receive the money needed to pay their staff, etc. Literally 20% of the US economy depends on this process being reliable and stable.

The idea of any organization turning over their most mission-critical aspects of their codebase to someone who'd never seen it the week prior is insane. Letting them push changes to this codebase, over the course of 3 days without oversight, is ludicrous. In IT parlance, this is jokingly referred to as "testing in prod(uction)", because it's a terrible idea, and is bound to result in failures. It is horrifying that this is being allowed to happen to some of the most important IT infrastructure in the US. Worse, this is being done by actors unaccountable to US citizens. Access to these systems implies the ability to query and view the most sensitive kinds of data the government handles. I've seen nothing in the past 5 days that indicate that Elez or any of the other "DOGE" kids have been cleared or vetted by anyone other than Musk (or a surrogate).

It's been noted frequently, but **Musk is not an elected official**, and "DOGE" is not a real arm of the US government. We're being asked to accept what he's doing because we're told Trump says it's okay. We're being forced to gamble that these kids, who are moving fast and disregarding normal boundaries and safeguards, are doing all of this in a way that protects people from harm. Any reasonable perspective would tell you this is a terrible bet.
