import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	FunctionComponent,
	ReactElement,
} from "react";

import { Button } from "../button";
import { ButtonAnchor } from "../button/anchor";
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

export const GridButtonAnchor: FunctionComponent<
	AnchorHTMLAttributes<HTMLAnchorElement> & { icon: ReactElement }
> = ({ children, icon, ...props }) => (
	<ButtonAnchor
		className={styles.button}
		icon={icon}
		kind="floating"
		{...props}
	>
		{children}
	</ButtonAnchor>
);

export const GridFill: FunctionComponent = ({ children, ...props }) => (
	<div className={styles.fill} {...props}>
		{children}
	</div>
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
