import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

type Props = {
	appearance: Appearance;
	external: boolean;
	leadingIcon: boolean;
	reactRouterLink: boolean;
};

export function useAnchorButtonState() {
	return useState<Props>({
		appearance: "text",
		external: false,
		leadingIcon: false,
		reactRouterLink: false,
	});
}

export function AnchorButtonState({
	state: [, setState],
}: {
	state: [Props, Dispatch<SetStateAction<Props>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu
					defaultValue="text"
					flex
					id="anchor-button-appearance"
					label="Appearance"
					onChange={(event) => {
						const appearance = event.currentTarget.value as Appearance;

						setState((state) => ({ ...state, appearance }));
					}}
					options={["elevated", "filled", "tonal", "outlined", "text"]}
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
}
