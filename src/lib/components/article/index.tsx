import type { ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./article.module.css";

export function Article({
	aside,
	children,
	floatingActionButton,
	footer,
	header,
	...props
}: {
	aside?: ReactNode;
	footer?: ReactNode;
	header?: ReactNode;
	floatingActionButton?: ReactNode;
} & JSX.IntrinsicElements["article"]) {
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
}
