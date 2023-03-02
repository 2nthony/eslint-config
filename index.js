module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/prefer-separate-static-class': 'off',
      },
    },
  ],
}
