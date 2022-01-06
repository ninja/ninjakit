import { forwardRef } from "react";

import { ButtonProps, useClassName } from ".";

export const Button = forwardRef<
	HTMLButtonElement,
	JSX.IntrinsicElements["button"] & ButtonProps
>(function (
	{
		appearance = "filled",
		children,
		className: override,
		label,
		leadingIcon,
		trailingIcon,
		type = "button",
		...props
	},
	ref
) {
	const className = useClassName({
		appearance,
		children,
		label,
		leadingIcon,
		override,
		trailingIcon,
	});

	return (
		<button className={className} ref={ref} type={type} {...props}>
			<>{leadingIcon}</>
			{label}
			{children}
			<>{trailingIcon}</>
		</button>
	);
});

Button.displayName = "Button";