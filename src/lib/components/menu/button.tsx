import { Button, MenuOptions } from "ninjakit";
import { useRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { ButtonProps } from "../button";
import { useMenu } from ".";
import { ButtonChangeHandler, Menu } from "./menu";
import styles from "./menu.module.css";

export function ButtonMenu({
	className: classNameOverride,
	container,
	id,
	onChange,
	options,
	...props
}: Omit<JSX.IntrinsicElements["button"], "id" | "onChange"> &
	ButtonProps & {
		container?: HTMLElement;
		id: string;
		onChange: ButtonChangeHandler;
		options: MenuOptions;
	}) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		refFieldset,
		refMenu,
		style,
		setExpanded,
	} = useMenu({ classNameOverride, id });

	const refControl = useRef<HTMLButtonElement | null>(null);

	return (
		<fieldset className={className} ref={refFieldset}>
			<Button
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
				className={styles.control}
				id={id}
				onClick={handleClickControl}
				onKeyDown={handleKeyDownControl}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
				{...props}
				ref={refControl}
			/>
			{expanded && (
				<Menu
					container={container}
					controlElement={refControl.current}
					menuId={menuId}
					onChange={onChange}
					options={options}
					ref={refMenu}
					setExpanded={setExpanded}
					style={style}
				/>
			)}
		</fieldset>
	);
}
