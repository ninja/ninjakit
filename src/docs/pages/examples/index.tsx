import {
	AnchorButton,
	Article,
	Aside,
	Card,
	FloatingActionButton,
	Footer,
} from "ninjakit";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { SiNetlify } from "react-icons/si";
import { useLocation } from "react-router";

import { AnchorButtonExample } from "./anchor-button";
import { ButtonExample } from "./button";
import { ButtonMenuExample } from "./button-menu";
import { CheckboxExample } from "./checkbox";
import { ColorSchemeExample } from "./color-scheme";
import { InputMenuExample } from "./input-menu";
import { PasswordInputExample } from "./password-input";
import { RadiosetExample } from "./radioset";
import { TextInputExample } from "./text-input";
import { TypographyExamples } from "./typography";

export function Examples({ year }: { year: number }) {
	const { hash } = useLocation();

	useEffect(() => {
		document
			.getElementById(hash.replace("#", ""))
			?.scrollIntoView({ block: "start" });
	}, [hash]);

	return (
		<Article
			aside={
				<Aside>
					<ColorSchemeExample />
					<Card appearance="filled" title="Contents">
						<AnchorButton href="#anchor-button" label="AnchorButton" />
						<AnchorButton href="#button" label="Button" />
						<AnchorButton href="#button-menu" label="ButtonMenu" />
						<AnchorButton href="#checkbox" label="Checkbox" />
						<AnchorButton href="#input-menu" label="InputMenu" />
						<AnchorButton href="#password-input" label="PasswordInput" />
						<AnchorButton href="#radioset" label="RadioSet" />
						<AnchorButton href="#text-input" label="TextInput" />
						<AnchorButton href="#typography" label="Typography" />
					</Card>
				</Aside>
			}
			floatingActionButton={
				<FloatingActionButton>
					<MdEdit />
				</FloatingActionButton>
			}
			footer={
				<Footer>
					<section>&copy; {year} Jamie Hoover</section>
					<AnchorButton
						appearance="text"
						href="https://www.netlify.com"
						target="_blank"
					>
						<SiNetlify />
						deploys by netlify
					</AnchorButton>
				</Footer>
			}
		>
			<AnchorButtonExample />
			<ButtonExample />
			<ButtonMenuExample />
			<CheckboxExample />
			<InputMenuExample />
			<PasswordInputExample />
			<RadiosetExample />
			<TextInputExample />
			<TypographyExamples />
		</Article>
	);
}

export { ColorSchemeExample } from "./color-scheme";
