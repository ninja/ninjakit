import { init } from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import {
	ButtonAnchor,
	Grid,
	GridArticle,
	GridFill,
	GridHeader,
	GridNav,
} from "ninjakit";
import { StrictMode } from "react";
import { render } from "react-dom";
import { FaToriiGate } from "react-icons/fa";
import { GiKatana, GiStarShuriken } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { SiGithub, SiNetlify, SiNpm } from "react-icons/si";
import {
	BrowserRouter,
	NavLink,
	Route,
	Routes,
	useMatch,
	useResolvedPath,
} from "react-router-dom";

import { Icon } from "./components/icon";
import { Logo } from "./components/logo";
import { ReloadPrompt } from "./components/reload-prompt";
import { Components } from "./pages/components";
import { Dojo } from "./pages/dojo";
import { Hooks } from "./pages/hooks";
import { Settings } from "./pages/settings";

function App() {
	const resolved = useResolvedPath("/");
	const home = useMatch({ end: true, path: resolved.pathname });
	const year = new Date().getFullYear();

	return (
		<Grid>
			<GridHeader>
				{!home && (
					<ButtonAnchor appearance="text" href="/">
						<Icon />
						<Logo />
					</ButtonAnchor>
				)}
				<GridFill />
				<ButtonAnchor
					appearance="text"
					href="https://www.npmjs.com/package/ninjakit"
					target="_blank"
				>
					<SiNpm />
					package
				</ButtonAnchor>
				<ButtonAnchor
					appearance="text"
					href="https://github.com/ninja/ninjakit"
					target="_blank"
				>
					<SiGithub />
					repository
				</ButtonAnchor>
			</GridHeader>
			<GridNav>
				<NavLink to="/">
					<span>
						<FaToriiGate />
					</span>
					<span>Home</span>
				</NavLink>
				<NavLink to="/components">
					<span>
						<GiKatana />
					</span>
					<span>Components</span>
				</NavLink>
				<NavLink to="/hooks">
					<span>
						<GiStarShuriken />
					</span>
					<span>Hooks</span>
				</NavLink>
				<NavLink to="/settings">
					<span>
						<MdSettings />
					</span>
					<span>Settings</span>
				</NavLink>
			</GridNav>
			<GridArticle>
				<main>
					<Routes>
						<Route element={<Dojo />} path="/" />
						<Route element={<Components />} path="components" />
						<Route element={<Hooks />} path="hooks" />
						<Route element={<Settings />} path="settings" />
					</Routes>
				</main>
				<div />
				<footer>
					<span>&copy; {year} Jamie Hoover</span>
					{home ? (
						<ButtonAnchor
							appearance="text"
							href="https://github.com/ninja/ninjakit/blob/master/LICENSE.md"
							target="_blank"
						>
							Apache 2.0 licensed
						</ButtonAnchor>
					) : (
						<ButtonAnchor
							appearance="text"
							href="https://www.netlify.com"
							target="_blank"
						>
							<SiNetlify />
							deploys by netlify
						</ButtonAnchor>
					)}
				</footer>
			</GridArticle>
		</Grid>
	);
}

if (typeof import.meta.env.SENTRY_DSN === "string") {
	init({
		dsn: import.meta.env.SENTRY_DSN,
		integrations: [new BrowserTracing()],
		tracesSampleRate: 1.0,
	});
}

render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<ReloadPrompt />
	</StrictMode>,
	document.getElementById("app")
);
