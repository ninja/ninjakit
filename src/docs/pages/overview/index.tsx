import { AnchorButton, Article, Card, Footer } from "ninjakit";
import { MouseEventHandler, useCallback, useState } from "react";
import { SiMaterialdesign, SiReact } from "react-icons/si";

import { Logo } from "../../components/logo";
import { Ninja } from "../../components/ninja";
import styles from "./dojo.module.css";

export function Overview({ year }: { year: number }) {
	const [wait, setWait] = useState(false);

	const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback(
		({ clientX, clientY, currentTarget }) => {
			if (wait) return;

			const { offsetHeight, offsetWidth } = currentTarget;
			const { left, top } = currentTarget.getBoundingClientRect();
			const x = Math.round(((clientX - left) / offsetWidth) * 100);
			const y = Math.round(((clientY - top) / offsetHeight) * 100);

			if (y > 100) {
				currentTarget.style.setProperty("--x", "50%");
				currentTarget.style.setProperty("--y", "50%");

				return;
			}

			currentTarget.style.setProperty("--x", `${x}%`);
			currentTarget.style.setProperty("--y", `${y}%`);

			setWait(true);

			setTimeout(() => setWait(false), 300);
		},
		[setWait, wait]
	);

	const handleMouseLeave: MouseEventHandler<HTMLDivElement> = useCallback(
		({ currentTarget }) => {
			currentTarget.style.setProperty("--x", "50%");
		},
		[]
	);

	return (
		<Article
			footer={
				<Footer>
					<section>&copy; {year} Jamie Hoover</section>
					<AnchorButton
						appearance="text"
						href="https://github.com/ninja/ninjakit/blob/master/LICENSE.md"
						target="_blank"
					>
						Apache 2.0 licensed
					</AnchorButton>
				</Footer>
			}
		>
			<Card
				appearance="elevated"
				className={styles.card}
				onMouseLeave={handleMouseLeave}
				onMouseMove={handleMouseMove}
			>
				<Ninja className={styles.ninja} />
				<section>
					<Logo />
					<h2>
						<SiMaterialdesign />
						<span>
							<strong>Material</strong> designed
						</span>
						<SiReact />
						<span>
							<strong>React</strong> components
						</span>
					</h2>
				</section>
			</Card>
		</Article>
	);
}
