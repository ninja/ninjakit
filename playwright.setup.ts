import { FullConfig } from "@playwright/test";

export default async function ({ projects }: FullConfig) {
	console.log({ projects });
}
