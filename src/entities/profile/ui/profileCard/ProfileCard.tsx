import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Profile } from '../../model/types/profile';

import { Input } from 'shared/ui/input/Input';
import { Text, TextAlign, TextVariant } from 'shared/ui/text/Text';
import { Loader } from 'shared/ui/loader/Loader';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import { HStack, VStack } from 'shared/ui/stack';

import cls from './ProfileCard.module.scss';
import { Card, CardVariant } from 'shared/ui/card/Card';

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

export const ProfileCard: FC<ProfileCardProps> = (props) => {
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

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	const classesLoading = [
		className,
		cls.loading
	];

	const classesError = [
		className,
		cls.error
	];

	if (isLoading) {
		return (
			<HStack className={cn('', {}, classesLoading)} width={'max'}>
				<Loader />
			</HStack>
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

	return (
		<Card
			className={cn(cls.profileCard, mods, [className])}
			variant={CardVariant.Outline}
			size={'extraLarge'}
		>
			<VStack
				className={cls.content}
				justify={'center'}
				gap={16}
			>
				{data?.avatar && (
					<Card
						className={cls.avatarWrapper}
						variant={CardVariant.Outline}
						color='bgColor'
					>
						<HStack width={'max'}>
							<Avatar src={data?.avatar} alt={t('avatar')} />
						</HStack>
					</Card>
				)}
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('nickname')}
					ratio='ratio_40_60'
					placeholder={t('enter_your_nickname')}
					value={data?.username}
					readonly={readonly}
					onChange={onChangeUsername}
				/>
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('firstname')}
					ratio='ratio_40_60'
					placeholder={t('enter_your_firstname')}
					value={data?.firstname}
					readonly={readonly}
					onChange={onChangeFirstname}
				/>
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('lastname')}
					ratio='ratio_40_60'
					placeholder={t('enter_your_last_name')}
					value={data?.lastname}
					readonly={readonly}
					onChange={onChangeLastname}
				/>
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('age')}
					ratio='ratio_40_60'
					placeholder={t('enter_your_age')}
					value={data?.age}
					readonly={readonly}
					onChange={onChangeAge}
				/>
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('city')}
					ratio='ratio_40_60'
					placeholder={t('enter_your_city')}
					value={data?.city}
					readonly={readonly}
					onChange={onChangeCity}
				/>
				<Input
					className={cls.inputWrapper}
					rounded='rounded_6'
					label={t('link_to_avatar')}
					ratio='ratio_40_60'
					placeholder={t('provide_link')}
					value={data?.avatar}
					readonly={readonly}
					onChange={onChangeAvatar}
				/>
				<CurrencySelect
					className={cls.inputWrapper}
					value={data?.currency}
					readonly={readonly}
					onChange={onChangeCurrency}
				/>
				<CountrySelect
					className={cls.inputWrapper}
					value={data?.country}
					readonly={readonly}
					onChange={onChangeCountry}
				/>
			</VStack>
		</Card>
	);
};