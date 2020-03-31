/**
 * 利用 webpack 的 require.context 方法加载每个模块下的 model
 * 组合成统一管理的 store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLoadingPlugin from '@/utils/vuex-loading'

Vue.use(Vuex)

/**
 * 动态获取状态模块并组合
 */
const modules = {}

const files = require.context('./pages', true, /model\.js/)
files.keys().forEach(key => {
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  const model = files(key).default || files(key)

  // 通过 model 中的 name 字段来对命名空间进行命名
  modules[model.name] = model
})

export default new Vuex.Store({
  plugins: [createLoadingPlugin()],
  modules
})
