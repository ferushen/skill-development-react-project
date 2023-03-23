import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/appLink/AppLink';
import { SidebarItemType } from 'widgets/sidebar/model/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = (props) => {
	const {
		item,
		collapsed
	} = props;
	const { t } = useTranslation();

	const mods = {
		[cls.collapsed]: collapsed
	};

	return (
		<AppLink
			to={item.path}
			variant={AppLinkVariant.INVERTED}
			className={cn(cls.item, mods)}
		>
			<item.Icon className={cls.icon} />
			<span className={cls.link}>
				{t(item.text)}
			</span>
		</AppLink>
	);
};