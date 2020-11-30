module.exports = {
  lintOnSave: false,
  assetsDir: '_widget',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader'
        }
      ]
    }
  }
}
