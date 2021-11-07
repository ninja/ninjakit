import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: resolve(__dirname, "dist"),
		lib: {
			entry: resolve(__dirname, "src/lib"),
			fileName: (format) => `ninjakit.${format}.js`,
			name: "NinjaKit",
		},
		rollupOptions: {
			external: ["react"],
			output: { globals: { react: "React" } },
		},
	},
	css: {
		modules: {
			generateScopedName: "ninjakit-[folder]-[local]-[contentHash]",
		},
	},
	plugins: [react()],
	resolve: { alias: { ninjakit: resolve(__dirname, "src/lib") } },
	root: resolve(__dirname, "src"),
});
