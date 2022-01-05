import {
	FormEventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
	useState,
} from "react";

import {
	firstHTMLElementChild,
	nextHTMLElementSibling,
	previousHTMLElementSibling,
} from "../../util";
import typography from "../typography/typography.module.css";
import styles from "./menu.module.css";

export function useMenu({
	input,
	onChange,
	override,
}: {
	input?: true;
	onChange?: FormEventHandler<HTMLElement>;
	override?: string;
}) {
	const className = [
		styles.menu,
		input ? styles.input : undefined,
		typography.labelLarge,
		override,
	].join(" ");

	const [expanded, setExpanded] = useState(false);

	const handleClickControl = () => setExpanded(!expanded);
	const handleClickMenu = () => setExpanded(false);
	const handleClickMenuItem: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (onChange) onChange(event);

		const element = input
			? event.currentTarget.parentElement?.previousElementSibling?.querySelector(
					"input"
			  )
			: (event.currentTarget.parentElement
					?.previousElementSibling as HTMLButtonElement);

		if (element) {
			element.value = event.currentTarget.value;
			element.focus();
		}
	};
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

	return {
		className,
		handleClickControl,
		handleClickMenu,
		handleClickMenuItem,
		handleFocusControl,
		handleKeyDownControl,
		handleKeyDownMenu,
		handleKeyDownMenuItem,
		expanded,
	};
}

export { ButtonMenu } from "./button";
export { InputMenu } from "./input";
export { MenuItem } from "./item";
