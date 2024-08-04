<script>
  import { LayerCake, Svg } from 'layercake';
  import { scaleBand} from 'd3-scale';

  import Bar from './Bar.svelte';
  import AxisX from './AxisX.svelte';
  import AxisY from './AxisY.svelte';

  const xKey = "plays";
  const yKey = "track_name";

  export let data;
  let tracks = data.rows.slice(1, 30);
  let names = tracks.map((d) => d.track_name).slice(1, 30);
</script>

<h1>Top tracks, past 30 days</h1>
<div class="chart-container">
  <LayerCake
    padding={{ bottom: 40, left: 150 }}
    x={xKey}
    y={yKey}
    xDomain={[0, null]}

    yScale={scaleBand().paddingInner(0.1).round(true)}
    yDomain={names}
    data={tracks}
  >
    <Svg>
      <AxisX tickMarks baseline snapLabels />
      <AxisY tickMarks gridlines={false} />
      <Bar fill={"#E1EFE6"} />
    </Svg>
  </LayerCake>
</div>

<style>
  .chart-container {
    width: 100%;
    height: 1300px;
    padding-left: 20px;
  }
</style>
