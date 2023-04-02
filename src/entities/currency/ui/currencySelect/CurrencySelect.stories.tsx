import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from '../../model/types/currency';
import { CurrencySelect } from './CurrencySelect';

export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = () => <CurrencySelect />;

export const Primary = Template.bind({});
Primary.args = {
	value: Currency.EUR,
};
