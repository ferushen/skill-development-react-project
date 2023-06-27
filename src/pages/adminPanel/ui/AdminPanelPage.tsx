import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
	className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const mods: Mods = {};

	return (
		<div className={cn(cls.adminPanelPage, mods, [className])}>
			{ /* eslint-disable-next-line */}
			{'AdminPanelPage'}
		</div>
	);
};

export default memo(AdminPanelPage);