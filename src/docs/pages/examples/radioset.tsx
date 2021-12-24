import { Card, Radioset } from "ninjakit";
import { FunctionComponent } from "react";

export const RadiosetExamples: FunctionComponent = () => (
	<Card appearance="elevated" id="radioset" title="RadioSet">
		<Radioset<"apples" | "bananas" | "grapes">
			defaultValue="bananas"
			label="Choose fruit:"
			name="test"
			options={[
				{
					label: "🍎 Apples",
					value: "apples",
				},
				{
					children: (
						<span>
							🍇 <span>Grapes</span>
						</span>
					),
					label: "Grapes",
					value: "grapes",
				},
				{ disabled: true, label: "🍌 Bananas", value: "bananas" },
			]}
		/>
	</Card>
);
