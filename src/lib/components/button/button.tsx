import { classNames } from "ninjakit";
import { forwardRef } from "react";

import { ButtonProps } from ".";
import styles from "./button.module.css";

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonProps & JSX.IntrinsicElements["button"]
>(function Button(
	{
		appearance = "filled",
		children,
		className,
		label,
		leadingIcon,
		trailingIcon,
		type = "button",
		...props
	},
	ref
) {
	return (
		<button
			className={classNames({
				[styles.button]: true,
				[styles[appearance]]: true,
				[styles.children]: !!children || !!label,
				[styles.leadingIcon]: !!leadingIcon,
				[styles.trailingIcon]: !!trailingIcon,
				className,
			})}
			ref={ref}
			type={type}
			{...props}
		>
			<>{leadingIcon}</>
			<>{label}</>
			{children}
			<>{trailingIcon}</>
		</button>
	);
});
