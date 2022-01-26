import { Ref, useEffect, useRef, useState } from "react";

export function useIntersectionObserver({
	root = null,
	rootMargin,
	threshold = 0,
}: IntersectionObserverInit = {}) {
	const [entry, setEntry] = useState<IntersectionObserverEntry>();
	const [target, setTarget] = useState<HTMLElement>();

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

	return { entry, ref: setTarget as Ref<HTMLElement> };
}
