// https://github.com/antfu/eslint-config

const { VUE } = require('./_shared')

/** @type {[import("@antfu/eslint-config").OptionsConfig, import('@antfu/eslint-config').FlatESLintConfigItem]} */
module.exports = [
  {
    vue: VUE,
  },
  {
    rules: {
      'antfu/if-newline': 'off',
      'antfu/consistent-list-newline': 'off',
    },
  },
]
