import { render, screen } from "@testing-library/react";
import { ButtonAnchor } from "ninjakit";

describe("button anchor", () => {
	test("default", () => {
		render(<ButtonAnchor href="#">test</ButtonAnchor>);

		const $buttonAnchor = screen.getByRole("link", {
			name: "test",
		});

		expect($buttonAnchor).toHaveClass("filled labelLarge children");
	});
});
