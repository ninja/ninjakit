import { Card, Radioset } from "ninjakit";

import styles from "../examples.module.css";
import { RadiosetState, useRadiosetState } from "./state";

export function RadiosetExample() {
	const state = useRadiosetState();
	const [{ disabled, disabledOption }] = state;

	return (
		<Card appearance="elevated" id="radioset" title="RadioSet">
			<section>
				<section className={styles.center}>
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
							{
								disabled: disabledOption,
								label: "Item Three",
								value: "item-three",
							},
						]}
					/>
				</section>
				<RadiosetState state={state} />
			</section>
		</Card>
	);
}
