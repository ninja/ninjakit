import { appendFile, readdir, readFile, writeFile } from "fs/promises";

const files = await readdir(new URL("tokens", import.meta.url));

files.forEach(async (file) => {
	const { entities } = JSON.parse(
		await readFile(new URL(`tokens/${file}`, import.meta.url))
	);
	const filename = new URL(`${file.split(".")[0]}.css`, import.meta.url);

	await writeFile(
		filename,
		":root {\n" +
			entities
				.filter(({ category_id }) => category_id === "sys.color.light")
				.map(
					({ id, value }) =>
						`\t--md-color-${id.split(".")[3]}: ${value.toLowerCase()};`
				)
				.join("\n") +
			"\n}\n\n",
		"utf-8"
	);

	await appendFile(
		filename,
		":root.dark {\n" +
			entities
				.filter(({ category_id }) => category_id === "sys.color.dark")
				.map(
					({ id, value }) =>
						`\t--md-color-${id.split(".")[3]}: ${value.toLowerCase()};`
				)
				.join("\n") +
			"\n}\n\n",
		"utf-8"
	);

	await appendFile(
		filename,
		":root {\n" +
			entities
				.filter(({ category_id }) => category_id === "ref.palette")
				.map(
					({ id, value }) =>
						`\t--md-ref-palette-${id.split(".")[3]}: ${value.toLowerCase()};`
				)
				.join("\n") +
			"\n}\n",
		"utf-8"
	);
});
