const webpack = require('webpack')

require('events').EventEmitter.defaultMaxListeners = 50

function defineClear (content) {
  return JSON.stringify(content.replace(/\n/g, '')).trim()
}

function cmdOutput (cmd) {
  let result
  try {
    result = require('child_process')
      .execSync(cmd)
      .toString()
  } catch (e) {
    result = 'unknown'
  }
  return defineClear(result) || 'unknown'
}

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
    plugins: [
      new webpack.DefinePlugin({
        NPM_PACKAGE_VERSION: defineClear(process.env.npm_package_version) || 'unknown',
        GIT_COMMIT: cmdOutput('git rev-parse --short HEAD'),
        BUILD_TIME: cmdOutput('date +%s')
      })
    ],
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
