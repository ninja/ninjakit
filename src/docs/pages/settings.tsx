import { Card, useColorScheme } from "ninjakit";
import { FunctionComponent } from "react";

export const Settings: FunctionComponent = () => {
	const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<article>
			<Card>
				<label htmlFor="color-scheme">Color Scheme</label>
				<section>
					<select
						id="color-scheme"
						onChange={(event) =>
							setColorScheme(event.target.value as "light" | "dark" | "system")
						}
						value={colorScheme}
					>
						<option value="light">Light</option>
						<option value="dark">Dark</option>
						<option value="system">System default</option>
					</select>
				</section>
			</Card>
		</article>
	);
};
