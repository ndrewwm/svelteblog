---
title: Notes from Coalesce 2024
description: |
  It was good! Here are some of the things I learned, and am thinking about.
author: Andrew Moore
date: "10/17/2024"
categories: ["dbt", "data engineering", "analytics engineering", "data", "conferences"]
---

If you've talked shop with me over the past few months, you've probably heard me mention that I've been working on standing up dbt at work. In relation to these efforts, I went to Coalesce 2024 this year with one of my colleagues from Denver. This was the first professional conference I've attended since 2018 (possibly earlier), and I'm very grateful to my organization for enabling the two of us to go. Given I work remotely, it was great to be able to share conversations and meals outside of MS Teams.

So, why go to Coalesce? We're very early in our rollout of *dbt core*, a free/open source framework for transforming, testing, and documenting data within a data warehouse environment. Coalesce is hosted by dbtLabs (the maintainers of dbt core, and the related cloud product, *dbt Cloud*); it's a 4-day conference where new features are announced and practitioners are able to give/attend talks about how organizations are using dbt. Given that we're on relatively novel terrain, I've been interested in talking to other teams/users at all stages of adoption. Here are a few of my broad observations, drawn from a mix of presentations and personal conversations:

## Hybrid approaches (i.e., organizations using both core and cloud) were much more common than I expected.

I first learned about dbt between 2017 and 2019, when I was still a data analyst. The framework's guiding principles resonated strongly with me, but I increasingly encountered rumors that the cloud service is very expensive. Coming into the conference, I assumed we'd encounter teams/organizations in basically two camps: those using dbt core exclusively, and those that had made the leap to dbt cloud. Perhaps we'd find a few organizations in the middle that were in transition, but I expected this group to be pretty outnumbered.

Instead, I'm not sure if we actually encountered any shops (like us) working exclusively with dbt core. Perhaps this isn't that surprising, given that Coalesce is an industry conference-- most of the attendees are likely to be fairly committed to the framework. But, it felt notable that most of the groups we encountered didn't have every member of their team working in dbt Cloud. The picture I got from conversations and presentations on migrations from core to cloud was that dbt Cloud tends to be more useful as a standardized interface for analysts, i.e., folks that haven't spent as much time working with CLIs but are able to write SQL. This leads into my second observation, which is that...

## It seems like dbt usually takes root in an organization's data engineering team.

Prior to 2020, a common narrative I encountered in blog posts outlines the story of a "data team of one", tasked with building out an organization's data platform with dbt. As a data analyst, I could imagine how dbt could make it possible for small teams to achieve a lot. However, jumping forward to 2024, I think the experience at my current organization might be more typical (at least based off responses from the attendees we encountered). Data engineering teams are tasked with maintaining/orchestrating pipelines that generate the organization's analytical products. It makes sense why dbt is especially appealing to these teams; a data warehouse can be used for staging and delivering materials to the DE team's customers, and the organization can use the warehouse as both a mounting point for governance, and as an access point for consumers (or BI tools). For a DE team, a crucial concern is the management and deployment of code used to build and populate tables/views/etc. within an environment. A dbt project is a good way to tackle this using (mostly) SQL, and it provides an integrated framework for testing and documentation. A team can certainly do all of their work in (e.g.) Python/Pandas, but avoiding boilerplate code and DDL generation is really nice. There's always going to be a need for code that does some work outside of the warehouse, but it's good to consolidate where you can. 

Additionally, given that the business logic is in SQL, there's a higher likelihood that other organization members outside the DE team can contribute. This has been part of my rationale for encouraging my team's adoption of dbt. Comfort with Python isn't a guarantee for staff outside my team, but working knowledge of SQL is already present or is achievable with some training. Additionally, a data warehouse ensures a common field in terms of being able to actually execute segments of a project's codebase (such as particular steps in a pipeline that an analyst whose business logic an analyst could contribute to). From my perspective as a data engineer, this is exciting-- it means more brains can be put to work on refining and delivering common resources that my organization needs. This is the silo-breaking that feels like part of what dbt has to offer. But, this isn't something that's inherent to adopting the tool. Conversations and some roundtables I observed appear to point to another common trait among the organizations that have adopted dbt.

## Unless you're actually starting from a "data team of one", collaborating across teams involves culture change.

I had several experiences relayed to me I want to dive into, but maybe it's helpful to foreground a common thread: there's frequently a tension between process and the "freedom" to iterate. I think what I'm referring to is broadly legible to anyone who's been a data analyst; so much of delivering a report or set of tables to support an analysis involves tweaking, checking, and rechecking a bunch of queries (or chains of `dplyr` verbs). You're often engaged in a feedback loop with a colleague or stakeholder that's usually not in the weeds with you on developing the code. During this kind of development, it might not be clear what the "final" version of an analysis will be. It might be that part or even a substantial chunk of the query/script won't even be used. (Additionally, it's likely you're doing all of this under a tight deadline.) Given this picture, it's understandable why the visualization or table that's *presented* might feel like the value an analyst creates for their organization. Phrased differently, organizations (for various reasons) don't always recognize that the recipe to create a table or visualization is a concrete work-product of their analysts.

To use an example that was shared from another team we met, they had the experience of having to recover hundreds of worksheets from a deactivated Snowflake account, because this was the only way that a former staff member had maintained their work. It turned out that some of those worksheets had contained logic for some of the organization's reporting that only this staff member had been maintaining. It's easy to take this example and problem-solve through it; perhaps you're inclined to say, "Andrew, this organization was just missing some guardrails, this couldn't happen to us". We should avoid this temptation, but it's also not why I'm sharing the story now. I think it demonstrates two things clearly: code is part of an organization's assets, and that there are tangible costs that arise from avoiding structure.

- Roundtable discussion, senior analytics engineer noted that some data analysts are quick to grasp the value that dbt offers as a framework. These folks are good early adopters, and can become self-sufficient collaborators without much assistance. In other cases, it's not 

- Story from a firm talking about an analyst who did *all* their work in Snowflake worksheets. The engineering team later had to dig into Snowflake to retrieve a bunch of queries/analyses that turned out to be important for a part of his organization's reporting.
  - Takeaway: analysts often see the *delivery* of their results (e.g. as cells in a table, or strokes in a visualization) as the representation of their value to the organization, but sometimes fail to connect this aspect to the *process* of generating said results.
  - Some attitudes: "It's not important how a query is *written*, if it generates what I'm being asked for."
  - "Not important how a query is *written*" often occurs in tandem with "It's not important where a query is *stored*, as long as *I* can get back to it."

- Riot Games: working to gradually ensure people aren't maintaining all their work in Notebooks, and that ELT is done via dbt. 

- There's still a tension between best practices wrt software engineering and analysts' desires to deliver results quickly.


# Talks

- overall impressions
- what was I hoping to get out of things?
  - discussion with other practitioners, at all steps of adoption
  - insight into best practices w.r.t. access control
  - onboarding collaborators at different skill levels
  - how to manage/scale a dbt project (or projects) as it grows
  - best practice recommendations on observing tracking usage
- "dbt @ *firm*" style talks


## 10/8

**Keynote.**

**dbt @ Riot Games**

**dbt @ CNN**

**dbt @ Carta: lineage and grants**

**Litedash:
