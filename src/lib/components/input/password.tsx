import { TextInput } from "ninjakit";
import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { InputProps } from ".";

export const PasswordInput = forwardRef<
	HTMLInputElement,
	Omit<InputProps, "onClickTrailingIcon" | "trailingIcon"> &
		Omit<JSX.IntrinsicElements["input"], "id" | "type">
>(function PasswordInput({ id, ...props }, ref) {
	const [visibility, setVisibility] = useState(false);

	return (
		<TextInput
			{...props}
			autoCapitalize="off"
			autoCorrect="off"
			id={id}
			onClickTrailingIcon={() => setVisibility(!visibility)}
			ref={ref}
			spellCheck="false"
			trailingIcon={visibility ? <MdVisibility /> : <MdVisibilityOff />}
			type={visibility ? "text" : "password"}
		/>
	);
});
