import {
	devices,
	expect,
	Locator,
	PlaywrightTestConfig,
} from "@playwright/test";

type PseudoElement = "::before" | "::after";

expect.extend({
	async toHaveStyle(
		locator: Locator,
		name: string,
		expected: string,
		pseudoElement?: PseudoElement
	) {
		const actual = await locator.evaluate(
			(
				element: HTMLElement | SVGElement,
				{
					expected,
					name,
					pseudoElement,
				}: {
					expected: string;
					name: string;
					pseudoElement: PseudoElement;
				}
			) => {
				const computedStyle = getComputedStyle(element, pseudoElement);

				switch (name) {
					case "borderColor":
						if (computedStyle.borderColor) return computedStyle.borderColor;

						// Firefox
						if (
							computedStyle.borderTopColor ===
								computedStyle.borderBottomColor &&
							computedStyle.borderTopColor === computedStyle.borderLeftColor &&
							computedStyle.borderTopColor === computedStyle.borderRightColor
						)
							return computedStyle.borderTopColor;

						break;
					case "borderRadius":
						if (computedStyle.borderRadius) return computedStyle.borderRadius;

						// Firefox
						if (
							computedStyle.borderTopLeftRadius ===
								computedStyle.borderTopRightRadius &&
							computedStyle.borderTopLeftRadius ===
								computedStyle.borderBottomLeftRadius &&
							computedStyle.borderTopLeftRadius ===
								computedStyle.borderBottomRightRadius
						)
							return computedStyle.borderTopLeftRadius;

						break;
					case "inset":
						if (computedStyle.inset) return computedStyle.inset;

						// Firefox
						if (
							computedStyle.top === computedStyle.bottom &&
							computedStyle.top === computedStyle.left &&
							computedStyle.top === computedStyle.right
						)
							return computedStyle.top;

						break;
					case "opacity":
						// Safari
						return Number(computedStyle.opacity).toFixed(
							(expected.split(".")[1] || []).length
						);
					default:
						return computedStyle[name];
				}
			},
			{
				expected,
				name,
				pseudoElement,
			}
		);

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
				port: 4173,
				reuseExistingServer: false,
		  }
		: { command: "vite", port: 4173, reuseExistingServer: true },
};

export default config;
