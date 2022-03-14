export function colorScheme() {
	const localColorScheme = localStorage.getItem("prefersColorScheme") as
		| "light"
		| "dark"
		| null;
	const systemColorScheme = matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	const colorScheme = localColorScheme || systemColorScheme;

	document.documentElement.classList.add(colorScheme);

	const metaElement = document.querySelector(
		"meta[name=color-scheme]"
	) as HTMLMetaElement;

	if (metaElement) metaElement.content = colorScheme;
}
