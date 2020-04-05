<template>
  <div class="panel">
    <ez-title>User Channel</ez-title>
    <ez-charts
      height="400px"
      :options="options"
    />
  </div>
</template>

<script>
import _ from 'lodash'

const chartData = [
  { name: 'Baidu Phone Helpert', value: 0.1514 },
  { name: '360 Phone Helper', value: 0.0998 },
  { name: 'Application Treasure', value: 0.2647 },
  { name: 'Huawei Application Market', value: 0.1297 },
  { name: 'Xiaomi Application Market', value: 0.0765 },
  { name: 'Pea Pods', value: 0.0252 },
  { name: 'Anzhi Market', value: 0.0148 },
  { name: 'MM Mall', value: 0.0152 },
  { name: 'Vivo Application Market', value: 0.038 },
  { name: 'OPPO Application Market', value: 0.1063 },
  { name: 'Other Application Market', value: 0.0782 }
]

export default {
  name: 'Channel',
  data () {
    return {
      options: {
        legend: {
          bottom: 10,
          icon: 'circle',
          formatter (name) {
            const value = chartData.find(item => item.name === name).value
            const tips = name + ' ' + _.round(value * 100, 2) + '%'
            return `{FixedWidth|${tips}}`
          },
          textStyle: {
            rich: {
              FixedWidth: {
                width: 190
              }
            }
          }
        },
        xAxis: {
          show: false
        },
        series: [
          {
            type: 'pie',
            radius: ['32%', '47%'],
            center: ['50%', '30%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold',
                formatter (params) {
                  return _.round(params.data.value * 100, 2) + '%'
                }
              }
            },
            labelLine: {
              show: false
            },
            data: chartData
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
