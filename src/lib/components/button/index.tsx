import { Children, PropsWithChildren, ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

type Appearance =
	| "text"
	| "outlined"
	| "elevated"
	| "tonal"
	| "filled"
	| "floating-small"
	| "floating"
	| "floating-large";

export type ButtonProps = PropsWithChildren<{
	/** @see https://m3.material.io/components/all-buttons */
	appearance?: Appearance;
}>;

export function useClassName({
	appearance = "filled",
	children,
	override,
}: {
	appearance?: Appearance;
	children: ReactNode;
	override?: string;
}): string | undefined {
	return [
		styles.button,
		styles[appearance],
		typography.labelLarge,
		children && styles.children,
		Children.count(children) > 1 && styles.icon,
		override,
	].join(" ");
}

export { ButtonAnchor } from "./anchor";
export { Button } from "./button";
