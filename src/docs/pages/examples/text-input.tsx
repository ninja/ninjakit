import { Card, TextInput } from "ninjakit";
import { FunctionComponent, useRef } from "react";
import { MdCancel, MdFavorite } from "react-icons/md";

export const TextInputExamples: FunctionComponent = () => {
	const refFilled = useRef<HTMLInputElement>(null);
	const refOutlined = useRef<HTMLInputElement>(null);

	return (
		<Card appearance="elevated" id="text-input" title="TextInput">
			<section>
				<TextInput label="Filled" />
				<TextInput
					label="With Trailing Icon"
					onClickTrailingIcon={() =>
						refFilled.current && (refFilled.current.value = "")
					}
					ref={refFilled}
					trailingIcon={<MdCancel />}
				/>
				<TextInput label="With Leading Icon" leadingIcon={<MdFavorite />} />
				<TextInput
					defaultValue="value"
					error="Error message"
					label="With Error"
					leadingIcon={<MdFavorite />}
				/>
			</section>
			<section>
				<TextInput appearance="outlined" label="Outlined" />
				<TextInput
					appearance="outlined"
					label="With Trailing Icon"
					onClickTrailingIcon={() =>
						refOutlined.current && (refOutlined.current.value = "")
					}
					ref={refOutlined}
					trailingIcon={<MdCancel />}
				/>
				<TextInput
					appearance="outlined"
					label="With Leading Icon"
					leadingIcon={<MdFavorite />}
				/>
				<TextInput
					appearance="outlined"
					defaultValue="value"
					error="Error message"
					label="With Error"
					leadingIcon={<MdFavorite />}
				/>
			</section>
		</Card>
	);
};
