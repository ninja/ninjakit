import { forwardRef, MouseEventHandler, useEffect, useRef } from "react";
import { MdCheck } from "react-icons/md";

import { CheckboxProps, useClassName } from ".";
import styles from "./checkbox.module.css";

/** @see https://material.io/components/checkbox */
export const Checkbox = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"] & CheckboxProps
>(function Checkbox(
	{
		children,
		className: override,
		disabled,
		indeterminate,
		label,
		name,
		onClick,
		...props
	},
	ref
) {
	const className = useClassName({ disabled, override });
	const checkboxRef = useRef<HTMLInputElement>(null);

	const handleClick: MouseEventHandler<HTMLInputElement> = (event) => {
		if (onClick) return onClick(event);

		if (checkboxRef.current === null) return;

		checkboxRef.current.indeterminate = false;
	};

	useEffect(() => {
		if (checkboxRef.current === null || indeterminate === undefined) return;

		checkboxRef.current.indeterminate = indeterminate;
	}, [indeterminate]);

	return (
		<label className={className}>
			<input
				{...props}
				className="nk"
				disabled={disabled}
				name={name}
				onClick={handleClick}
				ref={ref || checkboxRef}
				type="checkbox"
			/>
			<MdCheck className={styles.check} />
			{children || label}
		</label>
	);
});
