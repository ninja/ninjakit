import { Children, ReactNode } from "react";

export function useSplitChildren({
	children,
	limit,
}: {
	children: ReactNode;
	limit: number;
}) {
	if (Children.count(children) <= limit) return [children];

	const childrenArray = Children.toArray(children);

	return [childrenArray.splice(0, limit), childrenArray];
}
