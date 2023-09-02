const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const REACT = isPackageExists('react')

module.exports = {
  extends: [
    '@antfu',
    TS && './typescript',
    REACT && './react',
  ].filter(Boolean),

  rules: {
    'vue/prefer-separate-static-class': 'off',

    // basic
    'newline-after-var': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // antfu
    'antfu/if-newline': 'off',
  },
}
