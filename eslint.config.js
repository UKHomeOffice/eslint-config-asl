import react from "eslint-plugin-react";
import filenames from "eslint-plugin-filenames";
import promise from "eslint-plugin-promise";
import noOnlyTests from "eslint-plugin-no-only-tests";
import implicit from "eslint-plugin-implicit-dependencies";

export default [
    {
        files: ["**/*.{js,jsx}"],

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        settings: {
            react: {
                version: "detect"
            }
        },

        plugins: {
            react,
            filenames,
            promise,
            "no-only-tests": noOnlyTests,
            "implicit-dependencies": implicit
        },

        rules: {
            // ======================
            // CORE RULES
            // ======================
            "filenames/match-regex": [
                "error",
                "^[a-z]+[a-z0-9\\-\\.]*[a-z0-9]+$",
                true
            ],

            "implicit-dependencies/no-implicit": "error",
            "no-only-tests/no-only-tests": "error",
            "no-param-reassign": "warn",

            // ======================
            // PROMISE RULES (important fix)
            // ======================
            "promise/always-return": "off",
            "promise/no-return-wrap": "error",
            "promise/catch-or-return": "error",

            // ======================
            // REACT RULES
            // ======================
            "react/display-name": "off",
            "react/prop-types": "off",
            "react/jsx-uses-vars": "warn",

            // ======================
            // STYLE RULES
            // ======================
            "padded-blocks": "off",
            "space-before-function-paren": "off",
            "spaced-comment": "off"
        }
    }
];
