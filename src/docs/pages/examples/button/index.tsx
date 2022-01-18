import { Button, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

import { ButtonState, useButtonState } from "./state";

export const ButtonExamples: FunctionComponent = () => {
	const state = useButtonState();
	const [{ appearance, disabled, leadingIcon, trailingIcon }] = state;

	return (
		<Card appearance="elevated" id="button" title="Button">
			<section>
				<section>
					<Button
						appearance={appearance}
						disabled={disabled}
						label="Label"
						leadingIcon={leadingIcon && <MdThumbUp />}
						trailingIcon={trailingIcon && <MdArrowDropDown />}
					/>
				</section>
				<ButtonState state={state} />
			</section>
		</Card>
	);
};
