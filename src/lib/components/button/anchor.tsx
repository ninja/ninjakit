import { forwardRef } from "react";
import { CgExternal } from "react-icons/cg";

import { ButtonProps, useClassName } from ".";

export const AnchorButton = forwardRef<
	HTMLAnchorElement,
	JSX.IntrinsicElements["a"] & ButtonProps
>(function (
	{
		appearance = "text",
		children,
		className: override,
		label,
		leadingIcon,
		target,
		trailingIcon = target === "_blank" && <CgExternal />,
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
		target,
		trailingIcon,
	});

	return (
		<a className={className} ref={ref} target={target} {...props}>
			<>{leadingIcon}</>
			{label}
			{children}
			<>{trailingIcon}</>
		</a>
	);
});

AnchorButton.displayName = "AnchorButton";
