import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
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

import { Page } from 'widgets/page/Page';
import { ProfilePageHeader } from './profilePageHeader/ProfilePageHeader';
import { Text, TextVariant } from 'shared/ui/text/Text';
import { VStack } from 'shared/ui/stack/vStack/VStack';

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

	const { id } = useParams<{ id: string }>();

	const validateErrorsTranslates = {
		[ValidateProfileError.IncorrectUserData]: t('first_and_last_names_are_require'),
		[ValidateProfileError.IncorrectAge]: t('invalid_age_value'),
		[ValidateProfileError.IncorrectCountry]: t('incorrect_region_value'),
		[ValidateProfileError.NoData]: t('no_data_specified'),
		[ValidateProfileError.ServerError]: t('error_while_saving'),
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

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(id));
		}
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page className={cn('', {}, [className])}>
				<VStack gap={16} max>
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
				</VStack>
			</Page>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;