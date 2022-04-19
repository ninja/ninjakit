import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
} from "react";

export type Status = "error" | "info" | "success" | "warning";
type AlertProps = {
	action?: ReactNode;
	closeAfter?: number;
	message: ReactNode;
	progress?: number;
	status?: Status;
};
export type AlertState = {
	message?: ReactNode;
	mount: boolean;
	open: boolean;
	show: boolean;
} & Omit<AlertProps, "message">;

export const AlertContext = createContext<
	[AlertState, Dispatch<SetStateAction<AlertState>>]
>([{ mount: false, open: false, show: false }, () => null]);

export function useAlert() {
	const [{ closeAfter, open, progress }, setAlertState] =
		useContext(AlertContext);

	const remainOpen = useRef(false);

	useLayoutEffect(() => {
		setAlertState((alertState) =>
			open ? { ...alertState, mount: true } : { ...alertState, show: false }
		);
	}, [open, setAlertState]);

	useEffect(() => {
		if (!open) return;

		const animationFrame = requestAnimationFrame(() =>
			setAlertState((alertState) => ({ ...alertState, show: true }))
		);

		() => cancelAnimationFrame(animationFrame);
	}, [open, setAlertState]);

	useEffect(() => {
		remainOpen.current =
			!open ||
			closeAfter === 0 ||
			(typeof progress === "number" && progress < 1);

		if (remainOpen.current) return;
		if (progress === 1)
			setAlertState((alertState) => ({ ...alertState, progress: undefined }));

		const timeout = setTimeout(() => {
			if (remainOpen.current) return;

			setAlertState((alertState) => ({ ...alertState, open: false }));
		}, closeAfter);

		() => clearTimeout(timeout);
	}, [closeAfter, open, progress, setAlertState]);

	return function alert({
		action,
		closeAfter = 3000,
		message,
		progress,
		status,
	}: AlertProps) {
		setAlertState((alertState) => {
			return {
				...alertState,
				action,
				closeAfter,
				message,
				open: true,
				progress:
					typeof progress === "number"
						? progress
						: typeof alertState.progress === "number"
						? alertState.progress
						: progress,
				status,
			};
		});
	};
}

export { Alert } from "./alert";
