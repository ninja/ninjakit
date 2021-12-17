import { ButtonHTMLAttributes, forwardRef } from "react";

import { ButtonProps, useClassName } from ".";

export const Button = forwardRef<
	HTMLButtonElement,
	ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>(function (
	{ appearance, children, className: override, type = "button", ...props },
	ref
) {
	const className = useClassName({ appearance, children, override });

	return (
		<button className={className} ref={ref} type={type} {...props}>
			{children}
		</button>
	);
});

Button.displayName = "Button";
