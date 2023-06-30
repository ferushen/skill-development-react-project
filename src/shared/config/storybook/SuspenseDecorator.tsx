import { Suspense } from 'react';
import { Story } from '@storybook/react';

export const SuspenseDecorator = (StoryComponent: Story) => (
	<Suspense fallback={'Ожидаем подгрузки всех чанков'}>
		<StoryComponent />
	</Suspense>
);