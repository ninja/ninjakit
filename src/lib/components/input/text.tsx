import { classNames } from "ninjakit";
import { forwardRef } from "react";

import { Tooltip } from "../tooltip.tsx";
import { InputProps } from ".";
import styles from "./input.module.css";

export const TextInput = forwardRef<
	HTMLInputElement,
	InputProps & Omit<JSX.IntrinsicElements["input"], "id">
>(function TextInput(
	{
		appearance = "filled",
		"aria-expanded": ariaExpanded,
		"aria-invalid": ariaInvalid,
		className,
		disabled,
		error,
		flex,
		helper,
		hidden,
		id,
		label,
		leadingIcon,
		onClickTrailingIcon: handleClickTrailingIcon,
		placeholder,
		trailingIcon,
		type = "text",
		warning,
		...props
	},
	ref
) {
	return (
		<div
			aria-expanded={ariaExpanded}
			className={classNames({
				[styles.field]: true,
				[styles[appearance]]: true,
				[styles.flex]: flex,
				[styles.leadingIcon]: !!leadingIcon,
				[styles.trailingIcon]: !!trailingIcon,
				[styles.disabled]: disabled,
				[styles.warning]: !!warning,
				[styles.error]: !!error,
				[styles.hidden]: !!hidden,
				className,
			})}
		>
			<div className={styles.row}>
				{leadingIcon && <>{leadingIcon}</>}
				<input
					{...props}
					aria-invalid={ariaInvalid || !!error}
					className={styles.input}
					disabled={disabled}
					hidden={hidden}
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
			<Tooltip error={error} helper={helper} warning={warning} />
		</div>
	);
});
