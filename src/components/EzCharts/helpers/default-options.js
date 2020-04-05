/**
 * echarts 默认的配置
 */
export default {
  title: {
    x: 20,
    textStyle: {
      fontSize: 15,
      fontFamily: 'microsoft yahei',
      color: '#4a86c5'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    borderColor: '#eee',
    containLabel: true,
    left: '2%',
    right: '2%',
    top: 60,
    bottom: '5%'
  },
  toolbox: {
    show: false
  }
}
