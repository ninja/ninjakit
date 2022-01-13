import { TextInput } from "ninjakit";
import { forwardRef, ReactElement } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { InputProps } from "../input";
import { useMenu } from ".";
import { MenuItemProps } from "./item";
import { mapMenuItems } from "./items";
import styles from "./menu.module.css";

export const InputMenu = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"] &
		InputProps & { children: ReactElement<MenuItemProps>[] }
>(function (
	{ children, className: override, id, onChange, readOnly = true, ...props },
	ref
) {
	const {
		className,
		expanded,
		handleClickControl,
		handleClickMenu,
		handleClickMenuItem,
		handleFocusControl,
		handleKeyDownControl,
		handleKeyDownMenu,
		handleKeyDownMenuItem,
	} = useMenu({ input: true, onChange, override });
	const menuItems = mapMenuItems({
		children,
		handleClickMenuItem,
		handleKeyDownMenuItem,
	});
	const menuId = `${id}-menu`;

	return (
		<div className={styles.container} role="presentation">
			<TextInput
				{...props}
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
				className={styles.control}
				id={id}
				onClickTrailingIcon={handleClickControl}
				onFocus={handleFocusControl}
				onKeyDown={handleKeyDownControl}
				readOnly={readOnly}
				ref={ref}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			/>
			{expanded && (
				<div
					className={className}
					id={menuId}
					onClick={handleClickMenu}
					onKeyDown={handleKeyDownMenu}
					role="menu"
					tabIndex={-1}
				>
					{menuItems}
				</div>
			)}
		</div>
	);
});

InputMenu.displayName = "InputMenu";
