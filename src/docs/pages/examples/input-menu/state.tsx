import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";
import { MdFavorite } from "react-icons/md";

type Appearance = "filled" | "outlined";

type InputMenuProps = {
	appearance: Appearance;
	disabled: boolean;
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
};

export function useInputMenuState() {
	return useState<InputMenuProps>({
		appearance: "filled",
		disabled: false,
		error: false,
		flex: true,
		helper: false,
		leadingIcon: false,
	});
}

export function InputMenuState({
	state: [{ flex }, setState],
}: {
	state: [InputMenuProps, Dispatch<SetStateAction<InputMenuProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu
					defaultValue="filled"
					flex
					id="input-menu-appearance"
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

export const options = [
	"Item One",
	"Item Two",
	"Item Three",
	{ separator: true },
	"Item Four",
	"Item Five",
	{ disabled: true, value: "Item Six" },
	"Item Seven",
	{ leadingIcon: <MdFavorite />, value: "Item Eight" },
	"Item Nine",
	"Item Ten",
];
