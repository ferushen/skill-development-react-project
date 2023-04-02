import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileIsLoading,
	getProfileReadonly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
	ValidateProfileError
} from 'entities/profile';

import { Currency } from 'entities/currency';
import { Country } from 'entities/country';

import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader';
import { Text, TextVariant } from 'shared/ui/text/Text';

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadonly);
	const error = useSelector(getProfileError);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorsTranslates = {
		[ValidateProfileError.IncorrectUserData]: t('Имя и фамилия обязательны'),
		[ValidateProfileError.IncorrectAge]: t('Некорректный возраст'),
		[ValidateProfileError.IncorrectCountry]: t('Некорректный регион'),
		[ValidateProfileError.NoData]: t('Данные не указаны'),
		[ValidateProfileError.ServerError]: t('При сохранении произошла ошибка на сервере'),
	};

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ firstname: value || '' }));
	}, [dispatch]);

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ lastname: value || '' }));
	}, [dispatch]);

	const onChangeAge = useCallback((value?: string) => {
		const validatedValue = value?.replace(/\D+/gm, '');
		dispatch(profileActions.updateProfile({ age: Number(validatedValue || 0) }));
	}, [dispatch]);

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ city: value || '' }));
	}, [dispatch]);

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ username: value || '' }));
	}, [dispatch]);

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({ avatar: value || '' }));
	}, [dispatch]);

	const onChangeCurrency = useCallback((currency: Currency) => {
		dispatch(profileActions.updateProfile({ currency }));
	}, [dispatch]);

	const onChangeCountry = useCallback((country: Country) => {
		dispatch(profileActions.updateProfile({ country }));
	}, [dispatch]);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length && validateErrors.map(err => (
					<Text
						variant={TextVariant.Error}
						text={validateErrorsTranslates[err]}
						key={err}
					/>
				))}
				<ProfileCard
					data={formData}
					isLoading={isLoading}
					readonly={readonly}
					error={error}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;