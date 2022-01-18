import { Button } from "ninjakit";
import { ForwardedRef, forwardRef } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type { ButtonProps } from "../button";
import { Options, useMenu } from ".";
import { Menu } from "./menu";
import styles from "./menu.module.css";

declare module "react" {
	function forwardRef<T, P>(
		render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
	): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export const ButtonMenu = forwardRef(function ButtonMenu<T extends string>(
	{
		className: override,
		id,
		onChange,
		options,
		...props
	}: Omit<JSX.IntrinsicElements["button"], "id" | "onChange" | "value"> &
		ButtonProps & {
			id: string;
			onChange: (value: T) => void;
			options: Options<T>;
		},
	ref: ForwardedRef<HTMLButtonElement>
) {
	const {
		className,
		expanded,
		handleClickControl,
		handleKeyDownControl,
		menuId,
		setExpanded,
	} = useMenu({ id, override });

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
				ref={ref}
				trailingIcon={expanded ? <MdArrowDropUp /> : <MdArrowDropDown />}
			/>
			{expanded && (
				<Menu
					menuId={menuId}
					onChange={onChange}
					options={options}
					setExpanded={setExpanded}
				/>
			)}
		</fieldset>
	);
});
