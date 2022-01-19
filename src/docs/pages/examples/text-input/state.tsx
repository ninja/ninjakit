import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

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
		flex: true,
		helper: false,
		leadingIcon: false,
		trailingIcon: false,
	});
}

export function TextInputState({
	state: [{ flex }, setState],
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
}
