import { Meta, StoryFn } from '@storybook/react';
import { Currency } from '../../model/consts/currency';
import { CurrencySelect } from './CurrencySelect';

export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof CurrencySelect>;

const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: Currency.RUB,
};
