<script>
  import Banner from "$lib/home/Banner.svelte";
  import Head from "$lib/components/Head.svelte";
</script>

<Head title="A primer for Linear Regression" />
<Banner sub="A primer for Linear Regression" />

<br>
<p>
  In 2021, I wrote a series of blog posts that cover the basics of linear regression.
  I've moved the series to this part of the site because each of the posts are rather long, and
  the topic/content is a bit different from my usual blog posts.
  My partner was in the midst of completing her Masters program, and I was helping fill in some gaps
  on how to use the R language, and support on interpreting and performing regression analysis. The 
  goal of this 3-part series is to provide the reader with a basic understanding of what linear
  regression <em>is</em>, how to fit linear regressions using R, and check some basic assessments
  of statistical fit. I was inspired by the approach that Gelman & Hill use in their textbook (among
  other resources I mention in the series), but wanted to provide a distilled version that I could pass
  on to a colleague that's needing an overview.
</p>
<br>

<center>
  <ul>
    <li><a href="/projects/linear-regression-primer/1">Part 1</a>: Ordinary Least Squares (OLS)</li>
    <br>
    <li><a href="/projects/linear-regression-primer/2">Part 2</a>: Fitting a model, checking its fit</li>
    <br>
    <li><a href="/projects/linear-regression-primer/3">Part 3</a>: Multiple regression and model comparison</li>
  </ul>
</center>

<style>
  li {
    list-style-type: none;
  }
</style>