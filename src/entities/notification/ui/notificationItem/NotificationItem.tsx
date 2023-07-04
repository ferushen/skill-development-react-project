import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import type { Notification } from '../../model/types/notification';

import { AppLink } from 'shared/ui/appLink/AppLink';
import { Card } from 'shared/ui/card/Card';
import { Text, TextSize } from 'shared/ui/text/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
	className?: string;
	item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const { className, item } = props;
	const { t } = useTranslation();

	const content = (
		<Card className={cn(cls.notificationItem, {}, [className])}>
			<Text title={item.title} text={item.description} size={TextSize.S} />
		</Card>
	);

	if (item.href) {
		return (
			<AppLink
				className={cls.link}
				to={item.href}
				target='_blank'
			>
				{content}
			</AppLink>
		);
	}

	return content;
});