import { classNames, useMinWidth, useSplitChildren } from "ninjakit";
import { createContext, ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./nav.module.css";

type Appearance = "filled" | "none";

export const context = createContext({ drawerOpen: false });

const { Provider } = context;

export function Nav({
	appearance = "none",
	children,
	className,
	container = document.body,
	drawerOpen = false,
	headline,
	limit = 5,
	...props
}: {
	appearance?: Appearance;
	container?: Element;
	drawerOpen?: boolean;
	Component?: (props: Record<string, unknown>) => ReactElement;
	headline?: ReactNode;
	limit?: number;
} & JSX.IntrinsicElements["nav"]) {
	const isDesktopWidth = useMinWidth();
	const [barChildren] = useSplitChildren({ children, limit });

	return (
		<nav
			className={classNames({
				[styles.nav]: true,
				[styles.filled]: appearance === "filled",
				className,
			})}
			{...props}
		>
			<Provider value={{ drawerOpen }}>
				{isDesktopWidth ? (
					<div className={drawerOpen ? styles.drawer : styles.rail}>
						{headline && <header>{headline}</header>}
						<div className={styles.body}>{children}</div>
					</div>
				) : (
					<>
						<div className={styles.body}>{barChildren}</div>
						{drawerOpen &&
							createPortal(
								<div
									className={classNames({
										[styles.backdrop]: true,
										[styles.show]: true,
									})}
									role="presentation"
								>
									<nav className={styles.drawer}>
										<div className={styles.body}>{children}</div>
									</nav>
								</div>,
								container
							)}
					</>
				)}
			</Provider>
		</nav>
	);
}

export { NavButton } from "./button";
