import { Card, InputMenu } from "ninjakit";
import { FunctionComponent } from "react";

import { useMenuItems } from "./menu-items";

export const InputMenuExamples: FunctionComponent = () => {
	const menuItems = useMenuItems();

	return (
		<Card appearance="elevated" id="menu" title="InputMenu">
			<section>
				<InputMenu
					id="input-menu-elevated"
					label="Filled"
					onChange={({ currentTarget: { value } }) =>
						console.info("InputMenu", { value })
					}
				>
					{menuItems}
				</InputMenu>
				<InputMenu
					appearance="outlined"
					id="input-menu-outlined"
					label="Outlined"
					onChange={({ currentTarget: { value } }) =>
						console.info("InputMenu", { value })
					}
				>
					{menuItems}
				</InputMenu>
			</section>
		</Card>
	);
};
