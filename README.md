# @ukhomeoffice/eslint-config-asl

Shared ESLint flat config for ASL codebases.
Designed for monorepos with mixed CommonJS and ESM packages.

## Install

```bash
npm install --save-dev eslint @ukhomeoffice/eslint-config-asl
```

## Requirements

- Node.js 18+
- ESLint 9+
- Flat config (`eslint.config.mjs` or `eslint.config.js` in ESM projects)

## Usage

### ESM project

Create `eslint.config.mjs` in your project root:

```js
import config from "@ukhomeoffice/eslint-config-asl";

export default [...config];
```

### CommonJS project

You can still use flat config with an ESM config file:

```js
// eslint.config.mjs
import config from "@ukhomeoffice/eslint-config-asl";

export default [...config];
```

You do not need to convert application code to ESM just to use this ESLint config.

## Mixed monorepo setup

For monorepos with both CJS and ESM `*.js` packages, add per-package overrides:

```js
import config from "@ukhomeoffice/eslint-config-asl";

export default [
	...config,
	{
		files: ["packages/cjs-*/**/*.js"],
		languageOptions: {
			sourceType: "commonjs"
		}
	},
	{
		files: ["packages/esm-*/**/*.js"],
		languageOptions: {
			sourceType: "module"
		}
	}
];
```

The shared config already handles `*.mjs` as ESM and `*.cjs` as CommonJS.

## Extending rules

```js
import config from "@ukhomeoffice/eslint-config-asl";

export default [
	...config,
	{
		files: ["**/*.{js,jsx,mjs,cjs}"],
		rules: {
			"no-console": "warn",
			"no-debugger": "error"
		}
	}
];
```
