import { Checkbox, Radioset } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

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
		flex: false,
		helper: false,
		leadingIcon: false,
		trailingIcon: false,
	});
}

export const TextInputState: FunctionComponent<{
	menu?: boolean;
	state: [TextInputProps, Dispatch<SetStateAction<TextInputProps>>];
}> = ({ menu, state: [{ appearance }, setState] }) => {
	return (
		<aside>
			<form>
				<Radioset<"filled" | "outlined">
					defaultValue={appearance}
					label="Appearance"
					name="appearance"
					onChange={(appearance) =>
						setState((state) => ({ ...state, appearance }))
					}
					options={["filled", "outlined"]}
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
				{!menu && (
					<Checkbox
						label="Trailing icon"
						onClick={() =>
							setState((state) => ({
								...state,
								trailingIcon: !state.trailingIcon,
							}))
						}
					/>
				)}

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
