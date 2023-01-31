/*
 * @Description:
 * @Autor: lkx
 * @Date: 2023-01-31 10:34:15
 * @LastEditors: lkx
 * @LastEditTime: 2023-01-31 10:34:50
 */
module.exports = {
	tabWidth: 2,
	jsxSingleQuote: true,
	jsxBracketSameLine: true,
	printWidth: 100,
	singleQuote: true,
	semi: false,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200,
			},
		},
	],
	arrowParens: 'always',
}
