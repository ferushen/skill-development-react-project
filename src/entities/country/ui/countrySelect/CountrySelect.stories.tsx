import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '../../model/consts/country';
import { CountrySelect } from './CountrySelect';

export default {
	title: 'entities/CountrySelect',
	component: CountrySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: 'Russia' as Country,
};
