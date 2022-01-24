import {
	ForwardedRef,
	forwardRef,
	KeyboardEventHandler,
	MouseEvent,
	MouseEventHandler,
	ReactNode,
} from "react";

import { nextHTMLElementSibling, previousHTMLElementSibling } from "../../util";
import { Options } from ".";
import styles from "./menu.module.css";

declare module "react" {
	function forwardRef<T, P>(
		render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
	): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export const Menu = forwardRef(function Menu<T extends string>(
	{
		input,
		menuId,
		onChange,
		options,
		setExpanded,
		...props
	}: {
		input?: boolean;
		menuId: string;
		onChange?: (value: T) => void;
		options: Options<T>;
		setExpanded: (expanded: boolean) => void;
	} & Omit<JSX.IntrinsicElements["div"], "onChange">,
	ref: ForwardedRef<HTMLDivElement>
) {
	const handleClickMenu: MouseEventHandler<HTMLDivElement> = (event) => {
		const { previousElementSibling } = event.currentTarget;
		const element = input
			? (previousElementSibling?.querySelector("input") as HTMLInputElement)
			: (previousElementSibling as HTMLButtonElement);

		element.focus();

		setExpanded(false);
	};
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
});
