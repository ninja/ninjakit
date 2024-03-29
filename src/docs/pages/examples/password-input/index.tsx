import { Card, PasswordInput, useHashRef } from "ninjakit";
import { useRef } from "react";
import { MdLock } from "react-icons/md";

import styles from "../examples.module.css";
import { PasswordInputState, usePasswordInputState } from "./state";

export function PasswordInputExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "password-input" });
	const inputRef = useRef<HTMLInputElement>(null);
	const state = usePasswordInputState();
	const [{ appearance, disabled, error, flex, helper, leadingIcon, warning }] =
		state;

	return (
		<Card
			appearance="elevated"
			id="password-input"
			ref={hashRef}
			title="PasswordInput"
		>
			<section>
				<section className={styles.center}>
					<form autoComplete="on">
						<input autoComplete="username" type="hidden" />
						<PasswordInput
							appearance={appearance}
							autoComplete="new-password"
							disabled={disabled}
							error={error && "Error message"}
							flex={flex}
							helper={helper && "Helper message"}
							id="new-password"
							label="Password"
							leadingIcon={leadingIcon && <MdLock />}
							name="new-password"
							ref={inputRef}
							warning={warning && "Warning message"}
						/>
					</form>
				</section>
				<PasswordInputState state={state} />
			</section>
		</Card>
	);
}
