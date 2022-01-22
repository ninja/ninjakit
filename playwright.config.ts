import {
	devices,
	expect,
	Locator,
	PlaywrightTestConfig,
} from "@playwright/test";

type PseudoElement = "::before" | "::after";

expect.extend({
	async toHaveCSSOpacity(locator: Locator, expected: string) {
		const value = await locator.evaluate(
			(element: HTMLElement | SVGElement) => getComputedStyle(element).opacity
		);

		const actual = value !== "0" ? Number(value).toFixed(2) : value;

		if (actual === expected) return { pass: true };

		return {
			message: () => `actual: ${actual} expected: ${expected}`,
			pass: false,
		};
	},
	async toHavePseudoCSS(
		locator: Locator,
		pseudoElement: PseudoElement,
		name: string,
		expected: string
	) {
		const value = await locator.evaluate(
			(
				element: HTMLElement | SVGElement,
				{
					pseudoElement,
					name,
				}: {
					pseudoElement: PseudoElement;
					name: string;
				}
			) => getComputedStyle(element, pseudoElement)[name],
			{
				pseudoElement,
				name,
			}
		);

		const actual =
			name === "opacity" && value !== "0" ? Number(value).toFixed(2) : value;

		if (actual === expected) return { pass: true };

		return {
			message: () => `actual: ${actual} expected: ${expected}`,
			pass: false,
		};
	},
});

// https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
	forbidOnly: !!process.env.CI,
	// globalSetup: "./playwright.setup.ts",
	projects: [
		"Desktop Chrome",
		"Desktop Firefox",
		"Desktop Safari",
		"Pixel 5",
		"iPhone 13",
	].map((name) => ({ name, use: devices[name] })),
	retries: process.env.CI ? 2 : 0,
	testDir: "./src",
	use: { trace: "on-first-retry" },
	webServer: process.env.CI
		? {
				command: "vite preview",
				port: 5000,
				reuseExistingServer: false,
		  }
		: { command: "vite", port: 3000, reuseExistingServer: true },
};

export default config;
