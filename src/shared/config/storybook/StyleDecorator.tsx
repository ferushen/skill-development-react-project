import { Story } from '@storybook/react';
/* eslint-disable-next-line correct-fsd-import-paths/layer-import */
import '@/app/styles/index.scss';

// декоратор подключает глобальные стили
export const StyleDecorator = (StoryComponent: Story) => <StoryComponent />;
