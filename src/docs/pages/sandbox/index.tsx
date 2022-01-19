import styles from "./sandbox.module.css";

export function Sandbox() {
	return (
		<iframe
			className={styles.iframe}
			src={`https://codesandbox.io/embed/github/ninja/ninjakit-examples/tree/master/?fontsize=14&hidenavigation=1&initialpath=%2F&module=%2Fsrc%2Fapp.tsx&theme=dark`}
			title="ninjaKit"
		></iframe>
	);
}
