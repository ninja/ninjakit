import { Card, TextInput, useHashRef } from "ninjakit";
import { useRef } from "react";
import { MdCancel, MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { TextInputState, useTextInputState } from "./state";

export function TextInputExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "text-input" });
	const inputRef = useRef<HTMLInputElement>(null);
	const state = useTextInputState();
	const [
		{
			appearance,
			disabled,
			error,
			flex,
			helper,
			leadingIcon,
			trailingIcon,
			warning,
		},
	] = state;

	return (
		<Card appearance="elevated" id="text-input" ref={hashRef} title="TextInput">
			<section>
				<section className={styles.center}>
					<form autoComplete="off">
						<TextInput
							appearance={appearance}
							disabled={disabled}
							error={error === true && "Error message"}
							flex={flex}
							helper={helper === true && "Helper message"}
							id="text-input-example"
							label="Label"
							leadingIcon={leadingIcon && <MdFavorite />}
							onClickTrailingIcon={() => {
								if (inputRef.current) inputRef.current.value = "";
							}}
							ref={inputRef}
							trailingIcon={trailingIcon && <MdCancel />}
							warning={warning === true && "Warning message"}
						/>
					</form>
				</section>
				<TextInputState state={state} />
			</section>
		</Card>
	);
}
