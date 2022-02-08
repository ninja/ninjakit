import { classNames } from "ninjakit";
import {
	KeyboardEvent,
	MouseEvent,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

import styles from "./dialog.module.css";

export function useDialog({
	className,
	onClose,
	open,
}: {
	className?: string;
	onClose?: () => void;
	open: boolean;
}) {
	const dialogRef = useRef<HTMLDivElement>(null);
	const [mount, setMount] = useState(false);
	const [show, setShow] = useState(false);

	function handleClickClose() {
		setShow(false);
	}

	function handleClickDialog(event: MouseEvent<HTMLDivElement>) {
		event.stopPropagation();
	}

	function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
		const { currentTarget, key, shiftKey, target } = event;

		if (key === "Escape") return setShow(false);
		if (shiftKey && key === "Tab" && target === currentTarget) {
			return event.preventDefault();
		}
	}

	function handleTransitionEnd() {
		if (show) return;
		if (mount) setMount(false);
		if (onClose) onClose();
	}

	useLayoutEffect(() => {
		open ? setMount(true) : setShow(false);
	}, [open]);

	useEffect(() => {
		if (open) {
			const animationFrame = requestAnimationFrame(() => setShow(true));

			() => cancelAnimationFrame(animationFrame);
		}
	}, [open]);

	useLayoutEffect(() => {
		if (mount) dialogRef.current?.focus();
	}, [mount]);

	const backdropProps: JSX.IntrinsicElements["div"] = {
		className: classNames({
			[styles.backdrop]: true,
			[styles.show]: show,
		}),
		onClick: handleClickClose,
	};

	const dialogProps: JSX.IntrinsicElements["div"] = {
		className: classNames({
			[styles.dialog]: true,
			[styles.show]: show,
			className,
		}),
		onClick: handleClickDialog,
		onKeyDown: handleKeyDown,
		onTransitionEnd: handleTransitionEnd,
		ref: dialogRef,
		tabIndex: 0,
	};

	return {
		backdropProps,
		dialogProps,
		handleClickClose,
		mount,
	};
}

export { Dialog } from "./dialog";
