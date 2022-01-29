declare namespace PlaywrightTest {
	interface Matchers<R> {
		toHaveStyle(
			name: string,
			expected: string,
			pseudoElement?: "::before" | "::after"
		): Promise<R>;
	}
}
