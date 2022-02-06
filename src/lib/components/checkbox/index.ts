import { classNames } from "ninjakit";
import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";

import typography from "../typography/typography.module.css";
import styles from "./checkbox.module.css";

export type CheckboxProps = {
	error?: ReactNode;
	helper?: ReactNode;
	indeterminate?: boolean;
	label?: ReactNode;
} & JSX.IntrinsicElements["input"];

export function useCheckbox({
	className,
	disabled,
	error,
	indeterminate,
	onClick,
}: CheckboxProps) {
	const ref = useRef<HTMLInputElement>(null);

	const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
		if (onClick) return onClick(event);

		if (ref.current === null) return;

		ref.current.indeterminate = false;
	};

	useEffect(() => {
		if (ref.current === null || indeterminate === undefined) return;

		ref.current.checked = false;
		ref.current.indeterminate = indeterminate;
	}, [indeterminate]);

	const checkboxProps: JSX.IntrinsicElements["div"] = {
		className: classNames({
			[typography.labelLarge]: true,
			[styles.checkbox]: true,
			[styles.disabled]: !!disabled,
			[styles.error]: !!error,
			className: !!className,
		}),
	};

	const inputProps: JSX.IntrinsicElements["input"] = {
		className: styles.input,
		disabled,
		onClick: handleClick,
		ref,
	};

	return { checkboxProps, inputProps };
}

export { Checkbox } from "./checkbox";
