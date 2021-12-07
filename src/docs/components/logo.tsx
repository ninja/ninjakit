import { FunctionComponent } from "react";

import styles from "./logo.module.css";

export const Logo: FunctionComponent<{ className?: string }> = ({
	className: classNameOverride,
	...props
}) => {
	const className = [styles.ninjaKit, classNameOverride].join(" ");

	return (
		<h1 className={className} role="banner" {...props}>
			<strong>ninja</strong>Kit
		</h1>
	);
};
