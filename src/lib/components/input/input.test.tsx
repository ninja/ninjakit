import { render, screen } from "@testing-library/react";
import { TextInput } from "ninjakit";

describe("text input", () => {
	test("default", () => {
		render(<TextInput id="test" label="test" />);

		const $textInput = screen.getByRole("textbox", { name: "test" });

		expect($textInput).toHaveClass("input");
	});
});
