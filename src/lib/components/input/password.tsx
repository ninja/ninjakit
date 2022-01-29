import { TextInput } from "ninjakit";
import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { InputProps } from ".";

export const PasswordInput = forwardRef<
	HTMLInputElement,
	{
		passwordRules?: (
			| ["allowed" | "required", "digit" | "lower" | "special" | "upper"]
			| ["max-consecutive" | "max-length" | "min-length", number]
		)[];
	} & Omit<InputProps, "onClickTrailingIcon" | "trailingIcon"> &
		Omit<JSX.IntrinsicElements["input"], "id" | "type">
>(function PasswordInput({ id, passwordRules, passwordrules, ...props }, ref) {
	const [visibility, setVisibility] = useState(false);

	return (
		<TextInput
			{...props}
			autoCapitalize="off"
			autoCorrect="off"
			id={id}
			onClickTrailingIcon={() => setVisibility(!visibility)}
			passwordrules={
				passwordRules
					? passwordRules.map(([key, value]) => `${key}: ${value};`).join(" ")
					: passwordrules
			}
			ref={ref}
			spellCheck="false"
			trailingIcon={visibility ? <MdVisibility /> : <MdVisibilityOff />}
			type={visibility ? "text" : "password"}
		/>
	);
});
