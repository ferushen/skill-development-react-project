import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '../../model/types/country';
import { CountrySelect } from './CountrySelect';

export default {
	title: 'entities/CountrySelect',
	component: CountrySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = () => <CountrySelect />;

export const Primary = Template.bind({});
Primary.args = {
	value: Country.Russia,
};
