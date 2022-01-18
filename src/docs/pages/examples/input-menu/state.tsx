import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type Appearance = "filled" | "outlined";

type InputMenuProps = {
	appearance: Appearance;
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
};

export function useInputMenuState() {
	return useState<InputMenuProps>({
		appearance: "filled",
		error: false,
		flex: false,
		helper: false,
		leadingIcon: false,
	});
}

export const InputMenuState: FunctionComponent<{
	state: [InputMenuProps, Dispatch<SetStateAction<InputMenuProps>>];
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
