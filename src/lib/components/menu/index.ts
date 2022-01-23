import { KeyboardEventHandler, ReactNode, useState } from "react";

import { firstHTMLElementChild } from "../../util";
import styles from "./menu.module.css";

export type Options<T extends string = string> = (
	| T
	| {
			disabled?: boolean;
			label?: ReactNode;
			separator?: boolean;
			value?: T;
	  }
	| {
			separator: true;
	  }
)[];

export function useMenu({
	flex,
	id,
	input,
	override,
}: {
	flex?: boolean;
	id: string;
	input?: true;
	override?: string;
}) {
	const className = [
		styles.fieldset,
		flex ? styles.flex : undefined,
		input ? styles.input : styles.button,
		override,
	].join(" ");
	const [expanded, setExpanded] = useState(false);
	const handleClickControl = () => setExpanded(!expanded);
	const handleKeyDownControl: KeyboardEventHandler = (event) => {
		const element = input
			? event.currentTarget.parentElement?.parentElement || null
			: event.currentTarget;

		if (expanded)
			switch (event.key) {
				case " ":
				case "Enter":
				case "Escape":
					event.preventDefault();
					return setExpanded(false);
				case "ArrowUp":
					return event.preventDefault();
				case "ArrowDown":
				case "Tab":
					if (element === null) return;
					event.preventDefault();
					return firstHTMLElementChild(element.nextElementSibling)?.focus();
				default:
					return;
			}

		switch (event.key) {
			case " ":
			case "Enter":
				event.preventDefault();
				return setExpanded(true);
		}
	};
	const menuId = `${id}-menu`;

	return {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		setExpanded,
	};
}

export { ButtonMenu } from "./button";
export { InputMenu } from "./input";
