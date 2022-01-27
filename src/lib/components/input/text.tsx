import { forwardRef } from "react";

import { InputProps, useClassName } from ".";
import styles from "./input.module.css";

export const TextInput = forwardRef<
	HTMLInputElement,
	InputProps & Omit<JSX.IntrinsicElements["input"], "id">
>(function TextInput(
	{
		appearance,
		"aria-expanded": ariaExpanded,
		"aria-invalid": ariaInvalid,
		className: override,
		disabled,
		error,
		flex,
		helper,
		id,
		label,
		leadingIcon,
		onClickTrailingIcon: handleClickTrailingIcon,
		placeholder,
		trailingIcon,
		type = "text",
		...props
	},
	ref
) {
	const className = useClassName({
		appearance,
		disabled,
		error,
		flex,
		leadingIcon,
		override,
		trailingIcon,
	});

	return (
		<div aria-expanded={ariaExpanded} className={className}>
			<div className={styles.row}>
				{leadingIcon}
				<input
					{...props}
					aria-invalid={ariaInvalid || !!error}
					className={styles.input}
					disabled={disabled}
					id={id}
					placeholder={
						placeholder || typeof label === "string"
							? (label as string)
							: undefined
					}
					ref={ref}
					type={type}
				/>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				{trailingIcon && (
					<button
						className={styles.button}
						onClick={handleClickTrailingIcon}
						type="button"
					>
						{trailingIcon}
					</button>
				)}
			</div>
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
