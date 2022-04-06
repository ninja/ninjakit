import { forwardRef, KeyboardEventHandler, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import {
	nextHTMLElementSibling,
	previousHTMLElementSibling,
	setNativeValue,
} from "../../util";
import { MenuOptions } from ".";
import styles from "./menu.module.css";

export const Menu = forwardRef<
	HTMLDivElement,
	{
		container?: HTMLElement;
		controlElement: HTMLInputElement | HTMLButtonElement | null;
		menuId: string;
		options: MenuOptions;
		setExpanded: (expanded: boolean) => void;
	} & JSX.IntrinsicElements["div"]
>(function Menu(
	{
		container = document.body,
		controlElement,
		menuId,
		options,
		setExpanded,
		...props
	},
	ref
) {
	const handleClickMenu: MouseEventHandler<HTMLDivElement> = () => {
		controlElement?.focus();

		setExpanded(false);
	};
	const handleClickMenuItem = (value: string) => {
		if (controlElement) {
			const event = new Event("change", { bubbles: true, cancelable: true });
			setNativeValue(controlElement, value);
			controlElement.dispatchEvent(event);
		}
	};
	const handleKeyDownMenu: KeyboardEventHandler = ({ key }) =>
		key === "Escape" && setExpanded(false);
	const handleKeyDownMenuItem: KeyboardEventHandler = (event) => {
		const { currentTarget, key, shiftKey } = event;
		switch (key) {
			case "Tab":
				if (shiftKey && currentTarget.previousElementSibling === null)
					return setExpanded(false);
				if (currentTarget.nextElementSibling === null)
					return setExpanded(false);
				break;
			case "Escape":
				setExpanded(false);

				return controlElement?.focus();
			case "ArrowDown":
				event.preventDefault();

				console.info("ArrowDown", nextHTMLElementSibling(currentTarget));

				return nextHTMLElementSibling(currentTarget)?.focus();
			case "ArrowUp":
				event.preventDefault();

				return previousHTMLElementSibling(currentTarget)?.focus();
		}
	};

	return createPortal(
		<div
			{...props}
			className={styles.menu}
			id={menuId}
			onClick={handleClickMenu}
			onKeyDown={handleKeyDownMenu}
			ref={ref}
			role="menu"
			tabIndex={-1}
		>
			{options.map((option, index) => {
				if (typeof option === "string")
					return (
						<button
							className={styles.option}
							key={`${index}-${option}`}
							onClick={() => handleClickMenuItem(option)}
							onKeyDown={handleKeyDownMenuItem}
							value={option}
						>
							{option}
						</button>
					);

				if (option.separator)
					return <hr aria-disabled className={styles.separator} key={index} />;

				const { disabled, leadingIcon, value } = option;

				if (value === undefined) return null;

				return (
					<button
						aria-disabled={disabled}
						className={styles.option}
						disabled={disabled}
						key={`${index}-${value}`}
						onClick={() => handleClickMenuItem(value)}
						onKeyDown={handleKeyDownMenuItem}
						value={value}
					>
						<>{leadingIcon}</>
						<>{value}</>
					</button>
				);
			})}
		</div>,
		container
	);
});
