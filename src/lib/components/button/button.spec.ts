import { expect } from "@playwright/test";

import { test } from "../../test";

test.describe("Button", () => {
	test.describe("filled appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await expect(button).toHaveAttribute("type", "button");
			await expect(button).toHaveText("Label");
			await expect(button).toHaveStyle("appearance", "none");
			await expect(button).toHaveStyle("backgroundColor", colors.primary);
			await expect(button).toHaveStyle("color", colors.surface);
			await expect(button).toHaveStyle("display", "flex");
			await expect(button).toHaveStyle("borderRadius", "20px", "::before");
			await expect(button).toHaveStyle("height", "40px", "::before");
			await expect(button).toHaveStyle("inset", "0px", "::before");
			await expect(button).toHaveStyle("opacity", "0", "::before");
			await expect(button).toHaveStyle("position", "absolute", "::before");
		});

		test("hover", async ({ page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await button.hover({ force: true });

			await expect(button).toHaveStyle("opacity", "0.08", "::before");
		});

		test("focus", async ({ page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await button.focus();

			await expect(button).toHaveStyle("opacity", "0.12", "::before");
		});

		test("disabled", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await page.check("id=button-disabled-checkbox", { force: true });

			await expect(button).toHaveStyle("color", colors.onSurface);
			await expect(button).toHaveStyle("opacity", "0.38");
			await expect(button).toHaveStyle("opacity", "0.12", "::before");
			await expect(button).toHaveStyle(
				"backgroundColor",
				colors.onSurface,
				"::before"
			);
		});
	});

	test.describe("elevated appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await page.click("id=button-appearance", { force: true });
			await page.click("id=button-appearance-menu >> button[value=elevated]", {
				force: true,
			});

			await expect(button).toHaveStyle(
				"boxShadow",
				`rgba(0, 0, 0, 0.2) 0px 1px 2px 1px`
			);
			await expect(button).toHaveStyle("color", colors.primary);
			await expect(button).toHaveStyle(
				"backgroundColor",
				colors.primary,
				"::before"
			);
		});
	});

	test.describe("tonal appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await page.click("id=button-appearance", { force: true });
			await page.click("id=button-appearance-menu >> button[value=tonal]", {
				force: true,
			});

			await expect(button).toHaveStyle(
				"backgroundColor",
				colors.primaryContainer
			);
			await expect(button).toHaveStyle("color", colors.onPrimaryContainer);
			await expect(button).toHaveStyle(
				"backgroundColor",
				colors.onPrimaryContainer,
				"::before"
			);
		});
	});

	test.describe("outlined appearance", () => {
		test.beforeEach(async ({ page }) => {
			await page.click("id=button-appearance", { force: true });
			await page.click("id=button-appearance-menu >> button[value=outlined]", {
				force: true,
			});
		});

		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await expect(button).toHaveStyle("color", colors.primary);

			await expect(button).toHaveStyle(
				"borderColor",
				colors.outline,
				"::after"
			);
			await expect(button).toHaveStyle("borderRadius", "20px", "::after");
			await expect(button).toHaveStyle("height", "40px", "::after");
			await expect(button).toHaveStyle("inset", "0px", "::after");
			await expect(button).toHaveStyle("position", "absolute", "::after");
		});

		test("disabled", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await page.click("id=button-disabled-checkbox", { force: true });

			await expect(button).toHaveStyle("color", colors.onSurface);
			await expect(button).toHaveStyle("opacity", "0.38");
		});
	});

	test.describe("text appearance", () => {
		test("default", async ({ colors, page }) => {
			const button = page.locator("id=button >> button:has-text('Label')");

			await page.click("id=button-appearance", { force: true });
			await page.click("id=button-appearance-menu >> button[value=text]", {
				force: true,
			});

			await expect(button).toHaveStyle("color", colors.primary);
		});
	});
});
