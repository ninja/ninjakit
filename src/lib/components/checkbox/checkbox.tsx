import { forwardRef, MouseEventHandler, useEffect, useRef } from "react";
import { MdCheck } from "react-icons/md";

import { CheckboxProps, useClassName } from ".";
import styles from "./checkbox.module.css";

/** @see https://material.io/components/checkbox */
export const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps & JSX.IntrinsicElements["input"]
>(function Checkbox(
	{
		children,
		className: override,
		disabled,
		error,
		helper,
		id,
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

		checkboxRef.current.checked = false;
		checkboxRef.current.indeterminate = indeterminate;
	}, [indeterminate]);

	return (
		<div className={className}>
			<label className={styles.label} htmlFor={id}>
				<input
					{...props}
					className={styles.input}
					disabled={disabled}
					id={id}
					name={name}
					onClick={handleClick}
					ref={ref || checkboxRef}
					type="checkbox"
				/>
				<MdCheck className={styles.check} />
				<span className={styles.children}>{children || label}</span>
			</label>
			{error && (
				<div className={styles.errorMessage} role="tooltip">
					{error}
				</div>
			)}
			{helper && (
				<div className={styles.helperMessage} role="tooltip">
					{helper}
				</div>
			)}
		</div>
	);
});
