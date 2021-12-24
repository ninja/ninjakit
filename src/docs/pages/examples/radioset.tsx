import { Card, Radioset } from "ninjakit";
import { FunctionComponent } from "react";

export const RadiosetExamples: FunctionComponent = () => (
	<Card appearance="elevated">
		<Radioset<"apple" | "banana" | "grapes">
			defaultValue="banana"
			label="Choose a fruit:"
			name="test"
			options={[
				{
					label: "🍎 Apple",
					value: "apple",
				},
				{ disabled: true, label: "🍌 We have no Banana", value: "banana" },
				{
					children: (
						<span>
							🍇 <span>Grapes</span>
						</span>
					),
					label: "Grapes",
					value: "grapes",
				},
			]}
		/>
	</Card>
);
