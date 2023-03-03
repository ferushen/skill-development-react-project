import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
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
				throw new Error('Не найдена языковая схема');
		}

		document.documentElement.lang = nextLng;

		i18n.changeLanguage(nextLng);
	};

	return (
		<Button
			onClick={toggle}
			className={cn(cls.langSwitcher, {}, [className])}
			variant={ButtonVariant.CLEAR}
		>
			{t(short ? 'Смена языка сокр' : 'Смена языка')}
		</Button>
	);
};