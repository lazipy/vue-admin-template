/**
 * 利用 webpack 的 require.context 方法加载每个模块下的 router
 * 组合成统一管理的 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

/**
 * 动态获取路由并组合
 */
let routes = []

const files = require.context('./pages', true, /router\.js/)
files.keys().forEach(key => {
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = [...routes, ...(files(key).default || files(key))]
})

// 实例化路由对象
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 钩子函数
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

// @ts-ignore
export default router
