module.exports = {
  pwa: {
    name: 'Spevník',
    themeColor: '#6b7280',
    msTileColor: '#6b7280',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      navigateFallback: 'index.html'
    }
  }
}
