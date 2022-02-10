import { Button, Header, Main, Nav, NavButton, useDrawerOpen } from "ninjakit";
import { StrictMode } from "react";
import { render } from "react-dom";
import { FaToriiGate } from "react-icons/fa";
import { GiKatana, GiStarShuriken } from "react-icons/gi";
import { MdMenu, MdMenuOpen, MdShare } from "react-icons/md";
import { SiApache, SiGithub, SiNpm } from "react-icons/si";
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
	const { drawerOpen, setDrawerOpen } = useDrawerOpen();

	return (
		<Main
			header={
				<Header>
					<section>
						<Button
							appearance="text"
							leadingIcon={drawerOpen ? <MdMenuOpen /> : <MdMenu />}
							onClick={() => setDrawerOpen(!drawerOpen)}
						/>
						{!home && (
							<>
								<Icon fontSize="3.2rem" />
								<Logo />
							</>
						)}
					</section>
				</Header>
			}
			navigation={
				<Nav drawerOpen={drawerOpen} limit={3}>
					<NavButton leadingIcon={<FaToriiGate />} mergeWithChild>
						<NavLink to="/">Overview</NavLink>
					</NavButton>
					<NavButton leadingIcon={<GiKatana />} mergeWithChild>
						<NavLink to="/examples">Examples</NavLink>
					</NavButton>
					<NavButton leadingIcon={<GiStarShuriken />} mergeWithChild>
						<NavLink to="/sandbox">Sandbox</NavLink>
					</NavButton>
					{typeof navigator.share !== "undefined" && (
						<NavButton
							label="Share link"
							leadingIcon={<MdShare />}
							onClick={() =>
								navigator.share({
									text: "ninjaKit - Material Design for React",
									url: "https://ninjakit.dev",
								})
							}
						/>
					)}
					<NavButton
						href="https://github.com/ninja/ninjakit"
						label="Repository"
						leadingIcon={<SiGithub />}
						target="_blank"
					/>
					<NavButton
						href="https://www.npmjs.com/package/ninjakit"
						label="Release"
						leadingIcon={<SiNpm />}
						target="_blank"
					/>
					<NavButton
						href="https://github.com/ninja/ninjakit/blob/master/LICENSE.md"
						label="License"
						leadingIcon={<SiApache />}
						target="_blank"
					/>
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
