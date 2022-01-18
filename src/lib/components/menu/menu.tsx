import { KeyboardEventHandler, MouseEvent, ReactNode } from "react";

import { nextHTMLElementSibling, previousHTMLElementSibling } from "../../util";
import { Options } from ".";
import styles from "./menu.module.css";

export function Menu<T extends string>({
	input,
	menuId,
	onChange,
	options,
	setExpanded,
}: {
	input?: boolean;
	menuId: string;
	onChange?: (value: T) => void;
	options: Options<T>;
	setExpanded: (expanded: boolean) => void;
}) {
	const handleClickMenu = () => setExpanded(false);
	const handleClickMenuItem = ({
		event,
		label,
		value,
	}: {
		event: MouseEvent<HTMLButtonElement>;
		label?: ReactNode;
		value: T;
	}) => {
		if (onChange) onChange(event.currentTarget.value as T);

		const element = input
			? event.currentTarget.parentElement?.previousElementSibling?.querySelector(
					"input"
			  )
			: (event.currentTarget.parentElement
					?.previousElementSibling as HTMLButtonElement);

		if (element) {
			element.value = typeof label === "string" ? label : value;
			element.focus();
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

				return previousHTMLElementSibling(currentTarget.parentElement)?.focus();
			case "ArrowDown":
				event.preventDefault();

				return nextHTMLElementSibling(currentTarget)?.focus();
			case "ArrowUp":
				event.preventDefault();

				return previousHTMLElementSibling(currentTarget)?.focus();
		}
	};

	return (
		<div
			className={styles.menu}
			id={menuId}
			onClick={handleClickMenu}
			onKeyDown={handleKeyDownMenu}
			role="menu"
			tabIndex={-1}
		>
			{options.map((option, index) => {
				if (typeof option === "string")
					return (
						<button
							className={styles.option}
							key={`${index}-${option}`}
							onClick={(event) => handleClickMenuItem({ event, value: option })}
							onKeyDown={handleKeyDownMenuItem}
							value={option}
						>
							{option}
						</button>
					);

				if (option.separator)
					return <hr aria-disabled className={styles.separator} key={index} />;

				const { disabled, label, value } = option;

				if (value === undefined) return null;

				return (
					<button
						aria-disabled={disabled}
						className={styles.option}
						disabled={disabled}
						key={`${index}-${value}`}
						onClick={(event) => handleClickMenuItem({ event, label, value })}
						onKeyDown={handleKeyDownMenuItem}
						value={value}
					>
						{label || value}
					</button>
				);
			})}
		</div>
	);
}
