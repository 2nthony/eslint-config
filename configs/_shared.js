const { isPackageExists } = require('local-pkg')

exports.TS = isPackageExists('typescript')
exports.REACT = isPackageExists('react')
exports.VUE = isPackageExists('vue')
