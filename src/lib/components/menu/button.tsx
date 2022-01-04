import { Button } from "ninjakit";
import { forwardRef, ReactElement } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { ButtonProps } from "../button";
import { useMenu } from ".";
import type { MenuItemProps } from "./item";
import { mapMenuItems } from "./items";
import styles from "./menu.module.css";

export const ButtonMenu = forwardRef<
	HTMLButtonElement,
	Omit<JSX.IntrinsicElements["button"], "value"> &
		ButtonProps & { children: ReactElement<MenuItemProps>[] }
>(function ({ children, className: override, label, onChange, ...props }, ref) {
	const {
		className,
		expanded,
		handleClickControl,
		handleClickMenu,
		handleClickMenuItem,
		handleKeyDownControl,
		handleKeyDownMenu,
		handleKeyDownMenuItem,
		id,
	} = useMenu({
		onChange,
		override,
	});

	const menuItems = mapMenuItems({
		children,
		handleClickMenuItem,
		handleKeyDownMenuItem,
	});

	return (
		<div className={styles.container} role="presentation">
			<Button
				{...props}
				aria-controls={id}
				aria-expanded={expanded}
				aria-haspopup="menu"
				className={styles.control}
				onClick={handleClickControl}
				onKeyDown={handleKeyDownControl}
				ref={ref}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			>
				{label}
			</Button>
			{expanded && (
				<div
					className={className}
					id={id}
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

ButtonMenu.displayName = "ButtonMenu";
