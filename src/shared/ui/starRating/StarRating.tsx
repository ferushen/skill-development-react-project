import { memo, useCallback, useEffect, useState } from 'react';
import { Mods, classNames as cn } from '@/shared/lib/classNames/classNames';

import { Icon } from '@/shared/ui/icon';

import IconStar from '@/shared/assets/icons/star-20-20.svg';

import cls from './StarRating.module.scss';

interface StarRatingProps {
	className?: string;
	size?: number;
	selectedStars?: number;
	onSelect?: (starsCount: number) => void;
	reset?: boolean;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
	const {
		className,
		size = 30,
		selectedStars = 0,
		onSelect,
		reset
	} = props;

	// состояние, необходимое для подсвечивания звезд при наведении курсора
	const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
	// состояние следит за тем, были ли выбраны звезды
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

	const onHover = useCallback((starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starsCount);
			//console.log('@onHover: inside condition: isSelected', isSelected);
			//console.log('@onHover: inside condition: currentStarsCount', currentStarsCount);
			//console.log('@onHover: inside condition: starsCount', starsCount);
		} else {
			//console.log('@onHover: isSelected', isSelected);
			//console.log('@onHover: currentStarsCount', currentStarsCount);
			//console.log('@onHover: starsCount', starsCount);
		}
	}, [isSelected]);

	const onLeave = useCallback(() => {
		if (!isSelected) {
			setCurrentStarsCount(0);
			//console.log('@onLeave: inside condition: isSelected', isSelected);

		} else {
			//console.log('@onLeave: isSelected', isSelected);
			//console.log('@onLeave: currentStarsCount', currentStarsCount);
		}
		//console.log('@onLeave: inside condition: currentStarsCount', currentStarsCount);
	}, [isSelected]);

	const onClick = useCallback((starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount);
			setCurrentStarsCount(starsCount);
			setIsSelected(true);
		}
	}, [isSelected, onSelect]);

	useEffect(() => {
		if (reset) {
			setIsSelected(false);
		}
	}, [reset]);

	const createStarMods = useCallback((starNumber: number) => {
		const starMods: Mods = {
			[cls.hovered]: (currentStarsCount >= starNumber),
			[cls.selected]: isSelected,
		};

		return starMods;
	}, [isSelected, currentStarsCount]);

	return (
		<div className={cn(cls.starRating, {}, [className])}>
			{stars.map((starNumber) => (
				<Icon
					className={cn(cls.starIcon, createStarMods(starNumber))}
					Svg={IconStar}
					width={size}
					height={size}
					onClick={onClick(starNumber)}
					onMouseEnter={onHover(starNumber)}
					onMouseLeave={onLeave}
					key={starNumber}
					data-testid={`StarRating.StarNumber${starNumber}`}
					data-selected={currentStarsCount >= starNumber}
				/>
			))}
		</div>
	);
});