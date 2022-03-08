import { classNames } from "ninjakit";
import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";

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
	id,
	indeterminate,
	onClick,
}: CheckboxProps) {
	const ref = useRef<HTMLInputElement | null>(null);

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
			[styles.checkbox]: true,
			[styles.disabled]: !!disabled,
			[styles.error]: !!error,
			className,
		}),
	};

	const labelProps: JSX.IntrinsicElements["label"] = {
		className: styles.label,
		htmlFor: id,
	};

	const inputProps: JSX.IntrinsicElements["input"] = {
		className: styles.input,
		disabled,
		onClick: handleClick,
	};

	return { checkboxProps, inputProps, labelProps, ref };
}

export { Checkbox } from "./checkbox";
