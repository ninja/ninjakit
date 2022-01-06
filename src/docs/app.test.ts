import { expect, test } from "@playwright/test";

test("app", async ({ page }) => {
	await page.goto("/");

	const app = page.locator("id=app");

	await expect(app).toHaveCSS("appearance", "none");
});