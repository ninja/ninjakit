import { Button, Card, Dialog, Radioset, useHashRef } from "ninjakit";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";

import styles from "../examples.module.css";
import { DialogState, useDialogState } from "./state";

export function DialogExample() {
	const hashRef = useHashRef<HTMLDivElement>({ id: "dialog" });
	const state = useDialogState();
	const [open, setOpen] = useState(false);
	const [{ actions, children, headline, icon, supportingText }] = state;

	return (
		<Card appearance="elevated" id="dialog" ref={hashRef} title="Dialog">
			<section>
				<section className={styles.center}>
					<Button
						appearance="elevated"
						label="Open Dialog"
						onClick={() => setOpen(!open)}
					/>
					<Dialog
						actions={
							actions && (
								<Button
									appearance="text"
									label="Save"
									onClick={() => setOpen(false)}
								/>
							)
						}
						headline={headline && "Headline"}
						icon={icon && <MdFavorite />}
						onClose={() => setOpen(false)}
						open={open}
						supportingText={supportingText && "Supporting text"}
					>
						{children && (
							<form>
								<Radioset name="letter" options={["A", "B", "C"]} />
							</form>
						)}
					</Dialog>
				</section>
				<DialogState state={state} />
			</section>
		</Card>
	);
}
