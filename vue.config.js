module.exports = {
  css: undefined,

  baseUrl: '/collage-static/',
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      // config.plugin.push();
    }
  }
}