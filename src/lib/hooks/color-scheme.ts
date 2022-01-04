import type { ColorScheme } from "ninjakit";
import { useEffect, useState } from "react";

const key = "prefersColorScheme";

function getDefaultColorScheme() {
	const localColorScheme = localStorage.getItem(key) as "dark" | "light" | null;

	if (localColorScheme === null) return "system";

	return localColorScheme;
}

export function useColorScheme() {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		getDefaultColorScheme()
	);

	useEffect(() => {
		const metaElement = document.querySelector(
			"meta[name=color-scheme]"
		) as HTMLMetaElement;

		if (colorScheme !== "dark")
			document.documentElement.classList.remove("dark");

		if (colorScheme === "system") {
			const systemColorScheme = matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			if (systemColorScheme === "dark")
				document.documentElement.classList.add("dark");

			metaElement.content = systemColorScheme;

			return localStorage.removeItem(key);
		}

		if (colorScheme === "dark") document.documentElement.classList.add("dark");

		localStorage.setItem(key, colorScheme);
	}, [colorScheme]);

	return { colorScheme, setColorScheme };
}
