import { ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

type Appearance = "elevated" | "filled" | "outlined" | "text" | "tonal";

export type ButtonProps = {
	/** @see https://m3.material.io/components/all-buttons */
	appearance?: Appearance;
	label?: string;
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
};

export function useClassName({
	appearance,
	children,
	label,
	leadingIcon,
	override,
	target,
	trailingIcon,
}: {
	anchor?: boolean;
	appearance: Appearance;
	children: ReactNode;
	label?: string;
	leadingIcon?: ReactNode;
	override?: string;
	target?: string;
	trailingIcon?: ReactNode;
}): string | undefined {
	return [
		styles.button,
		styles[appearance],
		typography.labelLarge,
		children || label ? styles.children : undefined,
		leadingIcon ? styles.leadingIcon : undefined,
		trailingIcon || target === "_blank" ? styles.trailingIcon : undefined,
		override,
	].join(" ");
}

export { AnchorButton } from "./anchor";
export { Button } from "./button";
