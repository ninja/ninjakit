import { FunctionComponent } from "react";

import styles from "./typography.module.css";

export const Typography: FunctionComponent<{
	kind:
		| "displayLarge"
		| "displayMedium"
		| "displaySmall"
		| "bodyMedium"
		| "headlineLarge"
		| "headlineMedium"
		| "headlineSmall"
		| "titleLarge"
		| "titleMedium"
		| "titleSmall"
		| "labelLarge"
		| "labelMedium"
		| "labelSmall"
		| "bodyLarge"
		| "bodyMedium"
		| "bodySmall";
}> = ({ children, kind = "bodyMedium", ...props }) => {
	return (
		<span className={styles[kind]} {...props}>
			{children}
		</span>
	);
};
