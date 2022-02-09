import { MdCheck } from "react-icons/md";

import { CheckboxProps, useCheckbox } from ".";
import styles from "./checkbox.module.css";

/** @see https://material.io/components/checkbox */
export function Checkbox({
	children,
	error,
	helper,
	id,
	indeterminate,
	label,
	...props
}: CheckboxProps) {
	const { checkboxProps, inputProps } = useCheckbox({
		error,
		indeterminate,
		...props,
	});

	return (
		<div {...checkboxProps}>
			<label className={styles.label} htmlFor={id}>
				<input {...inputProps} {...props} id={id} type="checkbox" />
				<MdCheck className={styles.check} />
				<div className={styles.children}>{children || label}</div>
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
}
