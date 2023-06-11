import { memo, useCallback } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCard';
import { selectProfileForm } from '../../model/selectors/selectProfileForm/selectProfileForm';
import { selectProfileIsLoading } from '../../model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { selectProfileReadonly } from '../../model/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileError } from '../../model/selectors/selectProfileError/selectProfileError';
import { selectProfileValidateErrors } from '../../model/selectors/selectProfileValidateErrors/selectProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';

import { EditableProfileCardHeader } from '../editableProfileCardHeader/EditableProfileCardHeader';
import { Country } from 'entities/country';
import { Currency } from 'entities/currency';
import { ProfileCard } from 'entities/profile';
import { Text, TextVariant } from 'shared/ui/text/Text';
import { VStack } from 'shared/ui/stack';

const reducers: ReducersList = {
	profile: profileReducer
};

interface EditableProfileCardProps {
	className?: string;
	id: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
	const { className, id } = props;
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	const formData = useSelector(selectProfileForm);
	const isLoading = useSelector(selectProfileIsLoading);
	const readonly = useSelector(selectProfileReadonly);
	const error = useSelector(selectProfileError);
	const validateErrors = useSelector(selectProfileValidateErrors);

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
			<VStack className={className} gap={16} width={'minMax'}>
				<EditableProfileCardHeader />
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
		</DynamicModuleLoader>
	);
});