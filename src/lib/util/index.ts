export function nextHTMLElementSibling(
	element: Element | null
): HTMLElement | null {
	if (element === null) return null;

	const { nextElementSibling } = element;

	if (nextElementSibling === null) return null;

	if (nextElementSibling?.ariaDisabled)
		return nextHTMLElementSibling(nextElementSibling);

	return nextElementSibling as HTMLElement;
}

export function previousHTMLElementSibling(
	element: Element | null
): HTMLElement | null {
	if (element === null) return null;

	const { previousElementSibling } = element;

	if (previousElementSibling === null) return null;

	if (previousElementSibling?.ariaDisabled)
		return previousHTMLElementSibling(previousElementSibling);

	return previousElementSibling as HTMLElement;
}

export function firstHTMLElementChild(
	element: Element | null
): HTMLElement | null {
	return (element?.firstElementChild as HTMLElement) || null;
}
