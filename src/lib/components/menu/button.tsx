import { Button, MenuOption } from "ninjakit";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { ButtonProps } from "../button";
import { useMenu } from ".";
import { Menu } from "./menu";

export function ButtonMenu({
	className: classNameOverride,
	container,
	id,
	onClick,
	options,
	...props
}: Omit<JSX.IntrinsicElements["button"], "id"> &
	ButtonProps & {
		container?: HTMLElement;
		id: string;
		options: MenuOption[];
	}) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		refControl,
		refFieldset,
		refMenu,
		style,
		setExpanded,
	} = useMenu<HTMLButtonElement>({ classNameOverride, element: "Button", id });

	return (
		<fieldset className={className} ref={refFieldset}>
			<Button
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
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
					onClick={onClick}
					options={options}
					ref={refMenu}
					setExpanded={setExpanded}
					style={style}
				/>
			)}
		</fieldset>
	);
}
