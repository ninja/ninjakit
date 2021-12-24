import { FunctionComponent } from "react";

import typography from "../typography/typography.module.css";
import styles from "./aside.module.css";

export const Aside: FunctionComponent = ({ children, ...props }) => (
	<aside className={[styles.aside, typography.bodyMedium].join(" ")} {...props}>
		{children}
	</aside>
);
