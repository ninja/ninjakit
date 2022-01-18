import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type TextInputProps = {
	appearance: "filled" | "outlined";
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
	trailingIcon: boolean;
};

export function useTextInputState() {
	return useState<TextInputProps>({
		appearance: "filled",
		error: false,
		flex: false,
		helper: false,
		leadingIcon: false,
		trailingIcon: false,
	});
}

export const TextInputState: FunctionComponent<{
	state: [TextInputProps, Dispatch<SetStateAction<TextInputProps>>];
}> = ({ state: [, setState] }) => {
	return (
		<aside>
			<form>
				<InputMenu<"filled" | "outlined">
					defaultValue="Filled"
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
					label="Trailing icon"
					onClick={() =>
						setState((state) => ({
							...state,
							trailingIcon: !state.trailingIcon,
						}))
					}
				/>
				<Checkbox
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
			</form>
		</aside>
	);
};
