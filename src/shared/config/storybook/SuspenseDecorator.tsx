import { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: Story) => (
	// TODO: добавить перевод на fallback
	// eslint-disable-next-line
	<Suspense fallback={'Ожидаем подгрузки всех чанков'}>
		<StoryComponent />
	</Suspense>
);