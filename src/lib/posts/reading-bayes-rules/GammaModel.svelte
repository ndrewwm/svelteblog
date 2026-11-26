<script lang="ts">
  import { MediaQuery } from 'svelte/reactivity';
  import jStat from 'jstat';
  import { Plot, Line, Text } from 'svelteplot';
  import { range } from 'd3';

  let primaryColor = "#EFCB68";

  let alpha = 22.25;
  let beta = 15;
  let S = 29;
  let n = 24;

  let prior = jStat.gamma(alpha, 1/beta);
  let likelihood = jStat.gamma(S + 1, 1/n);
  let posterior = jStat.gamma(alpha + S, 1/(beta + n));

  let lambda = range(0, 3, 0.01);
  let data = lambda.map((l) => {
    return { 
      x: l,
      pr: prior.pdf(l),
      li: likelihood.pdf(l),
      po: posterior.pdf(l),
    }
  });
  console.log(data);
</script>

<Plot 
  x={{ label: "λ →", grid: true, domain: [0, 3], interval: 0.5 }}
  y={{ axis: false, grid: false }}
>
  <Line data={data} x="x" y="pr" strokeDasharray="3,4" />
  <Text x={2.1} y={0.4} text="prior" />
  <Line data={data} x="x" y="li" />
  <Text x={0.82} y={0.8} text="likelihood" />
  <Line data={data} x="x" y="po" strokeWidth={2.5} stroke={primaryColor} />
  <Text x={1.6} y={1.6} text="posterior" stroke={primaryColor} fill={primaryColor} fontSize={15} />
</Plot>
