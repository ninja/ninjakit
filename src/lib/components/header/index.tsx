import { FunctionComponent } from "react";

import styles from "./header.module.css";

type Appearance = "filled" | "none";

const useClassName = (appearance: Appearance) => {
	return [styles.header, appearance === "filled" && styles.filled].join(" ");
};

export const Header: FunctionComponent<{ appearance?: Appearance }> = ({
	appearance = "filled",
	children,
	...props
}) => {
	const className = useClassName(appearance);

	return (
		<header className={className} {...props}>
			{children}
		</header>
	);
};
