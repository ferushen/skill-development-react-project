/* cSpell:disable */
import { StoryFn, Meta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Modal>;


const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, esse. Illum iure necessitatibus est enim blanditiis. Mollitia cupiditate ex reiciendis dolore impedit incidunt, maiores modi dolores vero repudiandae, temporibus expedita?'
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, esse. Illum iure necessitatibus est enim blanditiis. Mollitia cupiditate ex reiciendis dolore impedit incidunt, maiores modi dolores vero repudiandae, temporibus expedita?'
};
Dark.parameters = {
	theme: Theme.DARK
};