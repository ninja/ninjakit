import { Card, Checkbox, useHashRef } from "ninjakit";
import { MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { CheckboxState, useButtonState } from "./state";

export function CheckboxExample() {
	const hashRef = useHashRef({ id: "checkbox" });
	const state = useButtonState();
	const [{ disabled, error, helper, indeterminate, labelWithJSX }] = state;

	return (
		<Card appearance="elevated" id="checkbox" ref={hashRef} title="Checkbox">
			<section>
				<section className={styles.center}>
					<Checkbox
						disabled={disabled}
						error={error && "Error message"}
						helper={helper && "Helper message"}
						indeterminate={indeterminate}
						label={
							labelWithJSX ? (
								<>
									<span>Label </span>
									<strong>with </strong>
									<MdFavorite />
								</>
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
