# @2nthony/eslint-config

[![version](https://img.shields.io/npm/v/@2nthony/eslint-config?label=&color=29BC9B)](https://npm.im/@2nthony/eslint-config) [![downloads](https://img.shields.io/npm/dm/@2nthony/eslint-config?label=&color=29BC9B)](https://npm.im/@2nthony/eslint-config)

**Extended from [@antfu/eslint-config](https://github.com/antfu/eslint-config), go to see details**.

## Usage

### Install

```bash
npm i -D eslint @2nthony/eslint-config
```

### `.eslintrc`

```json
{
  "extends": "@2nthony"
}
```

## Rules(diffs to antfu)

```js
// error
if (foo) bar()
if (foo)
  bar()

// correct
if (foo) {
  bar()
}
```

## Sponsors

[![sponsors](https://cdn.jsdelivr.net/gh/2nthony/sponsors-image/sponsors.svg)](https://github.com/sponsors/2nthony)

## License

MIT &copy; [2nthony](https://github.com/sponsors/2nthony)
