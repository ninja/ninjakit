import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

type ButtonProps = {
	appearance: Appearance;
	external: boolean;
	leadingIcon: boolean;
	reactRouterLink: boolean;
};

export function useButtonState() {
	return useState<ButtonProps>({
		appearance: "text",
		external: false,
		leadingIcon: false,
		reactRouterLink: false,
	});
}

export const ButtonState: FunctionComponent<{
	state: [ButtonProps, Dispatch<SetStateAction<ButtonProps>>];
}> = ({ state: [, setState] }) => {
	return (
		<aside>
			<form>
				<InputMenu<Appearance>
					defaultValue="Text"
					flex
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
					label="External target"
					onClick={() =>
						setState((state) => ({
							...state,
							external: !state.external,
						}))
					}
				/>
				<Checkbox
					label="React Router Link"
					onClick={() =>
						setState((state) => ({
							...state,
							reactRouterLink: !state.reactRouterLink,
						}))
					}
				/>
			</form>
		</aside>
	);
};
