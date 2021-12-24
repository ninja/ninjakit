import { Radio, RadiosetProps, useClassName } from ".";

/** @see https://material.io/components/radio-buttons */
export const Radioset = <T extends string>({
	children,
	className: override,
	defaultValue,
	label,
	name,
	onChange: handleChange,
	options,
	ref,
	...props
}: RadiosetProps<T>) => {
	const className = useClassName(override);

	return (
		<fieldset className={className} {...props}>
			{label && <legend>{label}</legend>}
			{children}
			{options.map((option, index) => {
				const { children, label, value, ...props }: Radio<T> =
					typeof option === "string" ? { value: option } : option;

				return (
					<label className="nk" key={`${name}-${value}-${index}`}>
						<input
							{...props}
							className="nk"
							defaultChecked={value === defaultValue}
							defaultValue={value}
							name={name}
							onChange={() => handleChange && handleChange(value)}
							ref={ref && ref[index]}
							type="radio"
						/>
						{children || label || value}
					</label>
				);
			})}
		</fieldset>
	);
};
