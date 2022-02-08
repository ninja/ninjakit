import { Button, classNames } from "ninjakit";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

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
	separators = true,
	supportingText,
	...props
}: {
	actions?: ReactNode;
	container?: Element;
	headline?: ReactNode;
	icon?: ReactNode;
	onClose?: () => void;
	open?: boolean;
	separators?: boolean;
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
						<header
							className={classNames({
								[styles.header]: true,
								[styles.separator]: separators && !!children,
							})}
						>
							{icon && <section className={styles.icon}>{icon}</section>}
							<section className={styles.row}>
								<div className={styles.rowLeading}>
									<MdClose
										className={styles.close}
										onClick={handleClickClose}
									/>
									{headline && <h1 className={styles.headline}>{headline}</h1>}
								</div>
								{actions && (
									<div className={styles.headerActions}>{actions}</div>
								)}
							</section>
							{supportingText && (
								<section className={styles.supportingText}>
									{supportingText}
								</section>
							)}
						</header>
						{children && <div className={styles.body}>{children}</div>}
						<footer
							className={classNames({
								[styles.footer]: true,
								[styles.separator]: separators && !!children,
							})}
						>
							<div className={styles.footerActions}>
								<Button
									appearance="text"
									label="Cancel"
									onClick={handleClickClose}
								/>
								<>{actions}</>
							</div>
						</footer>
					</div>
				</div>,
				container
		  )
		: null;
}
