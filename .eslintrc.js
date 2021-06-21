module.exports = {
    extends: [
	  'plugin:vue/strongly-recommended'
    ],
    parser: 'vue-eslint-parser',
  	parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module'
  	},
    plugins: [
        'vue'
    ],
    rules: {
	  // override/add rules settings here, such as:
	  'vue/no-unused-vars': 'error',
	  'arrow-parens': 2,
	  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,	  
	  indent: ['error', 4, { SwitchCase: 1 }],
	  'comma-dangle': ['error', 'never'],
	  'object-curly-newline': ['error', { consistent: true }],
	  radix: 0,
	  'quote-props': ['error', 'as-needed'],
	  'max-len': ['error', { code: 160 }],
	  'vue/custom-event-name-casing': 0,
	  'vue/max-attributes-per-line': 0,
	  'vue/html-indent': ['error', 4, {
		  attribute: 1,
		  baseIndent: 1,
		  closeBracket: 0,
		  alignAttributesVertically: true,
		  ignores: []
	  }],
	  'no-plusplus': 0,
	  'import/prefer-default-export': 0,
	  'no-continue': 0,
	  'no-console': 'error'

    }
}