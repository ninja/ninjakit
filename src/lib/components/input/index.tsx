import { ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./input.module.css";

type Appearance = "filled" | "outlined";

export type InputProps = {
	/** @see https://material.io/design/components/text-fields.html */
	appearance?: Appearance;
	error?: true | string;
	label?: string;
	leadingIcon?: ReactNode;
	onClickTrailingIcon?: () => void;
	trailingIcon?: ReactNode;
};

export function useClassName({
	appearance = "filled",
	error,
	leadingIcon,
	override,
}: {
	appearance?: Appearance;
	error?: true | string;
	leadingIcon?: ReactNode;
	override?: string;
}): string | undefined {
	return [
		typography.labelLarge,
		styles.container,
		styles[appearance],
		leadingIcon && styles.leadingIcon,
		error && styles.error,
		override,
	]
		.join(" ")
		.trim();
}

export { TextInput } from "./text";
