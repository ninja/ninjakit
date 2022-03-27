import { classNames } from "ninjakit";
import { ReactNode } from "react";
import { MdError, MdInfo, MdWarning } from "react-icons/md";

import styles from "./tooltip.module.css";

export function Tooltip({
	className,
	error,
	helper,
	warning,
}: {
	className?: string;
	error?: ReactNode;
	helper?: ReactNode;
	warning?: ReactNode;
}) {
	return (
		<>
			{error && (
				<div
					className={classNames({
						[styles.tooltip]: true,
						[styles.error]: true,
						[className ? className : ""]: !!className,
					})}
					role="tooltip"
				>
					<MdError />
					{error}
				</div>
			)}
			{warning && (
				<div
					className={classNames({
						[styles.tooltip]: true,
						[styles.warning]: true,
						[className ? className : ""]: !!className,
					})}
					role="tooltip"
				>
					<MdWarning />
					{warning}
				</div>
			)}
			{helper && (
				<div
					className={classNames({
						[styles.tooltip]: true,
						[styles.helper]: true,
						[className ? className : ""]: !!className,
					})}
					role="tooltip"
				>
					<MdInfo />
					{helper}
				</div>
			)}
		</>
	);
}
