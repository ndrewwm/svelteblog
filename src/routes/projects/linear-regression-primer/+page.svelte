<script>
  import Banner from "$lib/util/Banner.svelte";
  import Head from "$lib/components/Head.svelte";
</script>

<Head title="A primer for linear regression" />
<Banner title="A primer for linear regression" />

<p>
  In 2021, I wrote a series of blog posts that cover the basics of linear regression.
  My partner was in the midst of completing her Masters program, and I was providing some
  help to get her started in a course using quantitative methods. The 
  goal of this 3-part series is to provide the reader with a basic understanding of what linear
  regression is, how to fit linear regressions using R, and check some basic assessments
  of statistical fit. I was inspired by the approach that Gelman & Hill use in their textbook (among
  other resources I mention), but wanted to provide a distilled version that I could pass
  on to a colleague that's needing an overview. I've moved the series to this part of the site because each section is lengthy, and
  the content is a bit different from my usual blog posts.
</p>

<center>
  <table>
    <tbody>
      <tr>
        <td>Part 1</td>
        <td><a href="/projects/linear-regression-primer/1">Ordinary Least Squares</a></td>
      </tr>
      <tr>
        <td>Part 2</td>
        <td><a href="/projects/linear-regression-primer/2">Fitting a model using R</a></td>
      </tr>
      <tr>
        <td>Part 3</td>
        <td><a href="/projects/linear-regression-primer/3">Multiple regression and model comparison</a></td>
      </tr>
    </tbody>
  </table>
</center>

<style>
  table {
    border: none;
  }
</style>
