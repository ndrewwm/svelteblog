<script>
  import { MediaQuery } from 'svelte/reactivity';
  import { Plot, AxisX, AxisY, BarX, RuleX, Text } from 'svelteplot';

  let mulligan_data = [
    {
      "num_mulligans": 0,
      "expansion": "Overall",
      "won": 0.627
    },
    {
      "num_mulligans": 1,
      "expansion": "Overall",
      "won": 0.4938
    },
    {
      "num_mulligans": 2,
      "expansion": "Overall",
      "won": 0.3293
    },
    {
      "num_mulligans": 3,
      "expansion": "Overall",
      "won": 0.1808
    },
    {
      "num_mulligans": 4,
      "expansion": "Overall",
      "won": 0
    },
    {
      "num_mulligans": 0,
      "expansion": "DFT",
      "won": 0.6181
    },
    {
      "num_mulligans": 1,
      "expansion": "DFT",
      "won": 0.4821
    },
    {
      "num_mulligans": 2,
      "expansion": "DFT",
      "won": 0.3157
    },
    {
      "num_mulligans": 3,
      "expansion": "DFT",
      "won": 0.1527
    },
    {
      "num_mulligans": 4,
      "expansion": "DFT",
      "won": 0
    },
    {
      "num_mulligans": 0,
      "expansion": "ECL",
      "won": 0.6434
    },
    {
      "num_mulligans": 1,
      "expansion": "ECL",
      "won": 0.516
    },
    {
      "num_mulligans": 2,
      "expansion": "ECL",
      "won": 0.3578
    },
    {
      "num_mulligans": 3,
      "expansion": "ECL",
      "won": 0.137
    },
    {
      "num_mulligans": 4,
      "expansion": "ECL",
      "won": 0
    },
    {
      "num_mulligans": 0,
      "expansion": "EOE",
      "won": 0.6423
    },
    {
      "num_mulligans": 1,
      "expansion": "EOE",
      "won": 0.5063
    },
    {
      "num_mulligans": 2,
      "expansion": "EOE",
      "won": 0.336
    },
    {
      "num_mulligans": 3,
      "expansion": "EOE",
      "won": 0.2143
    },
    {
      "num_mulligans": 4,
      "expansion": "EOE",
      "won": 0
    },
    {
      "num_mulligans": 0,
      "expansion": "FDN",
      "won": 0.6164
    },
    {
      "num_mulligans": 1,
      "expansion": "FDN",
      "won": 0.4844
    },
    {
      "num_mulligans": 2,
      "expansion": "FDN",
      "won": 0.3091
    },
    {
      "num_mulligans": 3,
      "expansion": "FDN",
      "won": 0.1964
    },
    {
      "num_mulligans": 4,
      "expansion": "FDN",
      "won": 0
    },
    {
      "num_mulligans": 0,
      "expansion": "TDM",
      "won": 0.6376
    },
    {
      "num_mulligans": 1,
      "expansion": "TDM",
      "won": 0.5028
    },
    {
      "num_mulligans": 2,
      "expansion": "TDM",
      "won": 0.3639
    },
    {
      "num_mulligans": 3,
      "expansion": "TDM",
      "won": 0.2
    },
    {
      "num_mulligans": 4,
      "expansion": "TDM",
      "won": 0
    }
  ];

  let overall = mulligan_data.filter((item) => item.expansion == "Overall");

  let prefersDark = $state(new MediaQuery("prefers-color-scheme: dark", false));
  let textColor = $state("#E1EFE6");
  if (prefersDark.current) {
    textColor = "#000411";
  }
</script>

<Plot 
  x={{ domain: [0, 0.7], ticks: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6], grid: true }}
  title="You get to take mulligans, but they're not free"
  subtitle="Proportion of best-of-3 games won after n-many mulligans"
>
  <AxisX title="Proportion of games won →" />
  <AxisY title="↓ Mulligans taken" />
  <RuleX data={[0]} />
  <BarX data={overall} y="num_mulligans" x="won" />
  <Text 
    data={overall}
    y="num_mulligans"
    x="won"
    text={(d) => d.num_mulligans !== 4 ? d.won.toFixed(3) : ""}
    textAnchor="end"
    dx={-6}
    fill={textColor}
  />
  {#snippet footer()}
    <p class="caption">
      Results reflect N=458,272 best-of-3 games from EOE, ECL, TDM, DFT, and FDN.
      Data sourced from 17lands.com on 2026-08-01.
    </p>
  {/snippet}
</Plot>

<style>
  .caption {
    font-size: smaller;
  }
</style>
