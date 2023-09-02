const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const REACT = isPackageExists('react')
const VUE = isPackageExists('vue')

module.exports = {
  extends: [
    '@antfu',
    './rules/antfu',
    TS && './rules/typescript',
    REACT && './rules/react',
    VUE && './rules/vue',
  ].filter(Boolean),

  rules: {
    'newline-after-var': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
  },
}
