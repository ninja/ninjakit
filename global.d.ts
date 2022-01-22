declare namespace PlaywrightTest {
	interface Matchers<R> {
		toHaveCSSOpacity(expected: string): Promise<R>;
		toHavePseudoCSS(
			pseudoElement: "::before" | "::after",
			name: string,
			expected: string
		): Promise<R>;
	}
}
