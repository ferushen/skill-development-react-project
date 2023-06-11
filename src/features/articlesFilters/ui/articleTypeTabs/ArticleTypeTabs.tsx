import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from 'entities/article';

import { TabItem, Tabs } from 'shared/ui/tabs/Tabs';

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
	const { t } = useTranslation('article');

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
			className={className}
			color='secondary'
			tabs={tabs}
			active={active}
			/*onClickTab={onClickTab}*/
			onClickTab={onChangeTypeTab}
		/>
	);
});

