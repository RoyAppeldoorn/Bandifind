module.exports = {
  publicPath: '/',
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  },
  transpileDependencies: ['vuetify']
}
