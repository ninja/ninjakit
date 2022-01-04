import { FunctionComponent } from "react";

import { AnchorButtonExamples } from "./anchor-button";
import { ButtonExamples } from "./button";
import { ButtonMenuExamples } from "./button-menu";
import { InputMenuExamples } from "./input-menu";
import { RadiosetExamples } from "./radioset";
import { TextInputExamples } from "./text-input";

export const Examples: FunctionComponent = () => (
	<>
		<ButtonExamples />
		<AnchorButtonExamples />
		<TextInputExamples />
		<ButtonMenuExamples />
		<InputMenuExamples />
		<RadiosetExamples />
	</>
);

export { ColorSchemeExample } from "./color-scheme";
