import { MenuOption, TextInput } from "ninjakit";
import { forwardRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { InputProps } from "../input";
import { useMenu } from ".";
import { Menu } from "./menu";

export const InputMenu = forwardRef<
	HTMLInputElement,
	JSX.IntrinsicElements["input"] &
		InputProps & {
			container?: HTMLElement;
			options: MenuOption[];
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
		refControl,
		refFieldset,
		refMenu,
		setExpanded,
		style,
	} = useMenu<HTMLInputElement>({
		classNameOverride,
		element: "Input",
		flex,
		id,
	});

	return (
		<fieldset className={className} ref={refFieldset}>
			<TextInput
				aria-controls={menuId}
				aria-expanded={expanded}
				aria-haspopup="menu"
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
