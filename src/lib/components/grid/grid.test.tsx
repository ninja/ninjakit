import { render, screen } from "@testing-library/react";
import { Grid, GridArticle } from "ninjakit";

test("grid", () => {
	render(
		<Grid>
			<GridArticle />
		</Grid>
	);

	const $grid = screen.getByRole("main");
	const $article = screen.getByRole("article");

	expect($grid).toHaveClass("grid");
	expect($article).toHaveClass("article");
});
