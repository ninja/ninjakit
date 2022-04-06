import { ButtonMenu, Card, useHashRef } from "ninjakit";
import { MdMenu } from "react-icons/md";

import styles from "../examples.module.css";
import { InputMenuState, options, useButtonMenuState } from "./state";

export function ButtonMenuExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "button-menu" });
	const state = useButtonMenuState();
	const [{ appearance, disabled, leadingIcon }] = state;

	return (
		<Card
			appearance="elevated"
			id="button-menu"
			ref={hashRef}
			title="ButtonMenu"
		>
			<section>
				<section className={styles.center}>
					<ButtonMenu
						appearance={appearance}
						disabled={disabled}
						id="button-menu-example"
						label="Label"
						leadingIcon={leadingIcon ? <MdMenu /> : undefined}
						onChange={({ currentTarget: { value } }) =>
							console.info("ButtonMenu change:", value)
						}
						options={options}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
}
