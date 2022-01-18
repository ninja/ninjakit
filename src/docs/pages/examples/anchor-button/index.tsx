import { AnchorButton, Card } from "ninjakit";
import { FunctionComponent } from "react";
import { MdThumbUp } from "react-icons/md";
import { Link } from "react-router-dom";

import { ButtonState, useButtonState } from "./state";

export const AnchorButtonExamples: FunctionComponent = () => {
	const state = useButtonState();
	const [{ appearance, external, leadingIcon, reactRouterLink }] = state;

	return (
		<Card appearance="elevated" id="anchor-button" title="AnchorButton">
			<section>
				<section>
					<AnchorButton
						appearance={appearance}
						href="#"
						label="Label"
						leadingIcon={leadingIcon ? <MdThumbUp /> : undefined}
						mergeWithChild={reactRouterLink}
						target={external ? "_blank" : "_self"}
					>
						{reactRouterLink && <Link to="." />}
					</AnchorButton>
				</section>
				<ButtonState state={state} />
			</section>
		</Card>
	);
};
