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
		<span
			className={`nkTypography${appearance
				.charAt(0)
				.toUpperCase()}${appearance.slice(1)}`}
			{...props}
		>
			{children}
		</span>
	);
}
