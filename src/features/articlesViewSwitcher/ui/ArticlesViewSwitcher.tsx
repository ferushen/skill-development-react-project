import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ArticleView } from 'entities/article';

import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';

import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import ListIcon from 'shared/assets/icons/list-24-24.svg';

import cls from './ArticlesViewSwitcher.module.scss';

interface ArticlesViewSwitcherProps {
	className?: string;
	activeView: ArticleView;
	onClickView?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.Grid,
		icon: GridIcon,
	},
	{
		view: ArticleView.List,
		icon: ListIcon,
	},
];

export const ArticlesViewSwitcher = memo((props: ArticlesViewSwitcherProps) => {
	const {
		className,
		activeView,
		onClickView
	} = props;

	const onClick = (newView: ArticleView) => () => {
		onClickView?.(newView);
	};

	return (
		<div className={cn(cls.articleViewSwitcher, {}, [className])}>
			{viewTypes.map(viewType => (
				<Button
					variant={ButtonVariant.CLEAR}
					key={viewType.view}
					onClick={onClick(viewType.view)}
				>
					<Icon
						className={cn('', { [cls.active]: viewType.view === activeView }, [cls.icon])}
						Svg={viewType.icon}
					/>
				</Button>
			))}
		</div>
	);
});