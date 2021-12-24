import { FunctionComponent, HTMLAttributes } from "react";

import typography from "../typography/typography.module.css";
import styles from "./card.module.css";

export const Card: FunctionComponent<
	HTMLAttributes<HTMLDivElement> & {
		appearance?: "elevated" | "filled" | "outlined";
		subhead?: string;
		title?: string;
	}
> = ({
	children,
	className: classNameOverride,
	appearance = "filled",
	subhead,
	title,
	...props
}) => {
	const className = [
		styles.card,
		styles[appearance],
		typography.bodyMedium,
		classNameOverride,
	].join(" ");

	return (
		<section className={className} {...props}>
			{(title || subhead) && (
				<header>
					{title && <h1 className={typography.titleMedium}>{title}</h1>}
					{subhead && <h2 className={typography.bodySmall}>{subhead}</h2>}
				</header>
			)}
			{children}
		</section>
	);
};
