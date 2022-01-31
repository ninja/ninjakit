import type { Appearance } from "ninjakit";
import { forwardRef, ReactNode } from "react";

import typography from "../typography/typography.module.css";
import styles from "./card.module.css";

export const Card = forwardRef<
	HTMLDivElement,
	{
		appearance?: Exclude<Appearance, "tonal" | "text">;
		error?: ReactNode;
		footer?: ReactNode;
		header?: ReactNode;
		subhead?: ReactNode;
		title?: ReactNode;
	} & Omit<JSX.IntrinsicElements["div"], "title">
>(function Card(
	{
		children,
		className: classNameOverride,
		appearance = "filled",
		error,
		footer,
		header,
		subhead,
		title,
		...props
	},
	ref
) {
	const className = [
		styles.card,
		styles[appearance],
		typography.bodyMedium,
		classNameOverride,
	].join(" ");

	return (
		<div className={className} ref={ref} {...props}>
			{(header || title || subhead) && (
				<header className={styles.header}>
					<section>
						{title && <h1 className={typography.headlineSmall}>{title}</h1>}
						{subhead && <h2 className={typography.bodySmall}>{subhead}</h2>}
					</section>
					{header && <section>{header}</section>}
				</header>
			)}
			{(children || error) && (
				<div className={styles.body}>
					{error && (
						<div className={styles.errorMessage} role="alert">
							{error}
						</div>
					)}
					{children}
				</div>
			)}
			{footer && <footer className={styles.footer}>{footer}</footer>}
		</div>
	);
});
