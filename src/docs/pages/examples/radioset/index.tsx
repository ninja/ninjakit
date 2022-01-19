import { Card, Radioset } from "ninjakit";

import { RadiosetState, useRadiosetState } from "./state";

export function RadiosetExamples() {
	const state = useRadiosetState();
	const [{ disabled }] = state;

	return (
		<Card appearance="elevated" id="radioset" title="RadioSet">
			<section>
				<section>
					<Radioset<"item-one" | "item-two" | "item-three">
						defaultValue="item-one"
						disabled={disabled}
						label="Label"
						name="items"
						options={[
							{
								label: "Item One",
								value: "item-one",
							},
							{
								label: <span>Item Two</span>,
								value: "item-two",
							},
							{ disabled: true, label: "Item Three", value: "item-three" },
						]}
					/>
				</section>
				<RadiosetState state={state} />
			</section>
		</Card>
	);
}
