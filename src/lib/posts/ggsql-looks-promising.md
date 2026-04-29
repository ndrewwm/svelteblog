---
title: "ggsql looks promising"
author: Andrew Moore
date: "2026-04-29"
slug: ggsql-looks-promising
description: >
  Posit has unveiled `ggsql`, a grammar-of-graphics tool that complements SQL. It's very new (currently in alpha), but seems like a cool direction for interactive querying. 
draft: false
categories: [software, dataviz]
preview: null
format:
  gfm:
    variant: +yaml_metadata_block
---

Posit (FKA RStudio) has unveiled a new software tool: [ggsql](https://ggsql.org/). It's a grammar-of-graphics approach to data visualization but  does so by extending the capabilities of SQL. After you've written a standard `select` query, you add a `visualize/visualise` clause, followed by layers (created with `draw` statements). Here's a comparison of the new ggsql syntax (currently in alpha v0.3.0):

```sql
select *
from palmerpenguins
where island = 'Biscoe'

visualise bill_len as x, bill_dep as y, body_mass as fill
draw point
place rule 
  setting slope => 0.4, y => -1
scale binned fill
label
  title => 'Relationship between bill dimensions in 3 species of penguins',
  x => 'Bill length (mm)',
  y => 'Bill depth (mm)'
```

vs. that of R (dplyr/ggplot2):

```r
palmerpenguins::penguins |>
  filter(island == "Biscoe") |>
  ggplot(aes(x = bill_length_mm, y = bill_depth_mm, color = body_mass_g)) +
    geom_point() +
    geom_abline(aes(slope = 0.4, intercept = -1)) +
    scale_color_binned() +
    labs(
      title = "Relationship between bill dimensions in 3 species of penguins",
      x = "Bill length (mm)",
      y = "Bill depth (mm)"
    )
```

The resemblence between the two is pleasantly familiar. This alone is an impressive design achievement. But I think the declarative nature of SQL really shines here: we `draw` new layers, `place` annotations on our figures and `facet` them by a relevant grouping. While I learned how to compose data visualizations using `ggplot2` and `dplyr`, these days it's not as common that I find myself in an R session with these tools at my fingertips. Instead, the bulk of my time is spent working across different databases, i.e., writing SQL. I often find myself running a query and wish I could quickly look at a time series or density to make sure nothing looks funny. Being able to do this by tacking a couple lines onto the query is really handy.

```sql
-- If no 'y' is specified, ggsql performs a count
select some_dt from my_table
visualize some_dt as x
draw bar
```

These kinds of quick interactive plots are a normal part of EDA. Even for someone who's not summarizing data as frequently (like me), quick visual inspections are helpful for getting context on a table or the results of a transformation. Being able to do this minus the cognitive costs of porting my "micro-analysis" into an R session is quite promising.

So, where do things go from here? It seems like Posit is developing a VS Code/Positron extensions that will let users run `.gsql` files using different database connections and target/output destinations. Currently, it appears that ggsql can only play with a few backends (such as DuckDB or SQLite-- but this software is very young; new options are bound to appear). I'm looking forward to playing around with it as the tooling improves. Hopefully cloud database providers will also take notice as well-- it'd be nice if I could write up visualizations natively within e.g., Snowsight.
