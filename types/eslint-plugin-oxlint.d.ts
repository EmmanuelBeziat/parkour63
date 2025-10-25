declare module 'eslint-plugin-oxlint' {
	import type { ESLint } from 'eslint'

	interface OxlintPlugin {
		configs: {
			'flat/recommended': ESLint.FlatConfig[]
		}
	}

	const plugin: OxlintPlugin
	export default plugin
}
