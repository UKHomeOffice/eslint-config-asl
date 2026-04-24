# 📦 @ukhomeoffice/eslint-config-asl

Shared ESLint configuration for ASL codebases.
Designed for monorepos, supporting both CommonJS and ESM projects using ESLint flat config.

## 🚀 Install
`npm install --save-dev eslint @ukhomeoffice/eslint-config-asl`

⚠️ ESLint is required in every consuming project.

## ⚙️ Usage

Create an eslint.config.js file in your project root.

### 🟦 ESM Projects (recommended)

If your project uses ES Modules:

```file: eslint.config.js
import config from "@ukhomeoffice/eslint-config-asl";

export default [
...config
];
```
```file: package.json
{
"type": "module"
}

```
###  🟨 CommonJS Projects

Even in CommonJS projects, ESLint flat config still uses ESM syntax.

```file: eslint.config.js
import config from "@ukhomeoffice/eslint-config-asl";

export default [
...config
];
```

⚠️ You do NOT need to convert your whole project to ESM just for ESLint.

# 🧩 Monorepo Usage

In monorepos, install at root or per workspace:

npm install --save-dev eslint @ukhomeoffice/eslint-config-asl

Then use the same config in each workspace.

## ✏️ Extending or Overriding Rules

You can extend or override rules directly in your project.
````
Example: add custom rules
import config from "@ukhomeoffice/eslint-config-asl";

export default [
...config,

{
files: ["**/*.{js,jsx}"],
rules: {
"no-console": "warn",
"no-debugger": "error"
}
}
];
````

🧠 Add rules only for specific folders
Example: stricter rules for tests
````
export default [
...config,

{
files: ["**/*.test.js"],
rules: {
"no-only-tests/no-only-tests": "error"
}
}
];
🔧 Disable a rule
{
rules: {
"no-param-reassign": "off"
}
}
➕ Override plugin settings
{
settings: {
react: {
version: "detect"
}
}
}
````

## 🧱 How configuration merging works

Your config is just an array:
````
export default [
baseConfig,
yourOverrides
];
````

Later rules override earlier ones
You can add unlimited layers
Works well in monorepos


📌 Requirements
Node.js 18+
ESLint 9+
Flat config support (eslint.config.js)
⚠️ Notes
This config is ESM-based internally
Works in both CommonJS and ESM projects
Designed for monorepos and shared rule consistency


## 🧭 Philosophy

This config aims to be:

minimal but strict
monorepo-safe
framework-agnostic
easy to extend per project needs
