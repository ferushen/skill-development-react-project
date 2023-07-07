import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useNotifications } from '../../api/notificationApi';

import { NotificationItem } from '../notificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/skeleton/Skeleton';
import { VStack } from 'shared/ui/stack';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
	const { className } = props;

	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	});

	if (isLoading) {
		return (
			<VStack
				className={cn(cls.notifications, {}, [className])}
				gap={8}
				width='max'
			>
				<Skeleton width='100%' height={60} border='10px' />
				<Skeleton width='100%' height={60} border='10px' />
				<Skeleton width='100%' height={60} border='10px' />
			</VStack>
		);
	}

	return (
		<VStack
			className={cn(cls.notifications, {}, [className])}
			gap={8}
			width='max'
		>
			{data?.map(item => (
				<NotificationItem item={item} key={item.id} />
			))}
		</VStack>
	);
});