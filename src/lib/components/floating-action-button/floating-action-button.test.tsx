import { render, screen } from "@testing-library/react";
import { FloatingActionButton } from "ninjakit";

describe("button", () => {
	test("default", () => {
		render(<FloatingActionButton>test</FloatingActionButton>);

		const $button = screen.getByRole("button", { name: "test" });

		expect($button).toHaveClass("labelLarge children");
	});
});
