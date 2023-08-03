import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Button, ButtonVariant } from '@/shared/ui/button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const { className, short } = props;

	const toggle = async () => {
		const currentLng = i18n.language;

		let nextLng: string | null = null;

		switch (currentLng) {
			case 'ru':
				nextLng = 'en';
				break;
			case 'en':
				nextLng = 'ru';
				break;
			default:
				throw new Error(t('no_language_schema_found'));
		}

		document.documentElement.lang = nextLng;

		i18n.changeLanguage(nextLng);
	};

	return (
		<Button
			className={cn(cls.langSwitcher, {}, [className])}
			variant={ButtonVariant.Clear}
			animated={false}
			onClick={toggle}
		>
			{short ? t('change_language_short') : t('change_language')}
		</Button>
	);
});
