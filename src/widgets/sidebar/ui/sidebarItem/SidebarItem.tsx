import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';

import type { SidebarItemType } from '../../model/types/sidebar';

import { AppLink, AppLinkVariant } from 'shared/ui/appLink/AppLink';
import { HStack } from 'shared/ui/stack';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const {
		item,
		collapsed
	} = props;
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	const mods: Mods = {
		[cls.collapsed]: collapsed
	};

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink
			to={item.path}
			variant={AppLinkVariant.INVERTED}
		>
			<HStack
				className={cn(cls.item, mods)}
				justify={'start'}
				gap={16}
			>
				<item.Icon className={cls.icon} />
				<span className={cls.link}>
					{/* i18next-extract-disable-next-line */}
					{t(item.text)}
				</span>
			</HStack>
		</AppLink>
	);
});