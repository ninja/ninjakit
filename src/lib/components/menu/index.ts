import {
	flip,
	getOverflowAncestors,
	shift,
	useFloating,
} from "@floating-ui/react-dom";
import { classNames } from "ninjakit";
import {
	KeyboardEventHandler,
	MouseEventHandler,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

import { firstHTMLElementChild } from "../../util";
import styles from "./menu.module.css";

export type MenuOption =
	| string
	| {
			disabled?: boolean;
			leadingIcon?: ReactNode;
			onClick?: MouseEventHandler<HTMLButtonElement>;
			separator?: boolean;
			value?: string;
	  }
	| {
			separator: true;
	  };

export function useMenu<T>({
	classNameOverride,
	element,
	flex,
	id,
}: {
	flex?: boolean;
	id: string;
	classNameOverride?: string;
	element: "Button" | "Input";
}) {
	const [expanded, setExpanded] = useState(false);
	const refControl = useRef<T | null>(null);
	const { x, y, reference, floating, refs, strategy, update } = useFloating({
		middleware: [flip(), shift()],
		placement: "bottom-start",
	});
	useEffect(() => {
		if (!refs.floating.current) {
			return;
		}

		const parents = [...getOverflowAncestors(refs.floating.current)];

		parents.forEach((parent) => {
			parent.addEventListener("scroll", update);
			parent.addEventListener("resize", update);
		});

		return () => {
			parents.forEach((parent) => {
				parent.removeEventListener("scroll", update);
				parent.removeEventListener("resize", update);
			});
		};
	}, [refs.reference, refs.floating, update]);
	const handleClickControl = () => setExpanded(!expanded);
	const handleKeyDownControl: KeyboardEventHandler = (event) => {
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
					event.preventDefault();
					return firstHTMLElementChild(
						document.getElementById(menuId)
					)?.focus();
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
		className: classNames({
			[styles.fieldset]: true,
			[styles.flex]: flex,
			[element === "Button" ? styles.button : styles.input]: true,
			classNameOverride,
		}),
		expanded,
		handleClickControl,
		handleKeyDownControl,
		style: {
			left: x ?? "",
			position: strategy,
			top: y ?? "",
		},
		menuId,
		refControl,
		refFieldset: reference,
		refMenu: floating,
		setExpanded,
	};
}

export { ButtonMenu } from "./button";
export { InputMenu } from "./input";
