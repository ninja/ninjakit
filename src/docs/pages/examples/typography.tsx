import { Card, Typography } from "ninjakit";
import { FunctionComponent } from "react";

export const TypographyExamples: FunctionComponent = () => (
	<Card appearance="elevated" id="typography" title="Typography">
		<Card appearance="outlined" title="Display">
			<section>
				<Typography appearance="displayLarge">Large</Typography>
				<Typography appearance="displayMedium">Medium</Typography>
				<Typography appearance="displaySmall">Small</Typography>
			</section>
		</Card>
		<Card appearance="outlined" title="Headline">
			<section>
				<Typography appearance="headlineLarge">Large</Typography>
				<Typography appearance="headlineMedium">Medium</Typography>
				<Typography appearance="headlineSmall">Small</Typography>
			</section>
		</Card>
		<Card appearance="outlined" title="Title">
			<section>
				<Typography appearance="titleLarge">Large</Typography>
				<Typography appearance="titleMedium">Medium</Typography>
				<Typography appearance="titleSmall">Small</Typography>
			</section>
		</Card>
		<Card appearance="outlined" title="Label">
			<section>
				<Typography appearance="labelLarge">Large</Typography>
				<Typography appearance="labelMedium">Medium</Typography>
				<Typography appearance="labelSmall">Small</Typography>
			</section>
		</Card>
		<Card appearance="outlined" title="Body">
			<section>
				<Typography appearance="bodyLarge">Large</Typography>
				<Typography appearance="bodyMedium">Medium</Typography>
				<Typography appearance="bodySmall">Small</Typography>
			</section>
		</Card>
	</Card>
);
