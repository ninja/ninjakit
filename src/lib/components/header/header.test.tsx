import { render, screen } from "@testing-library/react";
import { Header } from "ninjakit";

test("header", () => {
	render(
		<Header>
			<div>test</div>
		</Header>
	);

	const $header = screen.getByRole("banner");

	expect($header).toHaveClass("header filled");
});
