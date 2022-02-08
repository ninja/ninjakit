import { classNames } from "ninjakit";
import { Children, forwardRef } from "react";

import styles from "./floating-action-button.module.css";

export const FloatingActionButton = forwardRef<
	HTMLButtonElement,
	{ appearance?: "small" | "large" } & JSX.IntrinsicElements["button"]
>(function FloatingActionButton(
	{ appearance = "", children, className, type = "button", ...props },
	ref
) {
	return (
		<button
			className={classNames({
				[styles.button]: true,
				[styles[appearance]]: !!appearance,
				[styles.children]: !!children,
				[styles.icon]: Children.count(children) > 1,
				className,
			})}
			ref={ref}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
});
