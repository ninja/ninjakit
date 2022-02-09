import { Appearance, classNames } from "ninjakit";
import { forwardRef, ReactNode } from "react";

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
		className,
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
	return (
		<div
			className={classNames({
				[styles.card]: true,
				[styles[appearance]]: true,
				className,
			})}
			ref={ref}
			{...props}
		>
			{(header || title || subhead) && (
				<header className={styles.header}>
					<section>
						{title && <h1 className={styles.title}>{title}</h1>}
						{subhead && <h2 className={styles.subhead}>{subhead}</h2>}
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
