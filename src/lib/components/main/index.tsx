import type { ReactNode } from "react";

import styles from "./main.module.css";

export function Main({
	children,
	header,
	navigation,
	...props
}: {
	aside?: ReactNode;
	header?: ReactNode;
	navigation?: ReactNode;
} & JSX.IntrinsicElements["main"]) {
	return (
		<main className={styles.main} {...props}>
			<>{header}</>
			<>{navigation}</>
			<div className={styles.body} role="presentation">
				{children}
			</div>
		</main>
	);
}
