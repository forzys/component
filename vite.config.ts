import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	 
  	plugins: [
		react()
	],
  
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"src": path.resolve(__dirname, "src"),
			"components": path.resolve(__dirname, "src/components"),
			"interface": path.resolve(__dirname, "src/interface"),
		}
	},

	build:{
		rollupOptions:{
			// external: ['react'],
		  	// input:[],
			output: {
			// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				// globals: {
				// 	react: 'React',
				// },
			},
		}
	},

	optimizeDeps: {
		entries: [],
	},
})
