import { ReactNode } from "react";

type Appearance = "elevated" | "filled" | "tonal" | "outlined" | "text";

export type ButtonProps = {
	/** @see https://m3.material.io/components/all-buttons */
	appearance?: Appearance;
	label?: ReactNode;
	leadingIcon?: ReactNode;
	trailingIcon?: ReactNode;
};

export { AnchorButton } from "./anchor";
export { Button } from "./button";
