import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

type ButtonMenuProps = {
	appearance: Appearance;
	disabled: boolean;
	leadingIcon: boolean;
};

export function useButtonMenuState() {
	return useState<ButtonMenuProps>({
		appearance: "filled",
		disabled: false,
		leadingIcon: false,
	});
}

export function InputMenuState({
	state: [, setState],
}: {
	state: [ButtonMenuProps, Dispatch<SetStateAction<ButtonMenuProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu
					defaultValue="filled"
					flex
					id="button-menu-appearance"
					label="Appearance"
					name="appearance"
					onChange={(event) =>
						setState((state) => ({
							...state,
							appearance: event.currentTarget.value as Appearance,
						}))
					}
					options={["elevated", "filled", "tonal", "outlined", "text"]}
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

export const options = [
	"Item One",
	"Item Two",
	"Item Three",
	{ separator: true },
	"Item Four",
	"Item Five",
	{ disabled: true, value: "Item Six" },
	"Item Seven",
	"Item Eight",
	"Item Nine",
	"Item Ten",
];
