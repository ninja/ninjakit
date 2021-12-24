import { render, screen } from "@testing-library/react";
import { Aside } from "ninjakit";

test("aside", () => {
	render(
		<Aside>
			<div>test</div>
		</Aside>
	);

	const $aside = screen.getByRole("complementary");

	expect($aside).toHaveClass("aside bodyMedium");
});
