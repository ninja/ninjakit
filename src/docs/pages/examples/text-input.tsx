import { Card, Checkbox, Radioset, TextInput } from "ninjakit";
import { FunctionComponent, useRef, useState } from "react";
import { MdCancel, MdFavorite } from "react-icons/md";

export const TextInputExamples: FunctionComponent = () => {
	const ref = useRef<HTMLInputElement>(null);
	const [{ appearance, error, helper, leadingIcon, trailingIcon }, setOptions] =
		useState<{
			appearance: "filled" | "outlined";
			error: boolean;
			helper: boolean;
			leadingIcon: boolean;
			trailingIcon: boolean;
		}>({
			appearance: "filled",
			error: false,
			helper: false,
			leadingIcon: false,
			trailingIcon: false,
		});

	return (
		<Card appearance="elevated" id="text-input" title="TextInput">
			<section>
				<section>
					<TextInput
						appearance={appearance}
						error={error && "Error message"}
						helper={helper ? "Helper message" : undefined}
						id="text-input-example"
						label="Label"
						leadingIcon={leadingIcon && <MdFavorite />}
						onClickTrailingIcon={() => {
							if (ref.current) ref.current.value = "";
						}}
						ref={ref}
						trailingIcon={trailingIcon && <MdCancel />}
					/>
				</section>
				<aside>
					<Radioset<"filled" | "outlined">
						defaultValue="filled"
						label="Appearance"
						name="appearance"
						onChange={(appearance) =>
							setOptions((options) => ({ ...options, appearance }))
						}
						options={["filled", "outlined"]}
					/>
					<Checkbox
						label="Leading icon"
						onClick={() =>
							setOptions((options) => ({
								...options,
								leadingIcon: !leadingIcon,
							}))
						}
					/>
					<Checkbox
						label="Trailing icon"
						onClick={() =>
							setOptions((options) => ({
								...options,
								trailingIcon: !trailingIcon,
							}))
						}
					/>
					<Checkbox
						label="Helper message"
						onClick={() =>
							setOptions((options) => ({ ...options, helper: !options.helper }))
						}
					/>
					<Checkbox
						label="Error message"
						onClick={() =>
							setOptions((options) => ({ ...options, error: !options.error }))
						}
					/>
				</aside>
			</section>
		</Card>
	);
};
