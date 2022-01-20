import { Card, TextInput } from "ninjakit";
import { useRef } from "react";
import { MdCancel, MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { TextInputState, useTextInputState } from "./state";

export function TextInputExamples() {
	const ref = useRef<HTMLInputElement>(null);
	const state = useTextInputState();
	const [{ appearance, error, flex, helper, leadingIcon, trailingIcon }] =
		state;

	return (
		<Card appearance="elevated" id="text-input-example" title="TextInput">
			<section>
				<section className={styles.center}>
					<TextInput
						appearance={appearance}
						error={error && "Error message"}
						flex={flex}
						helper={helper ? "Helper message" : undefined}
						id="text-input-example"
						label="Label"
						leadingIcon={leadingIcon && <MdFavorite />}
						onClickTrailingIcon={() => {
							if (ref.current) ref.current.value = "";
						}}
						ref={ref}
						trailingIcon={trailingIcon && <MdCancel />}
					/>
				</section>
				<TextInputState state={state} />
			</section>
		</Card>
	);
}
