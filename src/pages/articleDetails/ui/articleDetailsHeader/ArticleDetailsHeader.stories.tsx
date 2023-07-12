import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsHeader } from './ArticleDetailsHeader';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
	title: 'pages/ArticleDetailsPage/ArticleDetailsHeader',
	component: ArticleDetailsHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	parameters: {
		router: {
			path: '/article/:id',
			route: '/article/1',
		}
	},
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => <ArticleDetailsHeader {...args} />;

export const Readonly = Template.bind({});
Readonly.decorators = [
	StoreDecorator({
		articleDetails: {
			data: {
				id: '1',
			}
		},
	})
];

export const Editable = Template.bind({});
Editable.decorators = [
	StoreDecorator({
		articleDetails: {
			data: {
				id: '1',
				user: {
					id: '1',
				},
			},
		},
		user: {
			authData: {
				id: '1',
			},
		},
	})
];

export const Loading = Template.bind({});
Loading.decorators = [
	StoreDecorator({
		articleDetails: {
			isLoading: true,
		},
	})
];

