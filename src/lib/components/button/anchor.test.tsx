import { render, screen } from "@testing-library/react";
import { AnchorButton } from "ninjakit";

describe("button anchor", () => {
	test("default", () => {
		render(<AnchorButton href="#">test</AnchorButton>);

		const $AnchorButton = screen.getByRole("link", {
			name: "test",
		});

		expect($AnchorButton).toHaveClass("filled labelLarge children");
	});
});
