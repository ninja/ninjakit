import { Button, Card } from "ninjakit";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

import styles from "../examples.module.css";
import { ButtonState, useButtonState } from "./state";

export function ButtonExamples() {
	const state = useButtonState();
	const [{ appearance, disabled, leadingIcon, trailingIcon }] = state;

	return (
		<Card appearance="elevated" id="button-example" title="Button">
			<section>
				<section className={styles.center}>
					<Button
						appearance={appearance}
						disabled={disabled}
						id="button"
						label="Label"
						leadingIcon={leadingIcon && <MdThumbUp />}
						trailingIcon={trailingIcon && <MdArrowDropDown />}
					/>
				</section>
				<ButtonState state={state} />
			</section>
		</Card>
	);
}
