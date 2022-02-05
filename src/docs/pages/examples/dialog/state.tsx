import { Checkbox } from "ninjakit";
import { Dispatch, SetStateAction, useState } from "react";

type DialogProps = {
	actions: boolean;
	children: boolean;
	headline: boolean;
	icon: boolean;
	separators: boolean;
	supportingText: boolean;
};

export function useDialogState() {
	return useState<DialogProps>(
		import.meta.env.DEV
			? {
					actions: true,
					children: true,
					headline: true,
					icon: true,
					separators: true,
					supportingText: true,
			  }
			: {
					actions: true,
					children: false,
					headline: true,
					icon: false,
					separators: true,
					supportingText: true,
			  }
	);
}

export function DialogState({
	state: [
		{ actions, children, headline, icon, separators, supportingText },
		setState,
	],
}: {
	state: [DialogProps, Dispatch<SetStateAction<DialogProps>>];
}) {
	return (
		<aside>
			<form>
				<Checkbox
					defaultChecked={headline}
					label="Headline"
					onClick={() =>
						setState((state) => ({
							...state,
							headline: !headline,
						}))
					}
				/>
				<Checkbox
					defaultChecked={supportingText}
					label="Supporting text"
					onClick={() =>
						setState((state) => ({
							...state,
							supportingText: !supportingText,
						}))
					}
				/>
				<Checkbox
					defaultChecked={actions}
					label="Actions"
					onClick={() =>
						setState((state) => ({
							...state,
							actions: !actions,
						}))
					}
				/>
				<Checkbox
					defaultChecked={children}
					label="Children"
					onClick={() =>
						setState((state) => ({
							...state,
							children: !children,
						}))
					}
				/>
				<Checkbox
					defaultChecked={separators}
					label="Separators"
					onClick={() =>
						setState((state) => ({
							...state,
							separators: !separators,
						}))
					}
				/>
				<Checkbox
					defaultChecked={icon}
					label="Icon"
					onClick={() =>
						setState((state) => ({
							...state,
							icon: !icon,
						}))
					}
				/>
			</form>
		</aside>
	);
}
