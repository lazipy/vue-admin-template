/**
 * component 模版快速生成脚本,执行命令 npm run component `文件名`
 */

const fs = require('fs')
const dirName = process.argv[2]

/**
 * 将文件名称大写
 * @example ez-form
 * @param {文件名称} str
 * @return EzForm
 */
function titleCase (str) {
  const array = str.toLowerCase().split('-')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length)
  }
  const string = array.join('')
  return string
}

/**
 * 未传入组件名称则退出
 */
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run component ez-form')
  process.exit(0)
}

// 组件模板 **.vue
const pageTep =
`<template>
  <div class="${dirName}">

  </div>
</template>

<script>
export default {
  name: '${titleCase(dirName)}',

  props: {},

  data () {
    return {}
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
`

// scss文件模版
const scssTep = ''

/**
 * 创建文件夹 并 cd 进入文件夹目录
 */
fs.mkdirSync(`./src/components/${titleCase(dirName)}`)
process.chdir(`./src/components/${titleCase(dirName)}`) // cd $1

/**
 * 写入组件需要的文件及模板内容
 */
fs.writeFileSync('index.vue', pageTep)
fs.writeFileSync('style.scss', scssTep)

console.log(`模版${dirName}已创建,请手动封装组件`)

process.exit(0)
