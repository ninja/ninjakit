import { MouseEventHandler, ReactNode } from "react";

type Appearance = "filled" | "outlined";

export type InputProps = {
	/** @see https://material.io/design/components/text-fields.html */
	appearance?: Appearance;
	error?: ReactNode;
	flex?: boolean;
	helper?: ReactNode;
	id: string; // id required by label htmlFor
	label?: ReactNode;
	leadingIcon?: ReactNode;
	onClickTrailingIcon?: MouseEventHandler<HTMLButtonElement>;
	trailingIcon?: ReactNode;
	warning?: ReactNode;
};

export { PasswordInput } from "./password";
export { TextInput } from "./text";
