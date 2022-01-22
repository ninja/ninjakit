import { test as base } from "@playwright/test";

export const test = base.extend<{ colors: Record<string, string> }>({
	colors: async ({ colorScheme }, use) => {
		const colors = {
			dark: {
				onPrimaryContainer: "rgb(33, 0, 93)",
				onSurface: "rgb(28, 27, 31)",
				outline: "rgb(121, 116, 126)",
				primary: "rgb(103, 80, 164)",
				primaryContainer: "rgb(234, 221, 255)",
				surface: "rgb(255, 255, 255)",
			},
			light: {
				onPrimaryContainer: "rgb(33, 0, 93)",
				onSurface: "rgb(28, 27, 31)",
				outline: "rgb(121, 116, 126)",
				primary: "rgb(103, 80, 164)",
				primaryContainer: "rgb(234, 221, 255)",
				surface: "rgb(255, 255, 255)",
			},
			"no-preference": {
				onPrimaryContainer: "rgb(33, 0, 93)",
				onSurface: "rgb(28, 27, 31)",
				outline: "rgb(121, 116, 126)",
				primary: "rgb(103, 80, 164)",
				primaryContainer: "rgb(234, 221, 255)",
				surface: "rgb(255, 255, 255)",
			},
		}[colorScheme || "light"];

		await use(colors);
	},
	page: async ({ page }, use) => {
		await page.goto("/examples");
		await page.addStyleTag({
			content: "*,*::before,*::after{transition-property: none !important}",
		});
		await use(page);
	},
});
