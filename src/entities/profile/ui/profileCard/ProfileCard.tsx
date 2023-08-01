import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import type { Profile } from '../../model/types/profile';

import { Currency, CurrencySelect } from '@/entities/currency';
import { Country, CountrySelect } from '@/entities/country';
import { Avatar } from '@/shared/ui/avatar';
import { Card, CardVariant } from '@/shared/ui/card';
import { HStack, VStack } from '@/shared/ui/stack';
import { Input, InputVariant } from '@/shared/ui/input';
import { Skeleton } from '@/shared/ui/skeleton';
import { Text, TextAlign, TextVariant } from '@/shared/ui/text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	readonly?: boolean;
	error?: string;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (value: Currency) => void;
	onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		readonly,
		error,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry
	} = props;
	const { t } = useTranslation('profile');

	const classesError = [
		className,
		cls.error
	];

	if (isLoading) {
		return (
			<Skeleton
				className={cls.skeletonContainer}
				variant='filled'
				size='big'
				width='100%'
				height={570}
				border='12px'
				data-testid='ProfileCard.Loader'
			/>
		);
	}

	if (error) {
		return (
			<HStack className={cn('', {}, classesError)}>
				<Text
					variant={TextVariant.Error}
					align={TextAlign.Center}
					title={t('error_while_loading')}
					text={t('try_refreshing_the_page')}
				/>
			</HStack>
		);
	}

	// TODO: уменьшить ширину BoxList, подправить цвет в темной теме и спозиционировать
	// TODO: сделать корректный перевод выбранной в BoxList страны
	// TODO: подумать над структурой ProfileCard

	if (!isLoading && !error && data) {
		return (
			<Card
				className={cn(cls.profileCard, {}, [className])}
				variant={CardVariant.Outline}
				size='extraLarge'
				data-testid='ProfileCard'
			>
				<VStack
					className={cls.content}
					justify='center'
					gap={16}
				>
					<Card
						className={cls.avatarWrapper}
						variant={CardVariant.Outline}
						color='bgColor'
					>
						<HStack width={'max'}>
							<Avatar
								src={data?.avatar}
								alt={t('avatar')}
							/>
						</HStack>
					</Card>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('nickname')}
						ratio='ratio_40_60'
						placeholder={t('enter_your_nickname')}
						value={data?.username}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeUsername}
						data-testid='ProfileCard.username'
					/>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('firstname')}
						ratio='ratio_40_60'
						placeholder={t('enter_your_firstname')}
						value={data?.firstname}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeFirstname}
						data-testid='ProfileCard.firstname'
					/>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('lastname')}
						ratio='ratio_40_60'
						placeholder={t('enter_your_last_name')}
						value={data?.lastname}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeLastname}
						data-testid='ProfileCard.lastname'
					/>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('age')}
						ratio='ratio_40_60'
						placeholder={t('enter_your_age')}
						value={data?.age}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeAge}
						data-testid='ProfileCard.age'
					/>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('city')}
						ratio='ratio_40_60'
						placeholder={t('enter_your_city')}
						value={data?.city}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeCity}
						data-testid='ProfileCard.city'

					/>
					<Input
						classNameWrapper={cls.inputWrapper}
						variant={InputVariant.BackgroundInverted}
						rounded='rounded_6'
						label={t('link_to_avatar')}
						ratio='ratio_40_60'
						placeholder={t('provide_link')}
						value={data?.avatar}
						readonly={readonly}
						placeholderReadonly={t('not_specified')}
						onChange={onChangeAvatar}
						data-testid='ProfileCard.avatar'
					/>
					<CountrySelect
						className={cls.inputWrapper}
						value={data?.country}
						readonly={readonly}
						onChange={onChangeCountry}
					/>
					<CurrencySelect
						className={cls.inputWrapper}
						value={data?.currency}
						readonly={readonly}
						onChange={onChangeCurrency}
					/>
				</VStack>
			</Card>
		);
	}
};