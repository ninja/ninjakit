import { devices, PlaywrightTestConfig } from "@playwright/test";

const viewport = { height: 768, width: 1024 };

const config: PlaywrightTestConfig = {
	projects: [
		{
			name: "Chrome",
			use: { browserName: "chromium", channel: "chrome", viewport },
		},
		{
			name: "Firefox",
			use: { browserName: "firefox", viewport },
		},
		{
			name: "Safari",
			use: { browserName: "webkit", viewport },
		},
		{
			name: "Mobile Chrome",
			use: devices["Pixel 6"],
		},
		{
			name: "Mobile Safari",
			use: devices["iPhone 13"],
		},
	],
	webServer: {
		command: "vite",
		port: 3000,
		reuseExistingServer: !process.env.CI,
	},
};

export default config;
