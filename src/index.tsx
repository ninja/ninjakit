import {
	Button,
	Card,
	Grid,
	GridArticle,
	GridButton,
	GridHeader,
	GridNav,
	GridNavLink,
} from "ninjakit";
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import {
	MdAdd,
	MdClear,
	MdEdit,
	MdHome,
	MdMenu,
	MdOutlineContacts,
	MdOutlineHome,
	MdOutlineSettings,
} from "react-icons/md";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Grid>
			<GridNav>
				<GridButton icon={<MdEdit />}>Compose</GridButton>
				<GridNavLink
					active
					href="#"
					icon={<MdOutlineHome />}
					iconActive={<MdHome />}
				>
					Home
				</GridNavLink>
				<GridNavLink
					href="#"
					icon={<MdOutlineContacts />}
					iconActive={<MdHome />}
				>
					Contacts
				</GridNavLink>
				<GridNavLink
					href="#"
					icon={<MdOutlineSettings />}
					iconActive={<MdHome />}
				>
					Settings
				</GridNavLink>
			</GridNav>
			<GridHeader>
				<Button icon={<MdMenu />} kind="text" />
				Header
			</GridHeader>
			<GridArticle>
				<main>
					<Card kind="elevated" title="Title" subhead="Subhead">
						<p>This is an article card.</p>
						<p>Count: {count}</p>
						<section>
							<Button
								icon={<MdAdd />}
								onClick={() => setCount((count) => count + 1)}
							/>
							<Button
								onClick={() => setCount(0)}
								icon={<MdClear />}
								kind="text"
							>
								Clear
							</Button>
						</section>
					</Card>
				</main>
				<aside>
					<Card kind="filled" title="Title" subhead="Subhead">
						<p>This is an aside card.</p>
						<section>
							<Button>View Documents</Button>
						</section>
					</Card>
				</aside>
			</GridArticle>
		</Grid>
	);
}

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
