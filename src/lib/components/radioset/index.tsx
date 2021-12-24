import { Ref } from "react";

import typography from "../typography/typography.module.css";
import styles from "./radioset.module.css";

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
	label?: string;
	value: T;
};

export type RadiosetProps<T> = Omit<
	JSX.IntrinsicElements["fieldset"],
	"onChange" | "name" | "ref"
> & {
	defaultValue?: T;
	label?: string;
	name: string;
	onChange?: (value: T) => void;
	options: (Radio<T> | T)[];
	ref?: Ref<HTMLInputElement>[];
	value?: T;
};

export function useClassName(override?: string): string | undefined {
	return [typography.labelLarge, styles.radioset, override].join(" ").trim();
}

export { Radioset } from "./radioset";
