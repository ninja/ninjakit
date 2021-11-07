import {
	ButtonHTMLAttributes,
	FunctionComponent,
	LinkHTMLAttributes,
	ReactElement,
} from "react";

import { Button } from "../button";
import typography from "../typography/typography.module.css";
import styles from "./grid.module.css";

export const Grid: FunctionComponent = ({ children, ...props }) => (
	<main className={styles.grid} {...props}>
		{children}
	</main>
);

export const GridArticle: FunctionComponent = ({ children, ...props }) => {
	const className = [styles.article, typography.bodyMedium].join(" ");

	return (
		<article className={className} {...props}>
			{children}
		</article>
	);
};

export const GridAside: FunctionComponent = ({ children, ...props }) => (
	<aside className={[styles.aside, typography.bodyMedium].join(" ")} {...props}>
		{children}
	</aside>
);

export const GridButton: FunctionComponent<
	ButtonHTMLAttributes<HTMLButtonElement> & { icon: ReactElement }
> = ({ children, icon, ...props }) => (
	<Button className={styles.button} icon={icon} kind="floating" {...props}>
		{children}
	</Button>
);

export const GridHeader: FunctionComponent = ({ children, ...props }) => {
	const className = [styles.header, typography.bodyMedium].join(" ");

	return (
		<header className={className} {...props}>
			{children}
		</header>
	);
};

export const GridNav: FunctionComponent = ({ children, ...props }) => (
	<nav className={styles.nav} {...props}>
		{children}
	</nav>
);

export const GridNavLink: FunctionComponent<
	LinkHTMLAttributes<HTMLAnchorElement> & {
		active?: boolean;
		icon: ReactElement;
		iconActive: ReactElement;
	}
> = ({ children, active = false, href, icon, iconActive, ...props }) => {
	if (active) {
		return (
			<span aria-current={active} className={styles.navLink} {...props}>
				<div className={styles.navIndicator}>{iconActive}</div>
				<div className={styles.navLabel}>{children}</div>
			</span>
		);
	}

	return (
		<a className={styles.navLink} href={href} {...props}>
			<div className={styles.navIndicator}>{icon}</div>
			<div className={styles.navLabel}>{children}</div>
		</a>
	);
};
