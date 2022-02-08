import styles from "./footer.module.css";

export function Footer({
	children,
	...props
}: JSX.IntrinsicElements["footer"]) {
	return (
		<footer className={styles.footer} {...props}>
			{children}
		</footer>
	);
}
