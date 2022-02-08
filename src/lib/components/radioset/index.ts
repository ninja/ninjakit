import { ReactNode, Ref } from "react";

export type Radio<T> = Omit<
	JSX.IntrinsicElements["input"],
	| "defaultChecked"
	| "defaultValue"
	| "name"
	| "onChange"
	| "ref"
	| "type"
	| "value"
> & {
	label?: ReactNode;
	value: T;
};

export type RadiosetProps<T> = Omit<
	JSX.IntrinsicElements["fieldset"],
	"onChange" | "name" | "ref"
> & {
	defaultValue?: T;
	label?: ReactNode;
	name: string;
	onChange?: (value: T) => void;
	options: (Radio<T> | T)[];
	ref?: Ref<HTMLInputElement>[];
	value?: T;
};

export { Radioset } from "./radioset";
