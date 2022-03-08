import { AnchorButton } from "ninjakit";
import { forwardRef, useContext } from "react";

import { ButtonProps } from "../button";
import { context } from ".";

export const NavButton = forwardRef<
	HTMLAnchorElement,
	ButtonProps & { mergeWithChild?: boolean } & JSX.IntrinsicElements["a"]
>(function NavButton({ ...props }, ref) {
	const { drawerOpen } = useContext(context);

	return <AnchorButton {...props} drawerOpen={drawerOpen} nav ref={ref} />;
});
