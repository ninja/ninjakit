import { TextInput } from "ninjakit";
import {
	forwardRef,
	KeyboardEvent,
	MouseEvent,
	useCallback,
	useState,
} from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { InputProps } from ".";

export const PasswordInput = forwardRef<
	HTMLInputElement,
	Omit<InputProps, "onClickTrailingIcon" | "trailingIcon"> &
		Omit<JSX.IntrinsicElements["input"], "id" | "type">
>(function PasswordInput({ id, warning, ...props }, ref) {
	const [visibility, setVisibility] = useState(false);
	const [capsLock, setCapsLock] = useState(false);
	const handleModifierState = useCallback(
		(event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) => {
			setCapsLock(event.getModifierState("CapsLock"));
		},
		[]
	);

	return (
		<TextInput
			{...props}
			autoCapitalize="off"
			autoCorrect="off"
			id={id}
			onClick={handleModifierState}
			onClickTrailingIcon={() => setVisibility(!visibility)}
			onKeyDown={handleModifierState}
			ref={ref}
			spellCheck="false"
			trailingIcon={visibility ? <MdVisibility /> : <MdVisibilityOff />}
			type={visibility ? "text" : "password"}
			warning={capsLock ? "CapsLock is on" : warning}
		/>
	);
});
