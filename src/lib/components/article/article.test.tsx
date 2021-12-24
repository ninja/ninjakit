import { render, screen } from "@testing-library/react";
import { Article } from "ninjakit";

test("article", () => {
	render(
		<Article>
			<div>test</div>
		</Article>
	);

	const $article = screen.getByRole("article");

	expect($article).toHaveClass("article");
});
