import { AnchorButton, Article, Footer } from "ninjakit";
import { SiNetlify } from "react-icons/si";

import styles from "./sandbox.module.css";

export function Sandbox({ year }: { year: number }) {
	return (
		<Article
			footer={
				<Footer>
					<section>&copy; {year} Jamie Hoover</section>
					<AnchorButton
						appearance="text"
						href="https://www.netlify.com"
						target="_blank"
					>
						<SiNetlify />
						deploys by netlify
					</AnchorButton>
				</Footer>
			}
		>
			<iframe
				className={styles.iframe}
				src={`https://codesandbox.io/embed/github/ninja/ninjakit-examples/tree/master/?fontsize=14&hidenavigation=1&initialpath=%2F&module=%2Fsrc%2Fapp.tsx&theme=dark`}
				title="ninjaKit"
			></iframe>
		</Article>
	);
}
