import { TextInput } from "ninjakit";
import { ForwardedRef, forwardRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { InputProps } from "../input";
import { Options, useMenu } from ".";
import { Menu } from "./menu";
import styles from "./menu.module.css";

declare module "react" {
	function forwardRef<T, P>(
		render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
	): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export const InputMenu = forwardRef(function InputMenu<T extends string>(
	{
		className: override,
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
		},
	ref: ForwardedRef<HTMLInputElement>
) {
	const {
		className,
		expanded,
		handleClickControl,
		handleFocusControl,
		handleKeyDownControl,
		menuId,
		setExpanded,
	} = useMenu({ flex, id, input: true, override });

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
				onClickTrailingIcon={handleClickControl}
				onFocus={handleFocusControl}
				onKeyDown={handleKeyDownControl}
				readOnly={readOnly}
				ref={ref}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			/>
			{expanded && (
				<Menu
					input
					menuId={menuId}
					onChange={onChange}
					options={options}
					setExpanded={setExpanded}
				/>
			)}
		</fieldset>
	);
});
