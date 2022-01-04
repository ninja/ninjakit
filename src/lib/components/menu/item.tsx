import { forwardRef } from "react";

import typography from "../typography/typography.module.css";
import styles from "./menu.module.css";

export type MenuItemProps = JSX.IntrinsicElements["button"] & {
	separator?: boolean;
};

function useClassName({ override }: { override?: string }): string | undefined {
	return [styles.menuItem, typography.labelLarge, override].join(" ");
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function (
	{ children, className: override, ...props },
	ref
) {
	const className = useClassName({ override });

	return (
		<button {...props} className={className} ref={ref} role="menuitem">
			{children}
		</button>
	);
});

MenuItem.displayName = "MenuItem";
