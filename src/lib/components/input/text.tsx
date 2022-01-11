import { forwardRef } from "react";

import { InputProps, useClassName } from ".";
import styles from "./input.module.css";

export const TextInput = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"] & InputProps
>(function (
	{
		appearance,
		"aria-expanded": ariaExpanded,
		className: override,
		error,
		id,
		label,
		leadingIcon,
		onClickTrailingIcon: handleClick,
		trailingIcon,
		type = "text",
		...props
	},
	ref
) {
	const className = useClassName({ appearance, error, leadingIcon, override });

	return (
		<label aria-expanded={ariaExpanded} className={className} htmlFor={id}>
			<>{leadingIcon}</>
			<input
				{...props}
				aria-label={label}
				className={styles.input}
				id={id}
				placeholder={label}
				ref={ref}
				type={type}
			/>
			<div className={styles.label} role="presentation">
				{label}
			</div>
			{trailingIcon && (
				<button
					className={styles.button}
					onClick={() => handleClick && handleClick()}
					type="button"
				>
					{trailingIcon}
				</button>
			)}
			{typeof error === "string" && (
				<div className={styles.error} role="presentation">
					{error}
				</div>
			)}
		</label>
	);
});

TextInput.displayName = "TextInput";
