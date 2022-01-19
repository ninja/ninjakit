import { forwardRef } from "react";

import { ButtonProps, useClassName } from ".";

export const FloatingActionButton = forwardRef<
	HTMLButtonElement,
	ButtonProps & JSX.IntrinsicElements["button"]
>(function FloatingActionButton(
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
