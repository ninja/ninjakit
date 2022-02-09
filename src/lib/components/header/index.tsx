import { classNames } from "ninjakit";

import styles from "./header.module.css";

type Appearance = "filled" | "none";

export function Header({
	appearance = "filled",
	children,
	className,
	...props
}: { appearance?: Appearance } & JSX.IntrinsicElements["header"]) {
	return (
		<header
			className={classNames({
				[styles.header]: true,
				[styles.filled]: appearance === "filled",
				className,
			})}
			{...props}
		>
			{children}
		</header>
	);
}
