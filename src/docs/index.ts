import "ninjakit/color-scheme";

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
