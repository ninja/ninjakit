import { Checkbox } from "ninjakit";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";

type ButtonProps = {
	disabled: boolean;
	indeterminate: boolean;
	labelWithJSX: boolean;
};

export function useButtonState() {
	return useState<ButtonProps>({
		disabled: false,
		indeterminate: false,
		labelWithJSX: false,
	});
}

export const CheckboxState: FunctionComponent<{
	state: [ButtonProps, Dispatch<SetStateAction<ButtonProps>>];
}> = ({ state: [, setState] }) => {
	return (
		<aside>
			<form>
				<Checkbox
					label="Label with JSX"
					onClick={() =>
						setState((state) => ({
							...state,
							labelWithJSX: !state.labelWithJSX,
						}))
					}
				/>
				<Checkbox
					label="Indeterminate"
					onClick={() =>
						setState((state) => ({
							...state,
							indeterminate: !state.indeterminate,
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
