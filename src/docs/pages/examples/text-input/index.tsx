import { Card, TextInput } from "ninjakit";
import { FunctionComponent, useRef } from "react";
import { MdCancel, MdFavorite } from "react-icons/md";

import { TextInputState, useTextInputState } from "./state";

export const TextInputExamples: FunctionComponent = () => {
	const ref = useRef<HTMLInputElement>(null);
	const state = useTextInputState();
	const [{ appearance, error, flex, helper, leadingIcon, trailingIcon }] =
		state;

	return (
		<Card appearance="elevated" id="text-input" title="TextInput">
			<section>
				<section>
					<TextInput
						appearance={appearance}
						error={error && "Error message"}
						flex={flex}
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
				<TextInputState state={state} />
			</section>
		</Card>
	);
};
