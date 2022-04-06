import { ButtonMenu, Card, useHashRef } from "ninjakit";
import { MdFavorite, MdMenu } from "react-icons/md";

import styles from "../examples.module.css";
import { InputMenuState, useButtonMenuState } from "./state";

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
						onClick={({ currentTarget: { value } }) =>
							console.info("ButtonMenu click:", value)
						}
						options={[
							"Item One",
							{
								leadingIcon: <MdFavorite />,
								onClick: () => console.info("Clicked: Item Two"),
								value: "Item Two",
							},
							"Item Three",
							{ separator: true },
							"Item Four",
							"Item Five",
							{ disabled: true, value: "Item Six" },
							"Item Seven",
							"Item Eight",
							"Item Nine",
							"Item Ten",
						]}
					/>
				</section>
				<InputMenuState state={state} />
			</section>
		</Card>
	);
}
