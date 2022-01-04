import {
	Children,
	cloneElement,
	KeyboardEventHandler,
	MouseEventHandler,
	ReactElement,
} from "react";

import { MenuItemProps } from "./item";

export const mapMenuItems = ({
	children,
	handleClickMenuItem,
	handleKeyDownMenuItem,
}: {
	children: ReactElement<MenuItemProps>[];
	handleClickMenuItem: MouseEventHandler<HTMLButtonElement>;
	handleKeyDownMenuItem: KeyboardEventHandler<HTMLButtonElement>;
}) =>
	Children.map(children, (child) => {
		if (child.props.separator) return <hr aria-disabled />;

		return cloneElement(
			child,
			child.props.disabled
				? { "aria-disabled": true }
				: {
						onClick: handleClickMenuItem,
						onKeyDown: handleKeyDownMenuItem,
				  }
		);
	});
