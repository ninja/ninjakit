import { Card, InputMenu } from "ninjakit";
import { FunctionComponent } from "react";

import { useMenuItems } from "./menu-items";

export const InputMenuExamples: FunctionComponent = () => {
	const menuItems = useMenuItems();

	return (
		<Card appearance="elevated" id="menu" title="InputMenu">
			<section>
				<InputMenu
					label="Filled"
					onChange={({ currentTarget: { value } }) =>
						console.info("InputMenu", { value })
					}
				>
					{menuItems}
				</InputMenu>
				<InputMenu
					appearance="outlined"
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
