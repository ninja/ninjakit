import {
	AnchorHTMLAttributes,
	Children,
	forwardRef,
	PropsWithChildren,
} from "react";
import { CgExternal } from "react-icons/cg";

import typography from "../typography/typography.module.css";
import type { ButtonProps } from "./";
import styles from "./button.module.css";

export const ButtonAnchor = forwardRef<
	HTMLAnchorElement,
	AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<ButtonProps>
>(function ButtonLink(
	{ appearance = "filled", children, className: override, target, ...props },
	ref
) {
	const className = [
		styles.button,
		styles[appearance],
		typography.labelLarge,
		children && styles.children,
		Children.count(children) > 1 && styles.icon,
		override,
	].join(" ");

	return (
		<a className={className} ref={ref} target={target} {...props}>
			{children}
			{target === "_blank" && <CgExternal />}
		</a>
	);
});
