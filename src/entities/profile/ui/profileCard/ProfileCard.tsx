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
					title={t('error_while_loading')}
					text={t('try_refreshing_the_page')}
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
							<Avatar src={data?.avatar} alt={t('avatar')} />
						</div>
					)}
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('nickname')}
						placeholder={t('enter_your_nickname')}
						value={data?.username}
						readonly={readonly}
						onChange={onChangeUsername}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('firstname')}
						placeholder={t('enter_your_firstname')}
						value={data?.firstname}
						readonly={readonly}
						onChange={onChangeFirstname}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('lastname')}
						placeholder={t('enter_your_last_name')}
						value={data?.lastname}
						readonly={readonly}
						onChange={onChangeLastname}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('age')}
						placeholder={t('enter_your_age')}
						value={data?.age}
						readonly={readonly}
						onChange={onChangeAge}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('city')}
						placeholder={t('enter_your_city')}
						value={data?.city}
						readonly={readonly}
						onChange={onChangeCity}
					/>
					<Input
						className={cls.inputWrapper}
						variant={InputVariant.OutlineDashed}
						label={t('link_to_avatar')}
						placeholder={t('provide_link')}
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