import { Card, Typography } from "ninjakit";

export function TypographyExamples() {
	return (
		<Card appearance="elevated" id="typography-example" title="Typography">
			<Card appearance="outlined" title="Display">
				<Typography appearance="displayLarge">Large</Typography>
				<Typography appearance="displayMedium">Medium</Typography>
				<Typography appearance="displaySmall">Small</Typography>
			</Card>
			<Card appearance="outlined" title="Headline">
				<Typography appearance="headlineLarge">Large</Typography>
				<Typography appearance="headlineMedium">Medium</Typography>
				<Typography appearance="headlineSmall">Small</Typography>
			</Card>
			<Card appearance="outlined" title="Title">
				<Typography appearance="titleLarge">Large</Typography>
				<Typography appearance="titleMedium">Medium</Typography>
				<Typography appearance="titleSmall">Small</Typography>
			</Card>
			<Card appearance="outlined" title="Label">
				<Typography appearance="labelLarge">Large</Typography>
				<Typography appearance="labelMedium">Medium</Typography>
				<Typography appearance="labelSmall">Small</Typography>
			</Card>
			<Card appearance="outlined" title="Body">
				<Typography appearance="bodyLarge">Large</Typography>
				<Typography appearance="bodyMedium">Medium</Typography>
				<Typography appearance="bodySmall">Small</Typography>
			</Card>
		</Card>
	);
}
