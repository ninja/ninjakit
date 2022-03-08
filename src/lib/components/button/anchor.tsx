import { classNames } from "ninjakit";
import { Children, cloneElement, forwardRef, ReactElement } from "react";
import { CgExternal } from "react-icons/cg";

import { ButtonProps } from ".";
import styles from "./button.module.css";

export const AnchorButton = forwardRef<
	HTMLAnchorElement,
	ButtonProps & {
		drawerOpen?: boolean;
		mergeWithChild?: boolean;
		nav?: boolean;
	} & JSX.IntrinsicElements["a"]
>(function AnchorButton(
	{
		appearance = "text",
		children,
		className: classNameOverride,
		drawerOpen = true,
		label,
		leadingIcon,
		mergeWithChild,
		nav,
		target,
		trailingIcon = drawerOpen && target === "_blank" && <CgExternal />,
		...props
	},
	ref
) {
	const className = classNames({
		[styles.button]: true,
		[nav ? styles.nav : styles[appearance]]: true,
		[styles.children]: !!children || !!label,
		[styles.leadingIcon]: !!leadingIcon,
		[styles.trailingIcon]: !!trailingIcon || target === "_blank",
		classNameOverride,
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
				<>{label}</>
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
