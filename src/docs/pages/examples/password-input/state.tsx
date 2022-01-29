import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type PasswordInputProps = {
	appearance: "filled" | "outlined";
	disabled: boolean;
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
	passwordRules: boolean;
};

export function usePasswordInputState() {
	return useState<PasswordInputProps>({
		appearance: "filled",
		disabled: false,
		error: false,
		flex: true,
		helper: true,
		leadingIcon: false,
		passwordRules: true,
	});
}

export function PasswordInputState({
	state: [{ flex, helper, passwordRules }, setState],
}: {
	state: [PasswordInputProps, Dispatch<SetStateAction<PasswordInputProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu<"filled" | "outlined">
					defaultValue="Filled"
					flex
					id="password-input-appearance"
					label="Appearance"
					name="appearance"
					onChange={(appearance) =>
						setState((state) => ({ ...state, appearance }))
					}
					options={[
						{ label: "Filled", value: "filled" },
						{ label: "Outlined", value: "outlined" },
					]}
				/>
				<Checkbox
					defaultChecked={flex}
					label="Flexible width"
					onClick={() =>
						setState((state) => ({
							...state,
							flex: !state.flex,
						}))
					}
				/>
				<Checkbox
					label="Leading icon"
					onClick={() =>
						setState((state) => ({
							...state,
							leadingIcon: !state.leadingIcon,
						}))
					}
				/>
				<Checkbox
					defaultChecked={passwordRules}
					label="Password rules"
					onClick={() =>
						setState((state) => ({
							...state,
							passwordRules: !state.passwordRules,
						}))
					}
				/>
				<Checkbox
					defaultChecked={helper}
					label="Helper message"
					onClick={() =>
						setState((state) => ({ ...state, helper: !state.helper }))
					}
				/>
				<Checkbox
					label="Error message"
					onClick={() =>
						setState((state) => ({ ...state, error: !state.error }))
					}
				/>
				<Checkbox
					label="Disabled"
					onClick={() =>
						setState((state) => ({ ...state, disabled: !state.disabled }))
					}
				/>
			</form>
		</aside>
	);
}
