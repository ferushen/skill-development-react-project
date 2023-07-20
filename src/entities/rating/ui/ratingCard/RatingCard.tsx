import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';

import { Button, ButtonVariant } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Drawer } from '@/shared/ui/drawer';
import { Input, InputVariant } from '@/shared/ui/input';
import { Modal } from '@/shared/ui/modal';
import { StarRating } from '@/shared/ui/starRating';
import { Text } from '@/shared/ui/text';
import { HStack, VStack } from '@/shared/ui/stack';

import cls from './RatingCard.module.scss';

interface RatingCardProps {
	className?: string;
	title?: string;
	hasFeedback?: boolean;
	feedbackTitle?: string;
	rate?: number;
	onAccept?: (starsCount: number, feedback?: string) => void;
	onCancel?: (starsCount: number) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
	const {
		className,
		title,
		hasFeedback,
		feedbackTitle,
		rate = 0,
		onAccept,
		onCancel
	} = props;
	const { t } = useTranslation();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [reset, setReset] = useState(false);
	const [starsCount, setStarsCount] = useState(rate);
	const [feedback, setFeedback] = useState('');

	console.log('@RatingCard: rate', rate);
	console.log('@RatingCard: starsCount', starsCount);

	const isMobile = useDevice();

	const onSelectStars = useCallback((selectedStarsCount: number) => {
		setStarsCount(selectedStarsCount);
		if (hasFeedback) {
			setIsModalOpen(true);
			setReset(false);
		} else {
			onAccept?.(selectedStarsCount);
		}
	}, [onAccept, hasFeedback]);

	const acceptHandle = useCallback(() => {
		setIsModalOpen(false);
		onAccept?.(starsCount, feedback);
	}, [onAccept, starsCount, feedback]);

	const cancelHandle = useCallback(() => {
		setIsModalOpen(false);
		setStarsCount(0);
		setReset(true);
		onCancel?.(0);
	}, [onCancel]);

	// TODO: проработать верстку

	const content = (
		<VStack gap={30} width='max'>
			<Text title={feedbackTitle} />
			<Input
				placeholder={t('your_feedback')}
				variant={InputVariant.Primary}
				rounded='rounded_10'
				max
				value={feedback}
				onChange={setFeedback}
			/>
			<HStack
				justify='around'
				width='max'
			>
				<Button
					variant={ButtonVariant.BackgroundSecondaryInverted}
					onClick={acceptHandle}
				>
					{t('send')}
				</Button>
				<Button
					variant={ButtonVariant.OutlineRed}
					onClick={cancelHandle}
				>
					{t('cancel')}
				</Button>
			</HStack>
		</VStack>
	);

	return (
		<Card className={cn(cls.ratingCard, {}, [className])}>
			<VStack align='center' gap={8}>
				<Text title={starsCount && !isModalOpen ? t('thanks_for_your_rate') : title} />
				<StarRating
					size={40}
					selectedStars={starsCount}
					reset={reset}
					onSelect={onSelectStars}
				/>
			</VStack>
			{isMobile ? (
				<Drawer
					isOpen={isModalOpen}
					onClose={cancelHandle}
				>
					{content}
				</Drawer>
			) : (
				<Modal
					isOpen={isModalOpen}
					onClose={cancelHandle}
					lazy
				>
					{content}
				</Modal>
			)}
		</Card >
	);
});