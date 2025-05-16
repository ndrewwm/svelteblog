<svelte:head>
  <title>ndrewwm | about</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Andrew Moore | About"/>
  <meta name="description" content="About me." />
</svelte:head>

<header>
  <h1><a href="/">andrew w. moore</a> | about</h1>
</header>

<main>
  <section>
    <h2>Hi, I'm Andrew.</h2>
    <p>
      Thanks for visiting my personal webpage. I'm a thirty-ish
      data engineer, working from the northwest USA. I use he/him/his pronouns. I have a degree in Psychology
      from the College of Idaho (a small liberal arts school), with a minor in History. After
      graduating in 2013, I moved to Ann Arbor, MI where I helped support several research units associated
      with the University of Michigan. Gradually my interests in social science broadened to
      encompass what's now referred to as "data science", as I took on roles involving data 
      management and statistical analysis.
    </p>
  </section>

  <section class="mt-2">
    <p>
      Currently, I'm serving as a senior data engineer in the University of Colorado Boulder's 
      Office of Information Technology (OIT). My team resides with the Data & Analytics group, where
      we support 100+ automated data pipelines, multiple API services, and provide data warehousing
      support to campus stakeholders.
    </p>
  </section>

  <section class="mt-2">
    <p>
      If it's of interest, my CV is located <a href="/cv">here.</a>
      To keep up with me, you can follow me on <a href="https://bsky.app/profile/ndrewwm.com">Bluesky</a> or <a href="https://github.com/ndrewwm">GitHub</a>.
    </p>
  </section>

  <section class="mt-4">
    <h2>Colophon</h2>
    <p>
      I built this website from scratch using <a href="https://kit.svelte.dev/">SvelteKit</a>. 
      Hosting is provided via Vercel.
      I'm using <a href="https://bulma.io">Bulma</a> as my CSS framework.
      The source code for this website can be found <a href="https://github.com/ndrewwm/svelteblog">here.</a>
    </p>
    <p class="mt-2">

    </p>
    <p class="mt-2">
      I do not use LLMs or AI tools to write, research, or publish anything on this website.
      Photos, graphics (and data visualizations), and illustrations are my own work, unless otherwise noted.
    </p>
  </section>

  <section class="mt-4">
    <h2>Contact</h2>
    You can reach me at <a href="mailto:hello@ndrewwm.com">hello@ndrewwm.com</a>.
  </section>
</main>

<footer class="mt-4 is-size-4">
  <a href="/">home</a> |
  <a href="/now">now</a>
  <!-- <a href="/uses">uses</a> | -->
  <!-- <a href="/blogroll">blogroll</a> -->
</footer>

<style>
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header, footer {
    font-family: "Micro 5";
  }

  h1 {
    font-size: 40px;
  }
  
  h2 {
    font-size: 25px;
  }
</style>
