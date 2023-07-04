import { memo } from 'react';

import { NotificationList } from 'entities/notification';
import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';
import { Popover } from 'shared/ui/popups';

import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'

interface NotificationButtonProps {
	className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	const { className } = props;

	return (
		<Popover
			className={className}
			direction='bottom left'
			trigger={(
				<Button
					variant={ButtonVariant.Clear}
					format='square'
				>
					<Icon
						variant='inverted'
						Svg={NotificationIcon}
					/>
				</Button>
			)}
		>
			<NotificationList />
		</Popover>
	);
});