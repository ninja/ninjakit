import { ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./checkbox.module.css";

export type CheckboxProps = JSX.IntrinsicElements["input"] & {
	error?: ReactNode;
	helper?: ReactNode;
	indeterminate?: boolean;
	label?: ReactNode;
};

export function useClassName({
	disabled,
	error,
	override,
}: {
	disabled?: boolean;
	error?: ReactNode;
	override?: string;
}): string | undefined {
	return [
		typography.labelLarge,
		styles.checkbox,
		disabled ? styles.disabled : undefined,
		error ? styles.error : undefined,
		override,
	]
		.join(" ")
		.trim();
}

export { Checkbox } from "./checkbox";
