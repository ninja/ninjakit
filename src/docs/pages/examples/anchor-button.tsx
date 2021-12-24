import { AnchorButton, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdThumbUp } from "react-icons/md";

export const AnchorButtonExamples: FunctionComponent = () => (
	<Card appearance="elevated" title="AnchorButton">
		<section>
			<AnchorButton appearance="elevated" href="#">
				Elevated
			</AnchorButton>
			<AnchorButton href="#">Filled</AnchorButton>
			<AnchorButton href="#">
				<MdThumbUp /> With Icon
			</AnchorButton>
			<AnchorButton href="#" target="_blank">
				With External Target
			</AnchorButton>
			<AnchorButton appearance="outlined" href="#">
				Outlined
			</AnchorButton>
			<AnchorButton appearance="text" href="#">
				Text
			</AnchorButton>
		</section>
	</Card>
);
