import { Button, Card, useAlert, useHashRef } from "ninjakit";

import styles from "./examples.module.css";

export function AlertExample() {
	const alert = useAlert();
	const hashRef = useHashRef<HTMLDivElement>({ id: "alert" });

	return (
		<Card appearance="elevated" id="alert" ref={hashRef} title="Alert">
			<section>
				<section className={styles.center}>
					<Button
						appearance="elevated"
						label="Default"
						onClick={() => alert({ message: "Default" })}
					/>
					<Button
						appearance="elevated"
						label="Info"
						onClick={() => alert({ message: "Info", status: "info" })}
					/>
					<Button
						appearance="elevated"
						label="Success"
						onClick={() => alert({ message: "Success", status: "success" })}
					/>
					<Button
						appearance="elevated"
						label="Warning"
						onClick={() => alert({ message: "Warning", status: "warning" })}
					/>
					<Button
						appearance="elevated"
						label="Error"
						onClick={() =>
							alert({
								action: <Button appearance="text" label="Retry" />,
								message: "An error occurred",
								status: "error",
							})
						}
					/>
					<Button
						appearance="elevated"
						label="Progress"
						onClick={() => {
							const message = "Uploading files...";
							const status = "info";
							let progress = 0;

							alert({ message, progress, status });

							const interval = setInterval(() => {
								if (progress < 1) {
									progress = Math.round((progress + 0.1) * 10) / 10;

									return alert({ message, progress, status });
								}

								clearInterval(interval);
								progress = 0;
								alert({
									message: "Files successfully uploaded",
									status: "success",
								});
							}, 600);
						}}
					/>
				</section>
			</section>
		</Card>
	);
}
