import styles from "./nav.module.css";

type Appearance = "filled" | "none";

const useClassName = (appearance?: Appearance) => {
	return [styles.nav, appearance === "filled" && styles.filled].join(" ");
};

export function Nav({
	appearance = "none",
	children,
	...props
}: {
	appearance?: Appearance;
} & JSX.IntrinsicElements["nav"]) {
	const className = useClassName(appearance);

	return (
		<nav className={className} {...props}>
			{children}
		</nav>
	);
}
