import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import MainPage from './MainPage';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>;


const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
	scrollSaver: {
		scroll: {}
	}
})];
