import mdx from "@mdx-js/rollup";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, UserConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";

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
		plugins: [
			react(),
			mdx({ format: "mdx" }),
			pwa({
				base: "/",
				filename: "worker.js",
				includeAssets: "icon.svg",
				manifest: {
					background_color: "#1a1a1a",
					description: "Material designed React components",
					icons: [
						{
							sizes: "192x192",
							src: "icon-192x192.png",
							type: "image/png",
						},
						{
							sizes: "512x512",
							src: "icon-512x512.png",
							type: "image/png",
						},
						{
							purpose: "maskable",
							sizes: "512x512",
							src: "icon-monochrome-512x512.png",
							type: "image/png",
						},
						{
							purpose: "monochrome",
							sizes: "512x512",
							src: "icon-monochrome-512x512.png",
							type: "image/png",
						},
					],
					name: "ninjaKit",
					short_name: "ninjaKit",
					theme_color: "#1a1a1a",
				},
				registerType: "prompt",
			}),
			legacy({ targets: ["defaults", "iOS 12", "not IE 11"] }),
		],
		root: resolve(__dirname, "src/docs"),
		server: { host: "0.0.0.0" },
	};
});
