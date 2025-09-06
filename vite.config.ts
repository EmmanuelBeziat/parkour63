import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
import svg from 'vite-svg-loader'
import stylelint from 'vite-plugin-stylelint'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
	process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
	return defineConfig({
		plugins: [
			vue(),
			stylelint(),
			svg(),
			createHtmlPlugin(),
		],
		css: {
			preprocessorOptions: {}
		},
		assetsInclude: ['**/*.avifs'],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
		},
		server: {
			port: process.env.VITE_PORT ? parseInt(process.env.VITE_PORT, 10) : 3000
		},
		build: {
			outDir: process.env.VITE_DIST,
			emptyOutDir: true
		},
	})
}
