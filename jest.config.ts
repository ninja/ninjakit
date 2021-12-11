import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	collectCoverageFrom: ["<rootDir>/src/lib/**/*.ts?(x)"],
	displayName: "Unit Tests",
	moduleNameMapper: {
		"^.+\\.css$": "identity-obj-proxy",
		"^ninjakit(.*)$": "<rootDir>/src/lib$1",
	},
	roots: ["<rootDir>/src/lib"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jsdom",
	testMatch: ["<rootDir>/src/lib/**/*.test.ts?(x)"],
	transform: {
		"\\.(ts|tsx)$": "esbuild-runner/jest",
	},
};

export default config;
