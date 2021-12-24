import { FunctionComponent } from "react";

import styles from "./main.module.css";

export const Main: FunctionComponent = ({ children, ...props }) => (
	<main className={styles.main} {...props}>
		{children}
	</main>
);
