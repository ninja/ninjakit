import styles from "./header.module.css";

type Appearance = "filled" | "none";

const useClassName = (appearance: Appearance) => {
	return [styles.header, appearance === "filled" && styles.filled].join(" ");
};

export function Header({
	appearance = "filled",
	children,
	...props
}: { appearance?: Appearance } & JSX.IntrinsicElements["header"]) {
	const className = useClassName(appearance);

	return (
		<header className={className} {...props}>
			{children}
		</header>
	);
}
