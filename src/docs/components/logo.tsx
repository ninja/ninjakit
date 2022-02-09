import { classNames } from "ninjakit";

import styles from "./logo.module.css";

export function Logo({ className, ...props }: JSX.IntrinsicElements["h1"]) {
	return (
		<h1
			className={classNames({
				[styles.ninjaKit]: true,
				className,
			})}
			role="banner"
			{...props}
		>
			<strong>ninja</strong>Kit
		</h1>
	);
}
