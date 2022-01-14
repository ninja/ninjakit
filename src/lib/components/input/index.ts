import { ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./input.module.css";

type Appearance = "filled" | "outlined";

export type InputProps = {
	/** @see https://material.io/design/components/text-fields.html */
	appearance?: Appearance;
	error?: boolean | ReactNode;
	flex?: boolean;
	helper?: ReactNode;
	id: string; // id required by label htmlFor
	label?: ReactNode;
	leadingIcon?: ReactNode;
	onClickTrailingIcon?: () => void;
	trailingIcon?: ReactNode;
};

export function useClassName({
	appearance = "filled",
	flex,
	error,
	leadingIcon,
	override,
}: {
	appearance?: Appearance;
	error?: boolean | ReactNode;
	flex?: boolean;
	leadingIcon?: ReactNode;
	override?: string;
}): string | undefined {
	return [
		typography.labelLarge,
		styles.field,
		styles[appearance],
		flex ? styles.flex : undefined,
		leadingIcon ? styles.leadingIcon : undefined,
		error ? styles.error : undefined,
		override,
	]
		.join(" ")
		.trim();
}

export { TextInput } from "./text";
