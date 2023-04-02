import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';

import { Profile } from '../../model/types/profile';

import { Input, InputVariant } from 'shared/ui/input/Input';
import { Text, TextAlign, TextVariant } from 'shared/ui/text/Text';
import { Loader } from 'shared/ui/loader/Loader';
import { Avatar } from 'shared/ui/avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';

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

	const additionalClassesLoading = [
		className,
		cls.loading
	];

	const additionalClassesError = [
		className,
		cls.error
	];

	if (isLoading) {
		return (
			<div className={cn(cls.profileCard, {}, additionalClassesLoading)}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={cn(cls.profileCard, {}, additionalClassesError)}>
				<Text
					variant={TextVariant.Error}
					align={TextAlign.Center}
					title={t('Произошла ошибка при загрузке пользователя')}
					text={t('Попробуйте обновить страницу')}
				/>
			</div>
		);
	}

	return (
		<div className={cn(cls.profileCard, mods, [className])}>
			<div className={cls.content}>
				<div className={cls.data}>
					{data?.avatar && (
						<div className={cls.avatarWrapper}>
							<Avatar src={data?.avatar} alt={t('аватар')} />
						</div>
					)}
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Никнейм')}
						placeholder={t('Введите ваш никнейм')}
						value={data?.username}
						readonly={readonly}
						onChange={onChangeUsername}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Имя')}
						placeholder={t('Введите ваше имя')}
						value={data?.firstname}
						readonly={readonly}
						onChange={onChangeFirstname}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Фамилия')}
						placeholder={t('Введите вашу фамилию')}
						value={data?.lastname}
						readonly={readonly}
						onChange={onChangeLastname}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Возраст')}
						placeholder={t('Введите ваш возраст')}
						value={data?.age}
						readonly={readonly}
						onChange={onChangeAge}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Город')}
						placeholder={t('Введите ваш город')}
						value={data?.city}
						readonly={readonly}
						onChange={onChangeCity}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('Ссылка на аватар')}
						placeholder={t('Укажите ссылку')}
						value={data?.avatar}
						readonly={readonly}
						onChange={onChangeAvatar}
					/>
					<CurrencySelect
						className={cls.select}
						value={data?.currency}
						readonly={readonly}
						onChange={onChangeCurrency}
					/>
					<CountrySelect
						className={cls.select}
						value={data?.country}
						readonly={readonly}
						onChange={onChangeCountry}
					/>
				</div>
			</div>
		</div>
	);
};