import { TextInput } from "ninjakit";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { InputProps } from "../input";
import { Options, useMenu } from ".";
import { Menu } from "./menu";
import styles from "./menu.module.css";

export function InputMenu<T extends string>({
	className: classNameOverride,
	flex,
	id,
	onChange,
	options,
	readOnly = true,
	...props
}: Omit<JSX.IntrinsicElements["input"], "onChange"> &
	InputProps & {
		onChange: (value: T) => void;
		options: Options<T>;
	}) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		refControl,
		refMenu,
		setExpanded,
		style,
	} = useMenu({ classNameOverride, flex, id, input: true });

	return (
		<fieldset className={className}>
			<TextInput
				{...props}
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
				ref={refControl}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			/>
			{expanded && (
				<Menu<T>
					input
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
