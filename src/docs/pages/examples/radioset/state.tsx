import { Checkbox } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type RadiosetProps = {
	disabled: boolean;
};

export function useRadiosetState() {
	return useState<RadiosetProps>({
		disabled: false,
	});
}

export function RadiosetState({
	state: [, setState],
}: {
	state: [RadiosetProps, Dispatch<SetStateAction<RadiosetProps>>];
}) {
	return (
		<aside>
			<form>
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
