import { classNames } from "ninjakit";

import { Radio, RadiosetProps } from ".";
import styles from "./radioset.module.css";

/** @see https://material.io/components/radio-buttons */
export function Radioset<T extends string>({
	children,
	className,
	defaultValue,
	disabled: allDisabled,
	label,
	name,
	onChange: handleChange,
	options,
	ref,
	...props
}: RadiosetProps<T>) {
	return (
		<fieldset
			className={classNames({
				[styles.radioset]: true,
				className,
			})}
			{...props}
		>
			{label && <legend>{label}</legend>}
			{children}
			{options.map((option, index) => {
				const { children, disabled, label, value, ...props }: Radio<T> =
					typeof option === "string" ? { value: option } : option;

				return (
					<label
						className={disabled || allDisabled ? `nk ${styles.disabled}` : "nk"}
						key={`${name}-${value}-${index}`}
					>
						<input
							{...props}
							className="nk"
							defaultChecked={value === defaultValue}
							defaultValue={value}
							disabled={disabled || allDisabled}
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
}
