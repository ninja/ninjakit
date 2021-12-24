import { FunctionComponent } from "react";

import typography from "../typography/typography.module.css";
import styles from "./article.module.css";

export const Article: FunctionComponent = ({ children, ...props }) => {
	const className = [styles.article, typography.bodyMedium].join(" ");

	return (
		<article className={className} {...props}>
			{children}
		</article>
	);
};
