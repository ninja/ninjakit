import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type TextInputProps = {
	appearance: "filled" | "outlined";
	disabled: boolean;
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
	trailingIcon: boolean;
	warning: boolean;
};

export function useTextInputState() {
	return useState<TextInputProps>(
		import.meta.env.DEV
			? {
					appearance: "filled",
					disabled: false,
					error: true,
					flex: true,
					helper: true,
					leadingIcon: true,
					trailingIcon: true,
					warning: true,
			  }
			: {
					appearance: "filled",
					disabled: false,
					error: false,
					flex: true,
					helper: false,
					leadingIcon: false,
					trailingIcon: false,
					warning: false,
			  }
	);
}

export function TextInputState({
	state: [
		{ disabled, error, flex, helper, leadingIcon, trailingIcon, warning },
		setState,
	],
}: {
	state: [TextInputProps, Dispatch<SetStateAction<TextInputProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu<"filled" | "outlined">
					defaultValue="Filled"
					flex
					id="text-input-appearance"
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
					defaultChecked={trailingIcon}
					label="Trailing icon"
					onClick={() =>
						setState((state) => ({
							...state,
							trailingIcon: !state.trailingIcon,
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
					defaultChecked={warning}
					label="Warning message"
					onClick={() =>
						setState((state) => ({ ...state, warning: !state.warning }))
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
