import {
	ButtonHTMLAttributes,
	Children,
	forwardRef,
	PropsWithChildren,
} from "react";

import typography from "../typography/typography.module.css";
import styles from "./button.module.css";

export interface ButtonProps {
	/** @see https://m3.material.io/components/all-buttons */
	appearance?:
		| "text"
		| "outlined"
		| "elevated"
		| "tonal"
		| "filled"
		| "floating-small"
		| "floating"
		| "floating-large";
}

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<ButtonProps>
>(function Button(
	{
		appearance = "filled",
		children,
		className: override,
		type = "button",
		...props
	},
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
		<button className={className} ref={ref} type={type} {...props}>
			{children}
		</button>
	);
});
