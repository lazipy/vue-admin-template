import Vue from 'vue'

// 自动加载目录下的 .js 结尾的文件
const files = require.context('./', true, /\.vue$/)

files.keys().forEach(key => {
  const componentConfig = files(key)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const ctrl = componentConfig.default || componentConfig
  Vue.component(ctrl.name, ctrl)
})
