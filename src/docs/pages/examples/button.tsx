import { Button, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdThumbUp } from "react-icons/md";

export const ButtonExamples: FunctionComponent = () => (
	<Card appearance="elevated" title="Button">
		<section>
			<Button appearance="elevated">Elevated</Button>
			<Button>Filled</Button>
			<Button>
				<MdThumbUp /> With Icon
			</Button>
			<Button appearance="outlined">Outlined</Button>
			<Button appearance="text">Text</Button>
		</section>
		<section>
			<Button appearance="elevated" disabled>
				Elevated
			</Button>
			<Button disabled>Filled</Button>
			<Button disabled>
				<MdThumbUp /> With Icon
			</Button>
			<Button appearance="outlined" disabled>
				Outlined
			</Button>
			<Button appearance="text" disabled>
				Text
			</Button>
		</section>
	</Card>
);
