/**
 * page 模版快速生成脚本,执行命令 npm run page `文件名`
 */

const fs = require('fs')
let dirName = process.argv[2]
let moduleName = null

/**
 * 判断是否拥有子模块
 */
const dirs = dirName.split('/')
dirName = dirs[dirs.length - 1]

if (dirs.length > 1) {
  moduleName = dirs.slice(0, -1).join('/')
}

console.log(moduleName)

/**
 * 未传入页面名称则退出
 */
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run page dirName')
  process.exit(0)
}

// 页面模板 **.vue
const pageTep =
`<template>
  <div class="${dirName}-page">

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: '${dirName}',

  data () {
    return {}
  },

  computed: {
    ...mapState({
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
`

// scss文件模版
const scssTep = ''

// model文件模版
const modelTep =
`export default {
  name: '${dirName}',
  namespaced: true,
  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  }
}
`

// 路由模板
const routerTep =
`export default [
  {
    path: '/${dirName}',
    name: '${dirName}',
    component: () => import('./index.vue')
  }
]
`

// service页面模版
const serviceTep =
`import request from '@/utils/request'

/**
 * GET 请求
 */
export function query (params) {
  return request({
    url: '/',
    method: 'get',
    params
  })
}

/**
 * POST 请求
 */
export function post (data) {
  return request({
    url: '/',
    method: 'post',
    data
  })
}
`

/**
 * 判断是否是子模块下的页面
 * 创建文件夹 并 cd 进入文件夹目录
 */
if (moduleName) {
  if (!fs.existsSync(`./src/pages/${moduleName}`)) {
    fs.mkdirSync(`./src/pages/${moduleName}`)
  }
  fs.mkdirSync(`./src/pages/${moduleName}/${dirName}`)
  process.chdir(`./src/pages/${moduleName}/${dirName}`)
} else {
  fs.mkdirSync(`./src/pages/${dirName}`)
  process.chdir(`./src/pages/${dirName}`)
}

/**
 * 写入页面需要的文件及模板内容
 */
fs.writeFileSync('index.vue', pageTep)
fs.writeFileSync('model.js', modelTep)
fs.writeFileSync('router.js', routerTep)
fs.writeFileSync('service.js', serviceTep)
fs.writeFileSync('style.scss', scssTep)

console.log(`模版${dirName}已创建,请手动开发页面`)

process.exit(0)
