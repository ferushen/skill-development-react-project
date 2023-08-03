import { Suspense } from 'react';
import { StoryFn } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: StoryFn) => (
	// TODO: добавить перевод на fallback
	// eslint-disable-next-line
	<Suspense fallback={'Ожидаем подгрузки всех чанков'}>
		<StoryComponent />
	</Suspense>
);
