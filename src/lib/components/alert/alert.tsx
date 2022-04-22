import { classNames } from "ninjakit";
import { useState } from "react";
import { createPortal } from "react-dom";

import { AlertContext, AlertState } from ".";
import styles from "./alert.module.css";
import { AlertIcon } from "./icon";
import { ProgressBar } from "./progress-bar";

export function Alert({
	children,
	className,
	closeAfter,
	container,
	...props
}: {
	closeAfter?: number;
	container?: Element;
} & JSX.IntrinsicElements["div"]) {
	const alertState = useState<AlertState>({
		closeAfter,
		mount: false,
		open: false,
		show: false,
	});
	const [{ action, message, mount, progress, show, status }, setAlertState] =
		alertState;

	return (
		<AlertContext.Provider value={alertState}>
			{children}
			{mount
				? createPortal(
						<div
							{...props}
							className={classNames({
								[styles.alert]: true,
								[status ? styles[status] : ""]: typeof status === "string",
								className,
								[styles.show]: show,
								[styles.translate]: true,
							})}
							onTransitionEnd={() => {
								if (show) return;
								if (mount)
									setAlertState((alertState) => ({
										...alertState,
										mount: false,
									}));
							}}
							role="alert"
						>
							<div className={styles.message}>
								{status && <AlertIcon status={status} />}
								<>{message}</>
							</div>
							{action && <div className={styles.action}>{action}</div>}
							{typeof progress === "number" && (
								<ProgressBar progress={progress} />
							)}
						</div>,
						container ? container : document.body
				  )
				: null}
		</AlertContext.Provider>
	);
}
