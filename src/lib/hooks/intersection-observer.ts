import { Ref, useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends HTMLElement>({
	root = null,
	rootMargin,
	threshold = 0,
}: IntersectionObserverInit = {}) {
	const [entry, setEntry] = useState<IntersectionObserverEntry>();
	const [target, setTarget] = useState<T>();

	const intersectionObserver = useRef(
		new IntersectionObserver(([entry]) => setEntry(entry), {
			root,
			rootMargin,
			threshold,
		})
	);

	useEffect(() => {
		const { current } = intersectionObserver;

		current.disconnect();

		if (target) current.observe(target);

		return () => current.disconnect();
	}, [target]);

	return { entry, ref: setTarget as Ref<T> };
}
