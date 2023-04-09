import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './[FTName].module.scss';

interface [FTName]Props {
	className?: string;
}

const [FTName] = (props: [FTName]Props) => {
	const { className } = props;
	const { t } = useTranslation();

	const mods: Mods = {};

	return (
		<div className={cn(cls.[FTName | camelcase], mods, [className])}>
			{ /* eslint-disable-next-line */}
			{'[FTName]'}
		</div>
	);
};

export default memo([FTName]);