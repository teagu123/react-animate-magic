import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.tsx'),
			name: 'ReactAnimateMagic',
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
		commonjsOptions: {
			esmExternals: ['react', 'react-dom'],
		},
	},
	plugins: [react()],
})
