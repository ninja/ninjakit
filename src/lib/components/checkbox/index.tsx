import typography from "../typography/typography.module.css";
import styles from "./checkbox.module.css";

export type CheckboxProps = JSX.IntrinsicElements["input"] & {
	indeterminate?: boolean;
	label?: string;
};

export function useClassName({
	disabled,
	override,
}: {
	disabled?: boolean;
	override?: string;
}): string | undefined {
	return [
		typography.labelLarge,
		styles.checkbox,
		disabled ? styles.disabled : undefined,
		override,
	]
		.join(" ")
		.trim();
}

export { Checkbox } from "./checkbox";
