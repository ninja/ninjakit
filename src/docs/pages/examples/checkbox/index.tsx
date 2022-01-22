import { Card, Checkbox } from "ninjakit";

import styles from "../examples.module.css";
import { CheckboxState, useButtonState } from "./state";

export function CheckboxExamples() {
	const state = useButtonState();
	const [{ disabled, indeterminate, labelWithJSX }] = state;

	return (
		<Card appearance="elevated" id="checkbox-example" title="Checkbox">
			<section>
				<section className={styles.center}>
					<Checkbox
						disabled={disabled}
						indeterminate={indeterminate}
						label={
							labelWithJSX ? (
								<span>
									Label <strong>with node</strong>
								</span>
							) : (
								"Label"
							)
						}
					/>
				</section>
				<CheckboxState state={state} />
			</section>
		</Card>
	);
}
