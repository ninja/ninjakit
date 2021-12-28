import { render, screen } from "@testing-library/react";
import { Button } from "ninjakit";

describe("button", () => {
	test("default", () => {
		render(<Button>test</Button>);

		const $button = screen.getByRole("button", { name: "test" });

		expect($button).toHaveClass("filled labelLarge children");
	});
});
