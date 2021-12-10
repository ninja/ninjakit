import { Button, Card } from "ninjakit";
import { useRegisterSW } from "virtual:pwa-register/react";

import styles from "./reload-prompt.module.css";

export function ReloadPrompt() {
	const state: { reloadSW: string } = { reloadSW: "__RELOAD_SW__" };

	const {
		needRefresh: [needRefresh, setNeedRefresh],
		updateServiceWorker,
	} = useRegisterSW({
		onRegistered(serviceWorkerRegistration) {
			if (state.reloadSW === "true") {
				serviceWorkerRegistration &&
					setInterval(() => {
						serviceWorkerRegistration.update();
					}, 3600000);
			}
		},
		onRegisterError: console.error,
	});

	if (!needRefresh) return null;

	return (
		<Card
			className={styles.dialog}
			kind="filled"
			title="New Content Available"
			subhead="Reload to update"
		>
			<section>
				<Button kind="text" onClick={() => setNeedRefresh(false)}>
					Close
				</Button>
				<Button kind="filled" onClick={() => updateServiceWorker(true)}>
					Reload
				</Button>
			</section>
		</Card>
	);
}
