import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	

  	plugins: [
		// { "enforce" : 'pre' }, 
		react({ babel: { 
			// plugins: ['@babel/plugin-transform-react-jsx', { "runtime": "automatic" }] 
			presets: [ ["@babel/preset-react", { "runtime": "automatic" }] ]
		} })
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
		  input:[]
		}
	},

	optimizeDeps: {
		entries: [],
	},
})
