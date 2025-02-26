# deno-lint-plugin

[![deno][deno-src]][deno-href]
[![yolk-oss][yolk-src]][yolk-href]
[![jsr version][jsr-version-src]][jsr-href]
[![jsr score][jsr-score-src]][jsr-href]
[![License][license-src]][license-href]

A little collection of Deno lint rules.

## Installation

```bash
deno add jsr:@yolk-oss/deno-lint-plugin
```

## Usage

Add the following to your `deno.json`:

```json
{
  "lint": {
    "plugins": ["jsr:@yolk-oss/deno-lint-plugin"]
  }
}
```

## Rules 

This plugin contains following rules:

- [no-magic-numbers](./rules/no-magic-numbers/no-magic-numbers.ts)
- [no-underscore-dangle](./rules/no-underscore-dangle/no-underscore-dangle.ts)
- [require-yield](./rules/require-yield/require-yield.ts)

## License

[MIT](./LICENSE)

<!-- Badges -->

[deno-src]: https://img.shields.io/badge/deno-black?logo=deno&logoColor=white
[deno-href]: https://deno.com/
[yolk-src]: https://img.shields.io/badge/yolk-deno-blue.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRUZFQkU4Ii8+CjxyZWN0IHg9IjQwNSIgeT0iMTI1IiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjI3MCIgcng9IjYwIiBmaWxsPSIjRjRCQjI5Ii8+CjxjaXJjbGUgY3g9IjU0MCIgY3k9IjI2MCIgcj0iMTM1IiBmaWxsPSIjRjRCQjI5Ii8+Cjwvc3ZnPgo=&style=flat-square&labelColor=EFEBE8&color=F4BB29
[yolk-href]: https://github.com/yolk-oss/deno-lint-plugin

[jsr-version-src]: https://jsr.io/badges/@yolk-oss/deno-lint-plugin?style=flat-square
[jsr-score-src]: https://jsr.io/badges/@yolk-oss/deno-lint-plugin/score?style=flat-square
[jsr-href]: https://jsr.io/@yolk-oss/deno-lint-plugin

[license-src]: https://img.shields.io/github/license/yolk-oss/elysia-plugin.svg?style=flat-square&labelColor=EFEBE8&color=F4BB29
[license-href]: https://github.com/yolk-oss/elysia-plugin/blob/main/LICENSE