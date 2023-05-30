import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { ArticleView } from 'entities/article';

import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';
import { HStack } from 'shared/ui/stack';

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
		<HStack
			className={cn('', {}, [className])}
			gap={8}
		>
			{viewTypes.map(viewType => (
				<Button
					key={viewType.view}
					className={cls.btn}
					variant={ButtonVariant.Clear}
					onClick={onClick(viewType.view)}
				>
					<Icon
						className={cn(cls.icon, { [cls.active]: viewType.view === activeView })}
						Svg={viewType.icon}
					/>
				</Button>
			))}
		</HStack>
	);
});