import { Story } from '@storybook/react';
import 'app/styles/index.scss';

// декоратор подключает глобальные стили
export const StyleDecorator = (StoryComponent: Story) => <StoryComponent />;