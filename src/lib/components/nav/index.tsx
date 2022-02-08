import { classNames } from "ninjakit";

import styles from "./nav.module.css";

type Appearance = "filled" | "none";

export function Nav({
	appearance = "none",
	children,
	className,
	...props
}: {
	appearance?: Appearance;
} & JSX.IntrinsicElements["nav"]) {
	return (
		<nav
			className={classNames({
				[styles.nav]: true,
				[styles.filled]: appearance === "filled",
				className,
			})}
			{...props}
		>
			{children}
		</nav>
	);
}
