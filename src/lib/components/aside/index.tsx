import typography from "../typography/typography.module.css";
import styles from "./aside.module.css";

export function Aside({ children, ...props }: JSX.IntrinsicElements["aside"]) {
	return (
		<aside
			className={[styles.aside, typography.bodyMedium].join(" ")}
			{...props}
		>
			{children}
		</aside>
	);
}
