import { Button, MenuOptions } from "ninjakit";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { ButtonProps } from "../button";
import { useMenu } from ".";
import { Menu } from "./menu";
import styles from "./menu.module.css";

export function ButtonMenu<T extends string>({
	className: classNameOverride,
	container,
	id,
	onChange,
	options,
	...props
}: Omit<JSX.IntrinsicElements["button"], "id" | "onChange" | "value"> &
	ButtonProps & {
		container?: HTMLElement;
		id: string;
		onChange: (value: T) => void;
		options: MenuOptions<T>;
	}) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		refControl,
		refMenu,
		style,
		setExpanded,
	} = useMenu({ classNameOverride, id });

	return (
		<fieldset className={className}>
			<Button
				{...props}
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
				className={styles.control}
				id={id}
				onClick={handleClickControl}
				onKeyDown={handleKeyDownControl}
				ref={refControl}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			/>
			{expanded && (
				<Menu<T>
					container={container}
					controlId={id}
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
