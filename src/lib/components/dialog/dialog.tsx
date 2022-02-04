import { Button, classNames } from "ninjakit";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

import typography from "../typography/typography.module.css";
import styles from "./dialog.module.css";
import { useDialog } from "./index";

export function Dialog({
	actions,
	className,
	children,
	container = document.body,
	headline,
	icon,
	onClose,
	open = false,
	supportingText,
	...props
}: {
	actions?: ReactNode;
	container?: Element;
	headline?: ReactNode;
	icon?: ReactNode;
	onClose?: () => void;
	open?: boolean;
	supportingText?: ReactNode;
} & JSX.IntrinsicElements["div"]) {
	const { backdropProps, dialogProps, handleClickClose, mount } = useDialog({
		className,
		onClose,
		open,
	});

	return mount
		? createPortal(
				<div {...backdropProps} role="presentation">
					<div {...props} {...dialogProps} aria-modal role="dialog">
						<header className={styles.header}>
							{icon && <section className={styles.icon}>{icon}</section>}
							<section className={styles.row}>
								<div className={styles.headline}>
									<MdClose
										className={styles.close}
										onClick={handleClickClose}
									/>
									{headline && (
										<h1 className={typography.headlineSmall}>{headline}</h1>
									)}
								</div>
								{actions && <div className={styles.actions}>{actions}</div>}
							</section>
							{supportingText && (
								<section
									className={classNames({
										[typography.bodyMedium]: true,
										[styles.supportingText]: true,
									})}
								>
									{supportingText}
								</section>
							)}
						</header>
						{children && (
							<div
								className={classNames({
									[typography.bodyMedium]: true,
									[styles.body]: true,
								})}
							>
								{children}
							</div>
						)}
						<footer className={styles.footer}>
							<Button
								appearance="text"
								label="Cancel"
								onClick={handleClickClose}
							/>
							{actions}
						</footer>
					</div>
				</div>,
				container
		  )
		: null;
}
