import styles from "./typography.module.css";

export function Typography({
	children,
	appearance = "bodyMedium",
	...props
}: JSX.IntrinsicElements["span"] & {
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
}) {
	return (
		<span className={styles[appearance]} {...props}>
			{children}
		</span>
	);
}
