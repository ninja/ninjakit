import { FunctionComponent } from "react";

import styles from "./typography.module.css";

export const Typography: FunctionComponent<
	JSX.IntrinsicElements["span"] & {
		appearance?:
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
	}
> = ({ children, appearance = "bodyMedium", ...props }) => {
	return (
		<span className={styles[appearance]} {...props}>
			{children}
		</span>
	);
};
