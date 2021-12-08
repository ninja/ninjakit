const pathSegments = 0;
const { hash, hostname, pathname, port, protocol, search } = location;

location.replace(
	protocol +
		"//" +
		hostname +
		(port ? ":" + port : "") +
		pathname
			.split("/")
			.slice(0, 1 + pathSegments)
			.join("/") +
		"/?/" +
		pathname
			.slice(1)
			.split("/")
			.slice(pathSegments)
			.join("/")
			.replace(/&/g, "~and~") +
		(search ? "&" + search.slice(1).replace(/&/g, "~and~") : "") +
		hash
);

export {};
