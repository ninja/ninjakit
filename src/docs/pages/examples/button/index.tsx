import { Button, Card, useHashRef } from "ninjakit";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

import styles from "../examples.module.css";
import { ButtonState, useButtonState } from "./state";

export function ButtonExample() {
	const hashRef = useHashRef({ id: "button" });
	const state = useButtonState();
	const [{ appearance, disabled, leadingIcon, trailingIcon }] = state;

	return (
		<Card appearance="elevated" id="button" ref={hashRef} title="Button">
			<section>
				<section className={styles.center}>
					<Button
						appearance={appearance}
						disabled={disabled}
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
