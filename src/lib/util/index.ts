export function classNames(
	record: Record<string, boolean | string | undefined>
) {
	return Object.entries(record)
		.filter(([, value]) => value)
		.map(([key, value]) => (typeof value === "string" ? value : key))
		.join(" ")
		.trim();
}

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

export function setNativeValue(element: Element, value: string) {
	const valueSetter = Object.getOwnPropertyDescriptor(element, "value")?.set;
	const prototype = Object.getPrototypeOf(element);
	const prototypeValueSetter = Object.getOwnPropertyDescriptor(
		prototype,
		"value"
	)?.set;

	if (valueSetter && valueSetter !== prototypeValueSetter) {
		prototypeValueSetter?.call(element, value);
	} else {
		valueSetter?.call(element, value);
	}
}
