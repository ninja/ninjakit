import {
	flip,
	getOverflowAncestors,
	shift,
	useFloating,
} from "@floating-ui/react-dom";
import { classNames } from "ninjakit";
import { KeyboardEventHandler, ReactNode, useEffect, useState } from "react";

import { firstHTMLElementChild } from "../../util";
import styles from "./menu.module.css";

export type MenuOptions<T extends string = string> = (
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
	classNameOverride,
	flex,
	id,
	input,
}: {
	flex?: boolean;
	id: string;
	input?: true;
	classNameOverride?: string;
}) {
	const [expanded, setExpanded] = useState(false);
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
			[input ? styles.input : styles.button]: true,
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
		refControl: reference,
		refMenu: floating,
		setExpanded,
	};
}

export { ButtonMenu } from "./button";
export { InputMenu } from "./input";
