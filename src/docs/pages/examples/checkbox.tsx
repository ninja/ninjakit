import { Card, Checkbox } from "ninjakit";
import { FunctionComponent } from "react";

export const CheckboxExamples: FunctionComponent = () => (
	<Card appearance="elevated" id="checkbox" title="Checkbox">
		<section>
			<Checkbox>One</Checkbox>
			<Checkbox defaultChecked label="Two" />
			<Checkbox disabled label="Three" />
			<Checkbox defaultChecked disabled label="Four" />
			<Checkbox indeterminate label="Two" />
		</section>
	</Card>
);
