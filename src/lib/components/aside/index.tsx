import styles from "./aside.module.css";

export function Aside({ children, ...props }: JSX.IntrinsicElements["aside"]) {
	return (
		<aside className={styles.aside} {...props}>
			{children}
		</aside>
	);
}
