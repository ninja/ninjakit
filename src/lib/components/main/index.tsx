import { FunctionComponent, ReactNode } from "react";

import styles from "./main.module.css";

export const Main: FunctionComponent<{
	aside?: ReactNode;
	footer?: ReactNode;
	header?: ReactNode;
	navigation?: ReactNode;
}> = ({ children, header, navigation, ...props }) => (
	<main className={styles.main} {...props}>
		{header}
		{navigation}
		<div className={styles.body} role="presentation">
			{children}
		</div>
	</main>
);
