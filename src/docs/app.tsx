import { init } from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import {
	AnchorButton,
	Article,
	Aside,
	FloatingActionButton,
	Footer,
	Header,
	Main,
	Nav,
} from "ninjakit";
import { StrictMode } from "react";
import { render } from "react-dom";
import { FaToriiGate } from "react-icons/fa";
import { GiKatana, GiStarShuriken } from "react-icons/gi";
import { MdEdit } from "react-icons/md";
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
import { ColorSchemeExample, Examples } from "./pages/examples";
import { Overview } from "./pages/overview";
import { Sandbox } from "./pages/sandbox";

function App() {
	const home = useMatch({ end: true, path: useResolvedPath("/").pathname });
	const examples = useMatch({
		end: true,
		path: useResolvedPath("/examples").pathname,
	});
	const year = new Date().getFullYear();

	return (
		<Main>
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
			<Article>
				<Article>
					<Routes>
						<Route element={<Overview />} path="/" />
						<Route element={<Examples />} path="examples" />
						<Route element={<Sandbox />} path="sandbox" />
					</Routes>
					<Footer>
						<section>&copy; {year} Jamie Hoover</section>
						{home ? (
							<AnchorButton
								appearance="text"
								href="https://github.com/ninja/ninjakit/blob/master/LICENSE.md"
								target="_blank"
							>
								Apache 2.0 licensed
							</AnchorButton>
						) : (
							<AnchorButton
								appearance="text"
								href="https://www.netlify.com"
								target="_blank"
							>
								<SiNetlify />
								deploys by netlify
							</AnchorButton>
						)}
					</Footer>
					{examples && (
						<FloatingActionButton>
							<MdEdit />
						</FloatingActionButton>
					)}
				</Article>
				{examples && (
					<Aside>
						<ColorSchemeExample />
					</Aside>
				)}
			</Article>
		</Main>
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
