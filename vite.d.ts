/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

import type { HTMLAttributes } from "react";

declare module "react" {
	interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
		passwordrules?: string;
	}
}
