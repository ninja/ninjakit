import {
	ButtonHTMLAttributes,
	forwardRef,
	PropsWithChildren,
	ReactElement,
} from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement> &
		PropsWithChildren<{
			icon?: ReactElement;
			kind?: "filled" | "floating" | "text";
		}>
>(function Button(
	{
		children,
		className: classNameOverride,
		icon,
		kind = "filled",
		type = "button",
		...props
	},
	ref
) {
	const className = [
		styles[kind],
		typography.labelLarge,
		children && styles.children,
		icon && styles.icon,
		classNameOverride,
	].join(" ");

	return (
		<button className={className} type={type} {...props} ref={ref}>
			<div className={styles.state}>
				{icon}
				<span>{children}</span>
			</div>
		</button>
	);
});
