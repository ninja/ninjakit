import { ButtonMenu, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdMenu } from "react-icons/md";

import { useMenuItems } from "./menu-items";

export const ButtonMenuExamples: FunctionComponent = () => {
	const menuItems = useMenuItems();

	return (
		<Card appearance="elevated" id="button-menu" title="ButtonMenu">
			<section>
				<ButtonMenu
					label="Filled"
					onChange={({ currentTarget: { value } }) =>
						console.info("ButtonMenu", { value })
					}
				>
					{menuItems}
				</ButtonMenu>
				<ButtonMenu
					appearance="text"
					label="Text"
					onChange={({ currentTarget: { value } }) =>
						console.info("ButtonMenu", { value })
					}
				>
					{menuItems}
				</ButtonMenu>
				<ButtonMenu
					appearance="text"
					leadingIcon={<MdMenu />}
					onChange={({ currentTarget: { value } }) =>
						console.info("ButtonMenu", { value })
					}
				>
					{menuItems}
				</ButtonMenu>
			</section>
		</Card>
	);
};
