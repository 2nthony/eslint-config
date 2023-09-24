module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
  ],
  rules: {
    // import react
    'react/react-in-jsx-scope': 'off',

    // jsx
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-curly-spacing': [
      2,
      { when: 'never', children: { when: 'never' } },
    ],
    'react/jsx-curly-newline': [
      2,
      { multiline: 'consistent', singleline: 'forbid' },
    ],
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-tag-spacing': [2, { beforeSelfClosing: 'always' }],
    'react/jsx-indent': [
      2,
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],
    'react/jsx-indent-props': [
      2,
      { indentMode: 2, ignoreTernaryOperator: true },
    ],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
}
