import { useMinWidth } from "ninjakit";
import { useEffect, useLayoutEffect, useState } from "react";

const key = "prefersDrawerOpen";

export function useDrawerOpen() {
	const isDesktopWidth = useMinWidth();
	const [drawerOpen, setDrawerOpen] = useState(false);

	useLayoutEffect(() => {
		if (!isDesktopWidth) return setDrawerOpen(false);

		const localDrawerOpen = localStorage.getItem(key) as "false" | null;
		const drawerOpen = localDrawerOpen === null;

		setDrawerOpen(drawerOpen);
	}, [isDesktopWidth]);

	useEffect(() => {
		if (!isDesktopWidth) return;

		drawerOpen
			? localStorage.removeItem(key)
			: localStorage.setItem(key, "false");
	}, [drawerOpen, isDesktopWidth]);

	return { drawerOpen, setDrawerOpen };
}
