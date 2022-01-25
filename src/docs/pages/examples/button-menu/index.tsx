import { ButtonMenu, Card } from "ninjakit";
import { MdMenu } from "react-icons/md";

import styles from "../examples.module.css";
import { InputMenuState, options, useButtonMenuState } from "./state";

export function ButtonMenuExample() {
	const state = useButtonMenuState();
	const [{ appearance, disabled, leadingIcon }] = state;

	return (
		<Card appearance="elevated" id="button-menu" title="ButtonMenu">
			<section>
				<section className={styles.center}>
					<ButtonMenu
						appearance={appearance}
						disabled={disabled}
						id="button-menu-example"
						label="Label"
						leadingIcon={leadingIcon ? <MdMenu /> : undefined}
						onChange={(value) => console.info("ButtonMenu", { value })}
						options={options}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
}
