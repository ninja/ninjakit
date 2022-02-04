import { Card, InputMenu, useHashRef } from "ninjakit";
import { MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { InputMenuState, options, useInputMenuState } from "./state";

export function InputMenuExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "input-menu" });
	const state = useInputMenuState();
	const [{ appearance, disabled, error, flex, helper, leadingIcon }] = state;

	return (
		<Card appearance="elevated" id="input-menu" ref={hashRef} title="InputMenu">
			<section>
				<section className={styles.center}>
					<InputMenu
						appearance={appearance}
						disabled={disabled}
						error={error && "Error message"}
						flex={flex}
						helper={helper ? "Helper message" : undefined}
						id="input-menu-example"
						label="Label"
						leadingIcon={leadingIcon && <MdFavorite />}
						onChange={(value) => console.info("InputMenu", { value })}
						options={options}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
}
