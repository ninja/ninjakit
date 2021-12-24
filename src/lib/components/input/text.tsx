import { forwardRef, InputHTMLAttributes } from "react";

import { InputProps, useClassName } from ".";
import styles from "./input.module.css";

export const TextInput = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement> & InputProps
>(function (
	{
		appearance,
		className: override,
		error,
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
		<label className={className}>
			{leadingIcon}
			<input
				{...props}
				aria-label={label}
				className={styles.input}
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
