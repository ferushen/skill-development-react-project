import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/profile';
import { getUserAuthData } from 'entities/user';

import { Text } from 'shared/ui/text/Text';
import { Button, ButtonVariant } from 'shared/ui/button/Button';
import { HStack } from 'shared/ui/stack/hStack/HStack';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation('profile');

	const dispatch = useAppDispatch();
	const readonly = useSelector(getProfileReadonly);
	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);

	const canEdit = (authData?.id !== undefined) ? authData?.id === profileData?.id : false;

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	// TODO: пересмотреть css-классы

	return (
		<HStack justify={'between'} gap={8} width={'max'} className={cn('', {}, [className])}>
			<div>
				<Text title={t('profile')} />
			</div>
			{canEdit && (
				<HStack gap={16} >
					{readonly
						? (
							<Button
								onClick={onEdit}
							>
								{t('edit')}
							</Button>
						)
						: (
							<>
								<Button
									variant={ButtonVariant.OutlineRed}
									onClick={onCancelEdit}
								>
									{t('cancel')}
								</Button>
								<Button
									onClick={onSave}
								>
									{t('save')}
								</Button>
							</>
						)}
				</HStack>
			)}
		</HStack>
	);
};