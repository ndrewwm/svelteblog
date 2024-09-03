<script>
  export let section = false;
  export let heading = "##";
  export let color = "#EFCB68";
  let title = "about";
</script>

{#if section}
  <div style="color: {color}">
    <strong>{heading} {title}</strong>
  </div>
  <br>
{/if}

<div>
  Hi there, I'm Andrew! Thanks for visiting my personal webpage. I'm a thirty-ish
  data engineer, working from the northwest USA. I use he/him/his pronouns. I have a degree in Psychology
  from the College of Idaho (a small liberal arts school), with a minor in History. After
  graduating in 2013, I moved to Ann Arbor, MI where I helped support several research units associated
  with the University of Michigan. Gradually my interests in social science broadened to
  encompass what's now referred to as "data science", as I took on roles involving data 
  management and statistical analysis.
</div>

<br>
<div>
  I'm currently working on a second degree in applied mathematics at Boise State. I'm broadly interested in
  statistical inference, survey design/analysis, data visualization, and data engineering practices that increase
  organizational capacity. 
</div>

<br>
<div>
  My previous former work experience includes:
  <ul>
    <li>working as a data warehouse developer at Boise State University</li>
    <li>serving in Boise State's Office of Institutional Research</li>
    <li>assisting with research and program evaluation in UM SSW's Child & Adolescent Data Lab</li>
    <li>managing and collecting behavioral data in social & cognitive psychology labs</li>
  </ul>

  Currently, I'm serving as a senior data engineer in the University of Colorado Boulder's 
  Office of Information Technology (OIT). My team resides with the Data & Analytics group, where
  we support 100+ automated data pipelines, multiple custom API services, and provide data warehousing
  support to campus stakeholders.

  Please feel free to reach out to discuss any opportunities! Just type 'contact' in the prompt below.
  You can also check out my resume by typing 'cv' in the prompt, or by visiting <a href="/cv">/cv</a>. 
</div>
<br>
