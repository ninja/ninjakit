import { useLayoutEffect, useRef, useState } from "react";

import styles from "./progress-bar.module.css";

export function ProgressBar({ progress = 0 }: { progress: number }) {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useLayoutEffect(() => {
		const progressBar = ref.current;

		if (progressBar) {
			progressBar.onresize = () => setWidth(progressBar.clientWidth);

			setWidth(progressBar.clientWidth);
		}
	}, [progress]);

	return (
		<div className={styles.container} ref={ref} role="progressbar">
			<div className={styles.bar} style={{ width: width * progress }} />
		</div>
	);
}
