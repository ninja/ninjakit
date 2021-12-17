import { AnchorHTMLAttributes, forwardRef } from "react";
import { CgExternal } from "react-icons/cg";

import { ButtonProps, useClassName } from ".";

export const ButtonAnchor = forwardRef<
	HTMLAnchorElement,
	AnchorHTMLAttributes<HTMLAnchorElement> & ButtonProps
>(function (
	{ appearance, children, className: override, target, ...props },
	ref
) {
	const className = useClassName({ appearance, children, override });

	return (
		<a className={className} ref={ref} target={target} {...props}>
			{children}
			{target === "_blank" && <CgExternal />}
		</a>
	);
});

ButtonAnchor.displayName = "ButtonAnchor";
