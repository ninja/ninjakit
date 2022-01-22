import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

type ButtonProps = {
	appearance: Appearance;
	disabled: boolean;
	leadingIcon: boolean;
	trailingIcon: boolean;
};

export function useButtonState() {
	return useState<ButtonProps>({
		appearance: "filled",
		disabled: false,
		leadingIcon: false,
		trailingIcon: false,
	});
}

export function ButtonState({
	state: [, setState],
}: {
	state: [ButtonProps, Dispatch<SetStateAction<ButtonProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu<Appearance>
					defaultValue="Filled"
					flex
					id="button-appearance"
					label="Appearance"
					onChange={(value) => {
						const appearance = value as Appearance;

						setState((state) => ({ ...state, appearance }));
					}}
					options={[
						{ label: "Elevated", value: "elevated" },
						{ label: "Filled", value: "filled" },
						{ label: "Tonal", value: "tonal" },
						{ label: "Outlined", value: "outlined" },
						{ label: "Text", value: "text" },
					]}
				></InputMenu>
				<Checkbox
					id="button-leading-icon-checkbox"
					label="Leading icon"
					onClick={() =>
						setState((state) => ({
							...state,
							leadingIcon: !state.leadingIcon,
						}))
					}
				/>
				<Checkbox
					id="button-trailing-icon-checkbox"
					label="Trailing icon"
					onClick={() =>
						setState((state) => ({
							...state,
							trailingIcon: !state.trailingIcon,
						}))
					}
				/>
				<Checkbox
					id="button-disabled-checkbox"
					label="Disabled"
					onClick={() =>
						setState((state) => ({
							...state,
							disabled: !state.disabled,
						}))
					}
				/>
			</form>
		</aside>
	);
}
