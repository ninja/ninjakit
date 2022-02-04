import { AnchorButton, Card, useHashRef } from "ninjakit";
import { MdThumbUp } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "../examples.module.css";
import { ButtonState, useButtonState } from "./state";

export function AnchorButtonExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "anchor-button" });
	const state = useButtonState();
	const [{ appearance, external, leadingIcon, reactRouterLink }] = state;

	return (
		<Card
			appearance="elevated"
			id="anchor-button"
			ref={hashRef}
			title="AnchorButton"
		>
			<section>
				<section className={styles.center}>
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
}
