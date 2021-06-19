module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
	  sourceType: 'module'
    },
    env: {
	  browser: true
    },
    extends: [
        'standard',
        'plugin:vue/strongly-recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        'linebreak-style': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        'global-require': 0,
        'object-curly-newline': ['error', { consistent: true }],
        'newline-per-chained-call': 0,
        radix: 0,
        'quote-props': ['error', 'as-needed'],
        'max-len': ['error', { code: 160 }],
        'no-restricted-syntax': 0,
        'no-param-reassign': 0,
        'vue/custom-event-name-casing': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',

        'no-plusplus': 0,
        'import/prefer-default-export': 0,
        'no-continue': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
