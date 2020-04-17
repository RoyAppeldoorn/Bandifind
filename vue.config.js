module.exports = {
  publicPath: '/',
  devServer: {
    https: true
  },
  pwa: {
    name: 'Bandifind',
    themeColor: '#BB86FC',
    iconPaths: {
      favicon16: 'img/icons/favicon-16x16.ico',
      favicon32: 'img/icons/favicon-32x32.ico',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png'
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#BB86FC',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  },
  transpileDependencies: ['vuetify']
}
