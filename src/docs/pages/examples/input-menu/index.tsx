import { Card, InputMenu } from "ninjakit";
import { FunctionComponent } from "react";
import { MdFavorite } from "react-icons/md";

import { InputMenuState, options, useInputMenuState } from "./state";

export const InputMenuExamples: FunctionComponent = () => {
	const state = useInputMenuState();
	const [{ appearance, error, flex, helper, leadingIcon }] = state;

	return (
		<Card appearance="elevated" id="menu" title="InputMenu">
			<section>
				<section>
					<InputMenu
						appearance={appearance}
						error={error && "Error message"}
						flex={flex}
						helper={helper ? "Helper message" : undefined}
						id="input-menu-example"
						label="Filled"
						leadingIcon={leadingIcon && <MdFavorite />}
						onChange={(value) => console.info("InputMenu", { value })}
						options={options}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
};
