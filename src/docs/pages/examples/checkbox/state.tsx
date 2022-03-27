import { Checkbox } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type CheckboxProps = {
	disabled: boolean;
	error: boolean;
	helper: boolean;
	indeterminate: boolean;
	labelWithJSX: boolean;
	warning: boolean;
};

export function useCheckboxState() {
	return useState<CheckboxProps>(
		import.meta.env.DEV
			? {
					disabled: false,
					error: true,
					helper: true,
					indeterminate: true,
					labelWithJSX: true,
					warning: true,
			  }
			: {
					disabled: false,
					error: false,
					helper: false,
					indeterminate: false,
					labelWithJSX: false,
					warning: false,
			  }
	);
}

export function CheckboxState({
	state: [
		{ disabled, error, helper, indeterminate, labelWithJSX, warning },
		setState,
	],
}: {
	state: [CheckboxProps, Dispatch<SetStateAction<CheckboxProps>>];
}) {
	return (
		<aside>
			<form>
				<Checkbox
					defaultChecked={labelWithJSX}
					label="Label with JSX"
					onClick={() =>
						setState((state) => ({
							...state,
							labelWithJSX: !labelWithJSX,
						}))
					}
				/>
				<Checkbox
					defaultChecked={indeterminate}
					label="Indeterminate"
					onClick={() =>
						setState((state) => ({
							...state,
							indeterminate: !indeterminate,
						}))
					}
				/>
				<Checkbox
					defaultChecked={helper}
					label="Helper"
					onClick={() =>
						setState((state) => ({
							...state,
							helper: !helper,
						}))
					}
				/>
				<Checkbox
					defaultChecked={warning}
					label="Warning"
					onClick={() =>
						setState((state) => ({
							...state,
							warning: !warning,
						}))
					}
				/>
				<Checkbox
					defaultChecked={error}
					label="Error"
					onClick={() =>
						setState((state) => ({
							...state,
							error: !error,
						}))
					}
				/>
				<Checkbox
					defaultChecked={disabled}
					label="Disabled"
					onClick={() =>
						setState((state) => ({
							...state,
							disabled: !disabled,
						}))
					}
				/>
			</form>
		</aside>
	);
}
