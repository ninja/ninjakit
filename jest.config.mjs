export default {
	collectCoverageFrom: ["<rootDir>/src/lib/**/*.ts?(x)"],
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
