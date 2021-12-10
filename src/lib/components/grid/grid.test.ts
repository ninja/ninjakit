import { expect, test } from "@playwright/test";

test("grid", async ({ page }) => {
	await page.goto("/");

	const grid = page.locator("id=app");

	await expect(grid).toHaveCSS("appearance", "none");
});
