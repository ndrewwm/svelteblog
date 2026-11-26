<script lang="ts">
  import jStat from 'jstat';
  import { Plot, RuleX, Line, Text } from 'svelteplot';
  import { range } from 'd3';

  function buildDensity(alpha: number, beta: number, max: number) {
    let prior = jStat.gamma(alpha, 1/beta);
    let lambda: number[] = range(0, max, 0.01);
    let f_lambda = lambda.map((lambda) => prior.pdf(lambda));
    return lambda.map((element, index) => ({ x: element, y: f_lambda[index] }));
  }
  
  let { a, b, max }: { a: number, b: number, max: number } = $props();
  let isPressed = $state(false);

  let [alpha, beta] = [22.25, 15.0];
  let actual = $derived(buildDensity(alpha, beta, Math.max(a/b + 3, 4)));
  let inputs = $derived(buildDensity(a, b, Math.max(a/b + 3, 4)));
  let prior = $derived(jStat.gamma(a, 1/b));

  let sliderMax = 100;
</script>

<label for="alpha">α: {a.toFixed(2)}</label>
<input 
  type="range" 
  id="alpha" 
  name="alpha"
  min="1.0"
  max={sliderMax}
  step="0.01"
  bind:value={a}
  onmousedown={() => isPressed = true}
  onmouseup={() => isPressed = false}
>

<label class="ml-1" for="volume">β: {b.toFixed(2)}</label>
<input 
  type="range"
  id="beta" 
  name="beta" 
  min="1.0" 
  max={sliderMax}
  step="0.01"
  bind:value={b}
  onmousedown={() => isPressed = true}
  onmouseup={() => isPressed = false}
>

<br>

<p>
  E(λ) = <sup>α</sup>&frasl;<sub>β</sub> = {(a/b).toFixed(1)},
  P(λ ≤ 1) = {(prior.cdf(1)).toFixed(2)},
  P(1 ≤ λ ≤ 2) = {(prior.cdf(2) - prior.cdf(1)).toFixed(2)}
</p>

<Plot 
  x={{ label: "λ →", grid: true }} 
  y={{ label: "↑ f(λ)", axis: false, grid: false }}
>
  {#if isPressed}
    <RuleX x={alpha/beta} y1={0} y2={jStat.gamma.pdf(alpha/beta, alpha, 1/beta)} strokeDasharray="3,4" />
    <RuleX x={a/b} y1={0} y2={jStat.gamma.pdf(a/b, a, 1/b)} />
  {/if}
  <Line data={actual} x="x" y="y" strokeDasharray="6,4" />
  <Line data={inputs} x="x" y="y"  />
  <Text x={2.15} y={0.9} text={"Gamma(22.25, 15)"} />
</Plot>
