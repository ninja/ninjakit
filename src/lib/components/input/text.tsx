import { forwardRef } from "react";

import { InputProps, useClassName } from ".";
import styles from "./input.module.css";

export const TextInput = forwardRef<
	HTMLInputElement,
	Omit<JSX.IntrinsicElements["input"], "id"> & InputProps
>(function (
	{
		appearance,
		"aria-expanded": ariaExpanded,
		"aria-invalid": ariaInvalid,
		className: override,
		error,
		helper,
		id,
		label,
		leadingIcon,
		name,
		onClickTrailingIcon: handleClick,
		trailingIcon,
		type = "text",
		...props
	},
	ref
) {
	const className = useClassName({ appearance, error, leadingIcon, override });

	return (
		<div aria-expanded={ariaExpanded} className={className}>
			<div className={styles.row}>
				{leadingIcon}
				<input
					{...props}
					aria-invalid={ariaInvalid || typeof error !== "undefined"}
					className={styles.input}
					id={id}
					name={name}
					placeholder={typeof label === "string" ? label : name || id}
					ref={ref}
					type={type}
				/>
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
				{trailingIcon && (
					<button
						className={styles.button}
						onClick={() => handleClick && handleClick()}
						type="button"
					>
						{trailingIcon}
					</button>
				)}
			</div>
			{typeof error !== "undefined" && (
				<div className={styles.errorMessage} role="tooltip">
					{error}
				</div>
			)}
			{typeof helper !== "undefined" && (
				<div className={styles.helperMessage} role="tooltip">
					{helper}
				</div>
			)}
		</div>
	);
});

TextInput.displayName = "TextInput";
