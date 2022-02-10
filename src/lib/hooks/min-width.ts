import { useEffect, useState } from "react";

export function useMinWidth(minWidth = 600) {
	const [matches, setMatches] = useState(false);

	function eventListener({ matches }: MediaQueryListEvent) {
		setMatches(matches);
	}

	useEffect(() => {
		const mediaQueryList = window.matchMedia(`(min-width: ${minWidth}px)`);

		setMatches(mediaQueryList.matches);

		mediaQueryList.addEventListener("change", eventListener);

		return () => mediaQueryList.removeEventListener("change", eventListener);
	}, [minWidth]);

	return matches;
}
