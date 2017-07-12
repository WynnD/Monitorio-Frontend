module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: "plugin:react/recommended",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
