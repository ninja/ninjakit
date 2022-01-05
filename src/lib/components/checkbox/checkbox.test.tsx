import { render, screen } from "@testing-library/react";
import { Checkbox } from "ninjakit";

describe("checkbox", () => {
	test("default", () => {
		render(<Checkbox label="test" name="test" />);

		const $checkbox = screen.getByRole("checkbox", { name: "test" });

		expect($checkbox).toHaveClass("nk");
	});
});
