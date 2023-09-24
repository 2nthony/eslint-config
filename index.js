const { default: antfu } = require('@antfu/eslint-config')
const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
const REACT = isPackageExists('react')
const VUE = isPackageExists('vue')

/**
 * @typedef {import('eslint-define-config').FlatESLintConfigItem} FlatESLintConfigItem
 * @type {(...userConfigs: FlatESLintConfigItem[]) => FlatESLintConfigItem[]}
 */
exports._2nthony = (...userConfigs) => antfu(
  require('./configs/antfu'),
  require('./configs/base'),
  require('./configs/plugins/unused-imports'),
  TS && require('./configs/typescript'),
  REACT && require('./configs/react'),
  VUE && require('./configs/vue'),
  userConfigs,
).filter(Boolean)
