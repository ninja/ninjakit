import { MenuOptions, TextInput } from "ninjakit";
import { forwardRef, useRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { InputProps } from "../input";
import { useMenu } from ".";
import { Menu } from "./menu";
import styles from "./menu.module.css";

export const InputMenu = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"] &
		InputProps & {
			container?: HTMLElement;
			options: MenuOptions;
		}
>(function InputMenu(
	{
		className: classNameOverride,
		container,
		flex,
		id,
		options,
		readOnly = true,
		...props
	},
	ref
) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		refFieldset,
		refMenu,
		setExpanded,
		style,
	} = useMenu({ classNameOverride, flex, id, input: true });

	const refControl = useRef<HTMLInputElement | null>(null);

	return (
		<fieldset className={className} ref={refFieldset}>
			<TextInput
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
				className={styles.control}
				flex={flex}
				id={id}
				onClick={handleClickControl}
				onClickTrailingIcon={handleClickControl}
				onKeyDown={handleKeyDownControl}
				readOnly={readOnly}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
				{...props}
				ref={(node) => {
					if (typeof ref === "function") ref(node);
					refControl.current = node;
				}}
			/>
			{expanded && (
				<Menu
					container={container}
					controlElement={refControl.current}
					menuId={menuId}
					options={options}
					ref={refMenu}
					setExpanded={setExpanded}
					style={style}
				/>
			)}
		</fieldset>
	);
});
