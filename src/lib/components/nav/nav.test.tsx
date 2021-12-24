import { render, screen } from "@testing-library/react";
import { Nav } from "ninjakit";

test("grid", () => {
	render(
		<Nav>
			<a href="#test">test</a>
		</Nav>
	);

	const $nav = screen.getByRole("navigation");

	expect($nav).toHaveClass("nav");
});
