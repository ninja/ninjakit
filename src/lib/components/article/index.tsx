import type { ReactNode } from "react";

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
	return (
		<article className={styles.article} {...props}>
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
