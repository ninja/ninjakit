import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "ninjakit/style.css";
import "ninjakit/color-scheme";
import "./style.css";

const { hash, pathname, search } = location;

if (search[1] === "/") {
	const decoded = search
		.slice(1)
		.split("&")
		.map(function (segment) {
			return segment.replace(/~and~/g, "&");
		})
		.join("?");

	history.replaceState(null, "", pathname.slice(0, -1) + decoded + hash);
}
