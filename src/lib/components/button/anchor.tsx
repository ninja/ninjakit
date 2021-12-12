import {
	AnchorHTMLAttributes,
	forwardRef,
	PropsWithChildren,
	ReactElement,
} from "react";
import { CgExternal } from "react-icons/cg";

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
	{
		children,
		className: classNameOverride,
		icon,
		kind = "filled",
		target,
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
		<a className={className} ref={ref} target={target} {...props}>
			<div className={styles.state}>
				{icon}
				<span>{children}</span>
				{target === "_blank" && <CgExternal />}
			</div>
		</a>
	);
});
