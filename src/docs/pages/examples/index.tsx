import { AnchorButtonExample } from "./anchor-button";
import { ButtonExample } from "./button";
import { ButtonMenuExample } from "./button-menu";
import { CheckboxExample } from "./checkbox";
import { InputMenuExample } from "./input-menu";
import { PasswordInputExample } from "./password-input";
import { RadiosetExample } from "./radioset";
import { TextInputExample } from "./text-input";
import { TypographyExamples } from "./typography";

export function Examples() {
	return (
		<>
			<AnchorButtonExample />
			<ButtonExample />
			<ButtonMenuExample />
			<CheckboxExample />
			<InputMenuExample />
			<PasswordInputExample />
			<RadiosetExample />
			<TextInputExample />
			<TypographyExamples />
		</>
	);
}

export { ColorSchemeExample } from "./color-scheme";
