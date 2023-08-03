import { memo, useCallback, useState } from 'react';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

import { NotificationList } from '@/entities/notification';
import { Button, ButtonVariant } from '@/shared/ui/button';
import { Drawer } from '@/shared/ui/drawer';
import { Icon } from '@/shared/ui/icon';
import { Popover } from '@/shared/ui/popups';

import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props;
	const [isOpen, setIsOpen] = useState(false);

	const isMobile = useDevice();

	const onOpenDrawer = useCallback(() => {
		setIsOpen(true);
	}, []);

	const onCloseDrawer = useCallback(() => {
		setIsOpen(false);
	}, []);

	const trigger = (
		<Button
			variant={ButtonVariant.Clear}
			format='square'
			onClick={onOpenDrawer}
		>
			<Icon
				variant='inverted'
				Svg={NotificationIcon}
			/>
		</Button>
	);

	if (isMobile) {
		return (
			<>
				{trigger}
				<Drawer
					className={className}
					isOpen={isOpen}
					onClose={onCloseDrawer}
				>
					<NotificationList className={cls.notifications_mobile} />
				</Drawer>
			</>
		);
	}

	return (
		<Popover
			className={className}
			direction='bottom left'
			trigger={trigger}
		>
			<NotificationList />
		</Popover>
	);
});
