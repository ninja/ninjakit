import { FunctionComponent } from "react";

import styles from "./example.module.css";

export const Example: FunctionComponent<{ module: string }> = ({ module }) => (
	<iframe
		className={styles.iframe}
		src={`https://codesandbox.io/embed/github/ninja/ninjakit-examples/tree/master/?fontsize=14&hidenavigation=1&initialpath=%2F${module}&module=%2Fsrc%2F${module}.tsx&theme=dark`}
		title={module}
	></iframe>
);
