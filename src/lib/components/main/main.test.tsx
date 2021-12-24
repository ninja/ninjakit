import { render, screen } from "@testing-library/react";
import { Main } from "ninjakit";

test("grid", () => {
	render(
		<Main>
			<div>test</div>
		</Main>
	);

	const $main = screen.getByRole("main");

	expect($main).toHaveClass("main");
});
