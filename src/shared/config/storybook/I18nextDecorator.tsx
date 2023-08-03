import { Suspense, useEffect } from 'react';
import { Story, StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/config/i18n/i18n';

export const I18nextDecorator = (StoryComponent: Story, context: StoryContext) => {
	const { locale } = context.globals;

	// When the locale global changes
	// Set the new locale in i18n
	useEffect(() => {
		i18n.changeLanguage(locale);
	}, [locale]);

	return (
		// This catches the suspense from components not yet ready (still loading translations)
		// Alternative: set useSuspense to false on i18next.options.react when initializing i18next
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<StoryComponent />
			</I18nextProvider>
		</Suspense>
	);
};
