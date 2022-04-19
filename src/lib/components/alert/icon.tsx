import { classNames } from "ninjakit";
import { MdCheckCircle, MdError, MdInfo, MdWarning } from "react-icons/md";

import { Status } from ".";
import styles from "./alert.module.css";

export function AlertIcon({ status }: { status: Status }) {
	const className = classNames({ [styles.icon]: true, [styles[status]]: true });

	switch (status) {
		case "error":
			return <MdError className={className} />;
		case "info":
			return <MdInfo className={className} />;
		case "success":
			return <MdCheckCircle className={className} />;
		case "warning":
			return <MdWarning className={className} />;
		default:
			return null;
	}
}
