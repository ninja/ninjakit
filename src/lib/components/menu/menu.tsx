import { MenuOption } from "ninjakit";
import { forwardRef, KeyboardEventHandler, MouseEventHandler } from "react";
import { createPortal } from "react-dom";

import {
	nextHTMLElementSibling,
	previousHTMLElementSibling,
	setNativeValue,
} from "../../util";
import styles from "./menu.module.css";

export type ButtonChangeHandler = (event: {
	currentTarget: { value: string };
}) => void;

export const Menu = forwardRef<
	HTMLDivElement,
	{
		container?: HTMLElement;
		controlElement: HTMLInputElement | HTMLButtonElement | null;
		menuId: string;
		onClick?: MouseEventHandler<HTMLButtonElement>;
		options: MenuOption[];
		setExpanded: (expanded: boolean) => void;
	} & Omit<JSX.IntrinsicElements["div"], "onClick">
>(function Menu(
	{
		container = document.body,
		controlElement,
		menuId,
		onClick,
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
	const handleClickMenuItem: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (controlElement instanceof HTMLButtonElement && onClick) onClick(event);
		if (controlElement instanceof HTMLInputElement) {
			const changeEvent = new Event("change", {
				bubbles: true,
				cancelable: true,
			});
			setNativeValue(controlElement, event.currentTarget.value);
			controlElement.dispatchEvent(changeEvent);
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
							onClick={handleClickMenuItem}
							onKeyDown={handleKeyDownMenuItem}
							value={option}
						>
							{option}
						</button>
					);

				if (option.separator)
					return <hr aria-disabled className={styles.separator} key={index} />;

				const { disabled, leadingIcon, onClick, value } = option;

				if (value === undefined) return null;

				return (
					<button
						aria-disabled={disabled}
						className={styles.option}
						disabled={disabled}
						key={`${index}-${value}`}
						onClick={(event) => {
							if (onClick) onClick(event);
							handleClickMenuItem(event);
						}}
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
