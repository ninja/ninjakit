import { Card, PasswordInput, useHashRef } from "ninjakit";
import { useRef } from "react";
import { MdLock } from "react-icons/md";

import styles from "../examples.module.css";
import { PasswordInputState, usePasswordInputState } from "./state";

export function PasswordInputExample() {
	const hashRef = useHashRef({ id: "password-input" });
	const inputRef = useRef<HTMLInputElement>(null);
	const state = usePasswordInputState();
	const [
		{ appearance, disabled, error, flex, helper, leadingIcon, passwordRules },
	] = state;

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
						<PasswordInput
							appearance={appearance}
							autoComplete="new-password"
							disabled={disabled}
							error={error && "Invalid password"}
							flex={flex}
							helper={
								helper
									? "A mix of at least 8 lowercase, uppercase, number and symbol characters."
									: undefined
							}
							id="new-password"
							label="Password"
							leadingIcon={leadingIcon && <MdLock />}
							passwordRules={
								passwordRules
									? [
											["min-length", 8],
											["required", "digit"],
											["required", "lower"],
											["required", "special"],
											["required", "upper"],
									  ]
									: undefined
							}
							ref={inputRef}
						/>
					</form>
				</section>
				<PasswordInputState state={state} />
			</section>
		</Card>
	);
}
