import { AnchorButtonExamples } from "./anchor-button";
import { ButtonExamples } from "./button";
import { ButtonMenuExamples } from "./button-menu";
import { CheckboxExamples } from "./checkbox";
import { InputMenuExamples } from "./input-menu";
import { RadiosetExamples } from "./radioset";
import { TextInputExamples } from "./text-input";
import { TypographyExamples } from "./typography";

export function Examples() {
	return (
		<>
			<ButtonExamples />
			<AnchorButtonExamples />
			<TextInputExamples />
			<ButtonMenuExamples />
			<InputMenuExamples />
			<CheckboxExamples />
			<RadiosetExamples />
			<TypographyExamples />
		</>
	);
}

export { ColorSchemeExample } from "./color-scheme";
