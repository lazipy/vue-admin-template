<template>
  <div class="panel">
    <ez-title>User activity</ez-title>
    <ez-charts
      height="420px"
      :options="options"
    />
  </div>
</template>

<script>
var base = +new Date(1968, 9, 3)
var oneDay = 24 * 3600 * 1000
var date = []

var data = [Math.random() * 300]

for (var i = 1; i < 20; i++) {
  var now = new Date(base += oneDay)
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
}

export default {
  name: 'Activity',
  data () {
    return {
      options: {
        grid: {
          top: 20
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        series: [
          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1, color: 'rgb(255, 70, 131)'
                }],
                global: false
              },
              opacity: 0.3
            },
            data: data
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .panel {
    margin-top: 12px;
  }
</style>
