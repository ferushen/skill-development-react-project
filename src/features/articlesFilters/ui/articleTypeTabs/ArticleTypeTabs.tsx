import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { ArticleType } from 'entities/article';

import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
	className?: string;
	active?: ArticleType;
	onChangeTypeTab: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const {
		className,
		active,
		onChangeTypeTab
	} = props;
	const { t } = useTranslation();

	const mods: Mods = {};

	const tabs = useMemo<TabItem<ArticleType>[]>(() => [
		{
			value: ArticleType.All,
			content: t('all'),
		},
		{
			value: ArticleType.Economics,
			content: t('economics'),
		},
		{
			value: ArticleType.IT,
			content: 'IT',
		},
		{
			value: ArticleType.Science,
			content: t('science'),
		},
	], [t]);

	/*const onClickTab = useCallback((tab: TabItem<ArticleType>) => {
		onChangeTypeTab(tab.value);
	}, [onChangeTypeTab]);*/


	return (
		<Tabs
			className={cn(cls.articleTypeTabs, mods, [className])}
			tabs={tabs}
			active={active}
			/*onClickTab={onClickTab}*/
			onClickTab={onChangeTypeTab}
		/>
	);
});
