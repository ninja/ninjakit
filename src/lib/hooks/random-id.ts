import { useCallback } from "react";

export const useRandomId = () =>
	useCallback(function randomId(): string {
		const uint32 = crypto.getRandomValues(new Uint32Array(1))[0];

		return uint32.toString(16);
	}, [])();
