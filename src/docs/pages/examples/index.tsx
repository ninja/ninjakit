import { FunctionComponent } from "react";

import { AnchorButtonExamples } from "./anchor-button";
import { ButtonExamples } from "./button";
import { RadiosetExamples } from "./radioset";

export const Examples: FunctionComponent = () => (
	<>
		<ButtonExamples />
		<AnchorButtonExamples />
		<RadiosetExamples />
	</>
);

export { ColorSchemeExample } from "./color-scheme";
