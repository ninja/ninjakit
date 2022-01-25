import { Checkbox, InputMenu } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type PasswordInputProps = {
	appearance: "filled" | "outlined";
	error: boolean;
	flex: boolean;
	helper: boolean;
	leadingIcon: boolean;
};

export function usePasswordInputState() {
	return useState<PasswordInputProps>({
		appearance: "filled",
		error: false,
		flex: true,
		helper: false,
		leadingIcon: false,
	});
}

export function PasswordInputState({
	state: [{ flex }, setState],
}: {
	state: [PasswordInputProps, Dispatch<SetStateAction<PasswordInputProps>>];
}) {
	return (
		<aside>
			<form>
				<InputMenu<"filled" | "outlined">
					defaultValue="Filled"
					flex
					id="password-input-appearance"
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
			</form>
		</aside>
	);
}
