import { useMinWidth } from "ninjakit";
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
	const isDesktopWidth = useMinWidth();

	return (
		<article className={styles.article} {...props}>
			<>{header}</>
			<div className={styles.body} role="presentation">
				<>{children}</>
				<>{isDesktopWidth && footer}</>
				<>{floatingActionButton}</>
			</div>
			<>{aside}</>
			<>{!isDesktopWidth && footer}</>
		</article>
	);
}
