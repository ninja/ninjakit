import { Children, PropsWithChildren, ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./floating-action-button.module.css";

type Appearance = "small" | "large";

export type ButtonProps = PropsWithChildren<{
	/** @see https://m3.material.io/components/all-buttons */
	appearance?: Appearance;
}>;

export function useClassName({
	appearance,
	children,
	override,
}: {
	appearance?: Appearance;
	children: ReactNode;
	override?: string;
}): string | undefined {
	return [
		styles.button,
		appearance && styles[appearance],
		typography.labelLarge,
		children && styles.children,
		Children.count(children) > 1 && styles.icon,
		override,
	].join(" ");
}

export { FloatingActionButton } from "./floating-action-button";
