import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

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

export const ButtonState: FunctionComponent<{
	state: [ButtonProps, Dispatch<SetStateAction<ButtonProps>>];
}> = ({ state: [, setState] }) => {
	return (
		<aside>
			<form>
				<InputMenu<Appearance>
					defaultValue="Filled"
					id="appearance"
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
