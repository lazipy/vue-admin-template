const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },

  configureWebpack: config => {
  },

  // 向预处理器 Loader 传递选项
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/element-variables.scss";'
      }
    }
  },

  // 插件的预设
  pluginOptions: {
    mock: { entry: './mock/index.js', debug: false }
  }
}
