import { Card, Typography, useHashRef } from "ninjakit";

export function TypographyExamples() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "typography" });

	return (
		<Card
			appearance="elevated"
			id="typography"
			ref={hashRef}
			title="Typography"
		>
			<Typography appearance="displayLarge">Display Large</Typography>
			<br />
			<Typography appearance="displayMedium">Display Medium</Typography>
			<br />
			<Typography appearance="displaySmall">Display Small</Typography>
			<br />
			<Typography appearance="headlineLarge">Headline Large</Typography>
			<br />
			<Typography appearance="headlineMedium">Headline Medium</Typography>
			<br />
			<Typography appearance="headlineSmall">Headline Small</Typography>
			<br />
			<Typography appearance="titleLarge">Title Large</Typography>
			<br />
			<Typography appearance="titleMedium">Title Medium</Typography>
			<br />
			<Typography appearance="titleSmall">Title Small</Typography>
			<br />
			<Typography appearance="labelLarge">Label Large</Typography>
			<br />
			<Typography appearance="labelMedium">Label Medium</Typography>
			<br />
			<Typography appearance="labelSmall">Label Small</Typography>
			<br />
			<Typography appearance="bodyLarge">Body Large</Typography>
			<br />
			<Typography appearance="bodyMedium">Body Medium</Typography>
			<br />
			<Typography appearance="bodySmall">Body Small</Typography>
			<br />
		</Card>
	);
}
