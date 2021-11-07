import { FunctionComponent } from "react";

import typography from "../typography/typography.module.css";
import styles from "./card.module.css";

export const Card: FunctionComponent<{
	kind?: "elevated" | "filled" | "outlined";
	subhead?: string;
	title?: string;
}> = ({ children, kind = "filled", subhead, title, ...props }) => {
	const className = [styles[kind], typography.bodyMedium].join(" ");

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
