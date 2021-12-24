import { FunctionComponent } from "react";

import { AnchorButtonExamples } from "./anchor-button";
import { ButtonExamples } from "./button";
import { RadiosetExamples } from "./radioset";
import { TextInputExamples } from "./text-input";

export const Examples: FunctionComponent = () => (
	<>
		<ButtonExamples />
		<AnchorButtonExamples />
		<TextInputExamples />
		<RadiosetExamples />
	</>
);

export { ColorSchemeExample } from "./color-scheme";
