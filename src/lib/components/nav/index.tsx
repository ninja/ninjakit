import { FunctionComponent } from "react";

import styles from "./nav.module.css";

type Appearance = "filled" | "none";

const useClassName = (appearance?: Appearance) => {
	return [styles.nav, appearance === "filled" && styles.filled].join(" ");
};

export const Nav: FunctionComponent<{ appearance?: Appearance }> = ({
	appearance = "none",
	children,
	...props
}) => {
	const className = useClassName(appearance);

	return (
		<nav className={className} {...props}>
			{children}
		</nav>
	);
};
