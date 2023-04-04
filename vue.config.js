module.exports = {
  pwa: {
    name: 'Spevník',
    themeColor: '#6b7280',
    msTileColor: '#6b7280',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      navigateFallback: 'index.html'
      // include: [
      //   'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0',
      //   /.*\.woff2$/
      // ]
    }
  }
}
