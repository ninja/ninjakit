import { FunctionComponent, ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./article.module.css";

export const Article: FunctionComponent<{
	aside?: ReactNode;
	footer?: ReactNode;
	header?: ReactNode;
	floatingActionButton?: ReactNode;
}> = ({ aside, children, floatingActionButton, footer, header, ...props }) => {
	const className = [styles.article, typography.bodyMedium].join(" ");

	return (
		<article className={className} {...props}>
			<>{header}</>
			<div className={styles.body} role="presentation">
				<>{children}</>
				<>{footer /* 600px and up */}</>
				<>{floatingActionButton}</>
			</div>
			<>{aside}</>
			<>{footer /* < 600px */}</>
		</article>
	);
};
