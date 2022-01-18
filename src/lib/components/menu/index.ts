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
	const handleFocusControl = () => setExpanded(true);
	const handleKeyDownControl: KeyboardEventHandler = (event) => {
		if (!expanded) return;

		const element = input
			? event.currentTarget.parentElement
			: event.currentTarget;

		switch (event.key) {
			case "Escape":
				return setExpanded(false);
			case "ArrowDown":
				event.preventDefault();

				if (element === null) return;

				return firstHTMLElementChild(element.nextElementSibling)?.focus();
		}
	};
	const menuId = `${id}-menu`;

	return {
		className,
		expanded,
		handleClickControl,
		handleFocusControl,
		handleKeyDownControl,
		menuId,
		setExpanded,
	};
}

export { ButtonMenu } from "./button";
export { InputMenu } from "./input";
