import typography from "../typography/typography.module.css";
import styles from "./footer.module.css";

export function Footer({
	children,
	...props
}: JSX.IntrinsicElements["footer"]) {
	const className = [styles.footer, typography.bodyMedium].join(" ");

	return (
		<footer className={className} {...props}>
			{children}
		</footer>
	);
}
