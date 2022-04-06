import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type Appearance = "filled" | "outlined";

type PasswordInputProps = {
	appearance: Appearance;
	disabled: boolean;
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
	warning: boolean;
};

export function usePasswordInputState() {
	return useState<PasswordInputProps>(
		import.meta.env.DEV
			? {
					appearance: "filled",
					disabled: false,
					error: true,
					flex: true,
					helper: true,
					leadingIcon: true,
					warning: true,
			  }
			: {
					appearance: "filled",
					disabled: false,
					error: false,
					flex: true,
					helper: true,
					leadingIcon: false,
					warning: false,
			  }
	);
}

export function PasswordInputState({
	state: [{ disabled, error, flex, helper, leadingIcon, warning }, setState],
}: {
	state: [PasswordInputProps, Dispatch<SetStateAction<PasswordInputProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu
					defaultValue="filled"
					flex
					id="password-input-appearance"
					label="Appearance"
					name="appearance"
					onChange={(event) =>
						setState((state) => ({
							...state,
							appearance: event.currentTarget.value as Appearance,
						}))
					}
					options={["filled", "outlined"]}
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
					defaultChecked={leadingIcon}
					label="Leading icon"
					onClick={() =>
						setState((state) => ({
							...state,
							leadingIcon: !state.leadingIcon,
						}))
					}
				/>
				<Checkbox
					defaultChecked={warning}
					label="Warning message"
					onClick={() =>
						setState((state) => ({ ...state, warning: !state.warning }))
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
					defaultChecked={error}
					label="Error message"
					onClick={() =>
						setState((state) => ({ ...state, error: !state.error }))
					}
				/>
				<Checkbox
					defaultChecked={disabled}
					label="Disabled"
					onClick={() =>
						setState((state) => ({ ...state, disabled: !state.disabled }))
					}
				/>
			</form>
		</aside>
	);
}
