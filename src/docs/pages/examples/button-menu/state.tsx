import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

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

export const InputMenuState: FunctionComponent<{
	state: [ButtonMenuProps, Dispatch<SetStateAction<ButtonMenuProps>>];
}> = ({ state: [, setState] }) => {
	return (
		<aside>
			<form>
				<InputMenu<Appearance>
					defaultValue="Filled"
					flex
					id="input-menu-appearance"
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
};

export const options = [
	{ label: "Item One", value: "item-one" },
	{ label: "Item Two", value: "item-two" },
	{ label: "Item Three", value: "item-three" },
	{ separator: true },
	{ label: "Item Four", value: "item-four" },
	{ label: "Item Five", value: "item-five" },
	{ disabled: true, label: "Item Six", value: "item-six" },
	{ label: "Item Seven", value: "item-seven" },
	{ label: "Item Eight", value: "item-eight" },
	{ label: "Item Nine", value: "item-nine" },
	"Item Ten",
];
