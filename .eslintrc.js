module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    NPM_PACKAGE_VERSION: true,
    GIT_COMMIT: true,
    BUILD_TIME: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
