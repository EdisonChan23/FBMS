module.exports = {
  // 打包名称
  
  // outputDir: 'shop',
  // publicPath: './', // publicPath: '/shop/'
  // productionSourceMap: false,
  // chainWebpack：通过链式编程的形式修改webpack配置
  // configureWebpack：通过操作对象的形式修改webpack配置
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')

      // config.plugin('html').tap(args => {
      //   args[0].isProd = false
      //   return args
      // })
    })
  },
}
