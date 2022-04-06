import { forwardRef } from "react";
import { MdCheck } from "react-icons/md";

import { Tooltip } from "../tooltip.tsx";
import { CheckboxProps, useCheckbox } from ".";
import styles from "./checkbox.module.css";

/** @see https://material.io/components/checkbox */
export const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps & JSX.IntrinsicElements["input"]
>(function Checkbox(
	{ children, error, helper, id, indeterminate, label, warning, ...props },
	externalRef
) {
	const { checkboxProps, inputProps, labelProps, ref } = useCheckbox({
		error,
		indeterminate,
		warning,
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
						}}
						type="checkbox"
					/>
					<MdCheck className={styles.check} />
				</div>
				<div className={styles.children}>{children || label}</div>
			</label>
			<Tooltip
				className={styles.tooltip}
				error={error}
				helper={helper}
				warning={warning}
			/>
		</div>
	);
});
