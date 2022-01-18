import { ButtonMenu, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdMenu } from "react-icons/md";

import { InputMenuState, options, useButtonMenuState } from "./state";

export const ButtonMenuExamples: FunctionComponent = () => {
	const state = useButtonMenuState();
	const [{ appearance, disabled, leadingIcon }] = state;

	return (
		<Card appearance="elevated" id="button-menu" title="ButtonMenu">
			<section>
				<section>
					<ButtonMenu
						appearance={appearance}
						disabled={disabled}
						id="button-menu-example"
						label="Label"
						leadingIcon={leadingIcon ? <MdMenu /> : undefined}
						onChange={(value) => console.info("ButtonMenu", { value })}
						options={options}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
};
