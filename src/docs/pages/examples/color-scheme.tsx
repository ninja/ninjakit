import { Card, ColorScheme, Radioset, useColorScheme } from "ninjakit";
import { FunctionComponent } from "react";

export const ColorSchemeExample: FunctionComponent = () => {
	const { colorScheme, setColorScheme } = useColorScheme();

	return (
		<Card>
			<Radioset<ColorScheme>
				defaultValue={colorScheme}
				label="Color Scheme"
				name="color-scheme"
				onChange={setColorScheme}
				options={["dark", "light", "system"]}
			/>
		</Card>
	);
};
