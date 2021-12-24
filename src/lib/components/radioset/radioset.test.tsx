import { render, screen } from "@testing-library/react";
import { Radioset } from "ninjakit";

describe("radioset", () => {
	test("default", () => {
		render(
			<Radioset label="test" name="test" options={[{ value: "test" }]}>
				test
			</Radioset>
		);

		const $radioset = screen.getByRole("group", { name: "test" });

		expect($radioset).toHaveClass("labelLarge radioset");
	});
});
