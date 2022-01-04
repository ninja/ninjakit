import { MenuItem, useRandomId } from "ninjakit";

export const useMenuItems = () => {
	const randomId = useRandomId();

	return [
		{ label: "Item One", value: "item-one" },
		{ label: "Item Two", value: "item-two" },
		{ disabled: true, label: "Item Three", value: "item-three" },
		{ separator: true },
		{ label: "Item Four", value: "item-four" },
		{ label: "Item Five", value: "item-five" },
		{ label: "Item Six", value: "item-six" },
		{ label: "Item Seven", value: "item-seven" },
		{ label: "Item Eight", value: "item-eight" },
		{ label: "Item Nine", value: "item-nine" },
		{ label: "Item Ten", value: "item-ten" },
	].map(({ disabled, label, separator, value }) => {
		return (
			<MenuItem
				disabled={disabled}
				key={`${randomId}-${value}`}
				separator={separator}
				value={value}
			>
				{label}
			</MenuItem>
		);
	});
};
