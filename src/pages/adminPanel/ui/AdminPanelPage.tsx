import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/page';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
	className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
	const { className } = props;

	return (
		<Page
			className={cn(cls.adminPanelPage, {}, [className])}
			data-testid='AdminPanel'
		>
			{ /* eslint-disable-next-line */}
			{'AdminPanelPage'}
		</Page>
	);
};

export default memo(AdminPanelPage);