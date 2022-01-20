import { expect } from "@playwright/test";

import { test } from "../../test";

test.describe("Button", () => {
	test.describe("filled appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button");

			await expect(button).toHaveAttribute("type", "button");
			await expect(button).toHaveText("Label");
			await expect(button).toHaveCSS("appearance", "none");
			await expect(button).toHaveCSS("backgroundColor", colors.primary);
			await expect(button).toHaveCSS("color", colors.surface);
			await expect(button).toHaveCSS("display", "flex");
			await expect(button).toHavePseudoCSS("::before", "opacity", "0");
			await expect(button).toHavePseudoCSS("::before", "position", "absolute");
		});

		test("hover", async ({ page }) => {
			const button = page.locator("id=button");

			await button.hover();

			await expect(button).toHavePseudoCSS("::before", "opacity", "0.08");
		});

		test("focus", async ({ page }) => {
			const button = page.locator("id=button");

			await button.focus();

			await expect(button).toHavePseudoCSS("::before", "opacity", "0.12");
		});

		test("disabled", async ({ colors, page }) => {
			const button = page.locator("id=button");

			await page.check("id=button-disabled-checkbox");

			await expect(button).toHaveCSS("color", colors.onSurface);
			await expect(button).toHaveCSSOpacity("0.38");
			await expect(button).toHavePseudoCSS("::before", "opacity", "0.12");
			await expect(button).toHavePseudoCSS(
				"::before",
				"backgroundColor",
				colors.onSurface
			);
		});
	});

	test.describe("elevated appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button");

			await page.click("id=button-appearance");
			await page.click("id=button-appearance-menu >> button[value=elevated]");

			await expect(button).toHaveCSS(
				"boxShadow",
				`rgba(0, 0, 0, 0.2) 0px 1px 2px 1px`
			);
			await expect(button).toHaveCSS("color", colors.primary);
			await expect(button).toHavePseudoCSS(
				"::before",
				"backgroundColor",
				colors.primary
			);
		});
	});

	test.describe("tonal appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button");

			await page.click("id=button-appearance");
			await page.click("id=button-appearance-menu >> button[value=tonal]");

			await expect(button).toHaveCSS(
				"backgroundColor",
				colors.primaryContainer
			);
			await expect(button).toHaveCSS("color", colors.onPrimaryContainer);
			await expect(button).toHavePseudoCSS(
				"::before",
				"backgroundColor",
				colors.onPrimaryContainer
			);
		});
	});

	test.describe("outlined appearance", () => {
		test.beforeEach(async ({ page }) => {
			await page.click("id=button-appearance");
			await page.click("id=button-appearance-menu >> button[value=outlined]");
		});

		test("default", async ({ browserName, colors, page }) => {
			const button = page.locator("id=button");

			await expect(button).toHaveCSS("color", colors.primary);

			if (browserName === "firefox") return;

			await expect(button).toHavePseudoCSS(
				"::after",
				"borderColor",
				colors.outline
			);
			await expect(button).toHavePseudoCSS("::after", "borderRadius", "20px");
			await expect(button).toHavePseudoCSS("::after", "height", "40px");
			await expect(button).toHavePseudoCSS("::after", "inset", "0px");
			await expect(button).toHavePseudoCSS("::after", "position", "absolute");
		});

		test("disabled", async ({ colors, page }) => {
			const button = page.locator("id=button");

			await page.click("id=button-disabled-checkbox");

			await expect(button).toHaveCSS("color", colors.onSurface);
			await expect(button).toHaveCSSOpacity("0.38");
		});
	});

	test.describe("text appearance", () => {
		test("default", async ({ browserName, colors, page }) => {
			const button = page.locator("id=button");

			await page.click("id=button-appearance");
			await page.click("id=button-appearance-menu >> button[value=text]");

			await expect(button).toHaveCSS("color", colors.primary);

			if (browserName === "firefox") return;

			await expect(button).toHavePseudoCSS("::before", "borderRadius", "20px");
			await expect(button).toHavePseudoCSS("::before", "height", "40px");
			await expect(button).toHavePseudoCSS("::before", "inset", "0px");
			await expect(button).toHavePseudoCSS("::before", "position", "absolute");
		});
	});
});
