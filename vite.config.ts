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
		plugins: [react()],
		resolve: { alias: { ninjakit: resolve(__dirname, "src/lib") } },
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
			root: resolve(__dirname, "src/lib"),
		};
	}

	return { ...config, root: resolve(__dirname, "src") };
});
