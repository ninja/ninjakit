import { expect, test } from "@playwright/test";

test("grid", async ({ page }) => {
	await page.goto("/");

	const grid = page.locator("id=main");

	await expect(grid).toHaveCSS("appearance", "none");
});
