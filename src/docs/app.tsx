import {
	ButtonAnchor,
	Grid,
	GridArticle,
	GridFill,
	GridHeader,
	GridNav,
} from "ninjakit";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
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
import { Dojo } from "./pages/dojo";
import { Settings } from "./pages/settings";

function App() {
	const resolved = useResolvedPath("/");
	const home = useMatch({ end: true, path: resolved.pathname });
	const year = new Date().getFullYear();

	return (
		<Grid>
			<GridHeader>
				{!home && (
					<ButtonAnchor href="/" icon={<Icon />} kind="text">
						<Logo />
					</ButtonAnchor>
				)}
				<GridFill />
				<ButtonAnchor
					href="https://www.npmjs.com/package/ninjakit"
					icon={<SiNpm />}
					kind="text"
				>
					package
				</ButtonAnchor>
				<ButtonAnchor
					href="https://github.com/ninja/ninjakit"
					icon={<SiGithub />}
					kind="text"
				>
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
				<Routes>
					<Route element={<Dojo />} path="/" />
					<Route element={<Settings />} path="settings" />
				</Routes>
				<div />
				<footer>
					<span>&copy; {year} Jamie Hoover</span>
					<ButtonAnchor
						href="https://github.com/ninja/ninjakit/blob/master/LICENSE.md"
						kind="text"
					>
						Apache 2.0 licensed
					</ButtonAnchor>
					{!home && (
						<ButtonAnchor
							href="https://www.netlify.com"
							icon={<SiNetlify />}
							kind="text"
						>
							deploys by netlify
						</ButtonAnchor>
					)}
				</footer>
			</GridArticle>
		</Grid>
	);
}

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<ReloadPrompt />
	</StrictMode>,
	document.getElementById("app")
);
