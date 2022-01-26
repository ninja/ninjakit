import { Card, PasswordInput, useHashRef } from "ninjakit";
import { useRef } from "react";
import { MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { PasswordInputState, usePasswordInputState } from "./state";

export function PasswordInputExample() {
	const hashRef = useHashRef({ id: "password-input" });
	const inputRef = useRef<HTMLInputElement>(null);
	const state = usePasswordInputState();
	const [{ appearance, disabled, error, flex, helper, leadingIcon }] = state;

	return (
		<Card
			appearance="elevated"
			id="password-input"
			ref={hashRef}
			title="PasswordInput"
		>
			<section>
				<section className={styles.center}>
					<form autoComplete="off">
						<PasswordInput
							appearance={appearance}
							disabled={disabled}
							error={error && "Invalid password"}
							flex={flex}
							helper={helper ? "8 characters minimum" : undefined}
							id="password-input-example"
							label="Password"
							leadingIcon={leadingIcon && <MdFavorite />}
							ref={inputRef}
						/>
					</form>
				</section>
				<PasswordInputState state={state} />
			</section>
		</Card>
	);
}
