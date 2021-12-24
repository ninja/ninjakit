import { render, screen } from "@testing-library/react";
import { Footer } from "ninjakit";

test("footer", () => {
	render(
		<Footer>
			<div>test</div>
		</Footer>
	);

	const $footer = screen.getByRole("contentinfo");

	expect($footer).toHaveClass("footer bodyMedium");
});
