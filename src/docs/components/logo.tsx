import styles from "./logo.module.css";

export function Logo({
	className: classNameOverride,
	...props
}: {
	className?: string;
} & JSX.IntrinsicElements["h1"]) {
	const className = [styles.ninjaKit, classNameOverride].join(" ");

	return (
		<h1 className={className} role="banner" {...props}>
			<strong>ninja</strong>Kit
		</h1>
	);
}
