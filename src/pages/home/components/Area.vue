<template>
  <div class="panel">
    <ez-title>User Area</ez-title>
    <ez-charts
      height="534px"
      :options="options"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import colors from '@/components/EzCharts/helpers/colors'

const chartData = [0.285, 0.309, 0.394, 0.211, 0.187, 0.194, 0.172, 0.193, 0.162, 0.155]

export default {
  name: 'Area',
  data () {
    return {
      options: {
        grid: {
          top: 20
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter (params) {
            const param = params[0]
            return `${param.marker}${param.name}: ${_.round(param.value * 100, 2)}%`
          }
        },
        legend: {
          show: false
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter (value) {
              return _.round(value * 100, 2) + '%'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan', 'Hangzhou', 'Xian', 'Nanjing']
        },
        series: [
          {
            type: 'bar',
            barWidth: 24,
            barCategoryGap: '10',
            data: chartData.map((item, index) => {
              return { value: item, itemStyle: { color: colors[index] } }
            })
          }
        ]
      }
    }
  }
}
</script>
