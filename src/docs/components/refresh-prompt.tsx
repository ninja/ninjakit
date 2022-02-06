import { Button, Dialog } from "ninjakit";
import { useRegisterSW } from "virtual:pwa-register/react";

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

	return (
		<Dialog
			actions={
				<Button
					appearance="text"
					label="Refresh"
					onClick={() => updateServiceWorker(true)}
				/>
			}
			headline="New Content Available"
			onClose={() => setNeedRefresh(false)}
			open={needRefresh}
			separators={false}
		/>
	);
}
