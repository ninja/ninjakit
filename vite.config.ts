import mdx from "@mdx-js/rollup";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const config: UserConfig = {
		build: {
			emptyOutDir: true,
			outDir: resolve(__dirname, "dist"),
		},
		resolve: {
			alias: {
				ninjakit: resolve(__dirname, "src/lib"),
				"react/jsx-runtime": "react/jsx-runtime.js",
			},
		},
	};

	if (mode === "lib") {
		return {
			...config,
			build: {
				...config.build,
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
			root: resolve(__dirname, "src/lib"),
		};
	}

	return {
		...config,
		build: {
			...config.build,
			rollupOptions: {
				input: {
					main: resolve(__dirname, "src/docs/index.html"),
					404: resolve(__dirname, "src/docs/404.html"),
				},
			},
		},
		plugins: [
			react(),
			mdx({ format: "mdx" }),
			legacy({ targets: ["defaults", "iOS 12", "not IE 11"] }),
		],
		root: resolve(__dirname, "src/docs"),
		server: { host: "0.0.0.0" },
	};
});
