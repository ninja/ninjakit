import { forwardRef } from "react";
import { MdCheck } from "react-icons/md";

import { CheckboxProps, useCheckbox } from ".";
import styles from "./checkbox.module.css";

/** @see https://material.io/components/checkbox */
export const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps & JSX.IntrinsicElements["input"]
>(function Checkbox(
	{ children, error, helper, id, indeterminate, label, ...props },
	externalRef
) {
	const { checkboxProps, inputProps, labelProps, ref } = useCheckbox({
		error,
		indeterminate,
		...props,
	});

	return (
		<div {...checkboxProps}>
			<label {...labelProps}>
				<div className={styles.inputWrapper}>
					<input
						{...inputProps}
						{...props}
						id={id}
						ref={(node) => {
							ref.current = node;

							if (typeof externalRef === "function") return externalRef(node);
							externalRef?.current === node;
						}}
						type="checkbox"
					/>
					<MdCheck className={styles.check} />
				</div>
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
});
