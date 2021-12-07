import {
	AnchorHTMLAttributes,
	forwardRef,
	PropsWithChildren,
	ReactElement,
} from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

export const ButtonAnchor = forwardRef<
	HTMLAnchorElement,
	AnchorHTMLAttributes<HTMLAnchorElement> &
		PropsWithChildren<{
			icon?: ReactElement;
			kind?: "filled" | "floating" | "text";
		}>
>(function ButtonLink(
	{ children, className: classNameOverride, icon, kind = "filled", ...props },
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
		<a className={className} {...props} ref={ref}>
			<div className={styles.state}>
				{icon}
				<span>{children}</span>
			</div>
		</a>
	);
});
