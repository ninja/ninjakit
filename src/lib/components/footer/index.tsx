import { FunctionComponent } from "react";

import typography from "../typography/typography.module.css";
import styles from "./footer.module.css";

export const Footer: FunctionComponent = ({ children, ...props }) => {
	const className = [styles.footer, typography.bodyMedium].join(" ");

	return (
		<footer className={className} {...props}>
			{children}
		</footer>
	);
};
