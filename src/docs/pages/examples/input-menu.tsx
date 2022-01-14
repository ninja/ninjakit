import { Card, InputMenu } from "ninjakit";
import { FunctionComponent } from "react";
import { MdFavorite } from "react-icons/md";

import { useMenuItems } from "./menu-items";
import { TextInputState, useTextInputState } from "./text-input-state";

export const InputMenuExamples: FunctionComponent = () => {
	const menuItems = useMenuItems();
	const state = useTextInputState();
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
						onChange={({ currentTarget: { value } }) =>
							console.info("InputMenu", { value })
						}
					>
						{menuItems}
					</InputMenu>
				</section>
				<TextInputState menu state={state} />
			</section>
		</Card>
	);
};
