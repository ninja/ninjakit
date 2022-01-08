import { AnchorButton, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdThumbUp } from "react-icons/md";
import { Link } from "react-router-dom";

export const AnchorButtonExamples: FunctionComponent = () => (
	<Card appearance="elevated" id="anchor-button" title="AnchorButton">
		<section>
			<AnchorButton appearance="elevated" href="#">
				Elevated
			</AnchorButton>
			<AnchorButton appearance="filled" href="#">
				Filled
			</AnchorButton>
			<AnchorButton appearance="outlined" href="#">
				Outlined
			</AnchorButton>
			<AnchorButton href="#" leadingIcon={<MdThumbUp />}>
				With Icon
			</AnchorButton>
			<AnchorButton href="#" target="_blank">
				With External Target
			</AnchorButton>
			<AnchorButton
				appearance="elevated"
				label="With "
				leadingIcon={<MdThumbUp />}
				mergeWithChild
			>
				<Link to=".">React Router Link</Link>
			</AnchorButton>
		</section>
	</Card>
);
