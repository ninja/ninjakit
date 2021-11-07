import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

export const Button: FunctionComponent<
	ButtonHTMLAttributes<HTMLButtonElement> & {
		icon?: ReactElement;
		kind?: "filled" | "floating" | "text";
	}
> = ({
	children,
	className: classNameOverride,
	icon,
	kind = "filled",
	type = "button",
	...props
}) => {
	const className = [
		styles[kind],
		typography.labelLarge,
		children && styles.children,
		icon && styles.icon,
		classNameOverride,
	].join(" ");

	return (
		<button className={className} type={type} {...props}>
			<div className={styles.state}>
				{icon}
				<span>{children}</span>
			</div>
		</button>
	);
};
