import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
	className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const mods: Mods = {};

	return (
		<div className={cn(cls.forbiddenPage, mods, [className])}>
			{t('no_access_to_the_page')}
		</div>
	);
};

export default memo(ForbiddenPage);