import { AnchorButton, Button, Header, Main, Nav } from "ninjakit";
import { StrictMode } from "react";
import { render } from "react-dom";
import { FaToriiGate } from "react-icons/fa";
import { GiKatana, GiStarShuriken } from "react-icons/gi";
import { MdShare } from "react-icons/md";
import { SiGithub, SiNpm } from "react-icons/si";
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
import { ReloadPrompt } from "./components/refresh-prompt";
import { Examples } from "./pages/examples";
import { Overview } from "./pages/overview";
import { Sandbox } from "./pages/sandbox";

function App() {
	const home = useMatch({ end: true, path: useResolvedPath("/").pathname });
	const year = new Date().getFullYear();

	return (
		<Main
			header={
				<Header>
					{home ? (
						<section />
					) : (
						<AnchorButton appearance="text" href="/">
							<Icon />
							<Logo />
						</AnchorButton>
					)}
					<section>
						{typeof navigator.share !== "undefined" && (
							<Button
								appearance="text"
								leadingIcon={<MdShare />}
								onClick={() =>
									navigator.share({
										text: "ninjaKit - Material Design for React",
										url: "https://ninjakit.dev",
									})
								}
							/>
						)}
						<AnchorButton
							appearance="text"
							href="https://www.npmjs.com/package/ninjakit"
							target="_blank"
						>
							<SiNpm />
							npm
						</AnchorButton>
						<AnchorButton
							appearance="text"
							href="https://github.com/ninja/ninjakit"
							target="_blank"
						>
							<SiGithub />
							git
						</AnchorButton>
					</section>
				</Header>
			}
			navigation={
				<Nav>
					<NavLink to="/">
						<FaToriiGate />
						Overview
					</NavLink>
					<NavLink to="/examples">
						<GiKatana />
						Examples
					</NavLink>
					<NavLink to="/sandbox">
						<GiStarShuriken />
						Sandbox
					</NavLink>
				</Nav>
			}
		>
			<Routes>
				<Route element={<Overview year={year} />} path="/" />
				<Route element={<Examples year={year} />} path="examples" />
				<Route element={<Sandbox year={year} />} path="sandbox" />
			</Routes>
		</Main>
	);
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
