import { useIntersectionObserver } from "ninjakit";
import { useEffect } from "react";

export function useHashRef<T extends HTMLElement>({
	id,
	percentageLine = 4,
}: {
	id: string;
	percentageLine?: number;
}) {
	const { entry, ref } = useIntersectionObserver<T>({
		rootMargin: `${-percentageLine}% 0% ${-(100 - percentageLine)}% 0%`,
	});

	useEffect(() => {
		if (!entry) return;

		const { isIntersecting } = entry;

		if (isIntersecting && location.hash !== `#${id}`)
			history.replaceState({}, "", `#${id}`);
	}, [entry, id]);

	return ref;
}
