import { Checkbox } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type CheckboxProps = {
	disabled: boolean;
	indeterminate: boolean;
	labelWithJSX: boolean;
};

export function useButtonState() {
	return useState<CheckboxProps>({
		disabled: false,
		indeterminate: false,
		labelWithJSX: false,
	});
}

export function CheckboxState({
	state: [, setState],
}: {
	state: [CheckboxProps, Dispatch<SetStateAction<CheckboxProps>>];
}) {
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
}