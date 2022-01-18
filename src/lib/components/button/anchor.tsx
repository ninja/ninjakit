import { Children, cloneElement, forwardRef, ReactElement } from "react";
import { CgExternal } from "react-icons/cg";

import { ButtonProps, useClassName } from ".";

export const AnchorButton = forwardRef<
	HTMLAnchorElement,
	JSX.IntrinsicElements["a"] & ButtonProps & { mergeWithChild?: boolean }
>(function AnchorButton(
	{
		appearance = "text",
		children,
		className: override,
		label,
		leadingIcon,
		mergeWithChild,
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

	if (mergeWithChild) {
		const element = Children.only(children) as ReactElement<
			JSX.IntrinsicElements["a"]
		>;

		return cloneElement(
			element,
			{ className, ref, target, ...props },
			<>
				<>{leadingIcon}</>
				{label}
				{element.props.children}
				<>{trailingIcon}</>
			</>
		);
	}

	return (
		<a className={className} ref={ref} target={target} {...props}>
			<>{leadingIcon}</>
			{label}
			{children}
			<>{trailingIcon}</>
		</a>
	);
});
