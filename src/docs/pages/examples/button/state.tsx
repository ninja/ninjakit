import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

type Props = {
	appearance: Appearance;
	disabled: boolean;
	leadingIcon: boolean;
	trailingIcon: boolean;
};

export function useButtonState() {
	return useState<Props>({
		appearance: "filled",
		disabled: false,
		leadingIcon: false,
		trailingIcon: false,
	});
}

export function ButtonState({
	state: [, setState],
}: {
	state: [Props, Dispatch<SetStateAction<Props>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu
					defaultValue="filled"
					flex
					id="button-appearance"
					label="Appearance"
					onChange={(event) => {
						const appearance = event.currentTarget.value as Appearance;

						setState((state) => ({ ...state, appearance }));
					}}
					options={["elevated", "filled", "tonal", "outlined", "text"]}
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
