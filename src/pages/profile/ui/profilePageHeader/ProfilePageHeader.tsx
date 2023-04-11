import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/profile';
import { getUserAuthData } from 'entities/user';

import { Text } from 'shared/ui/text/Text';
import { Button, ButtonVariant } from 'shared/ui/button/Button';

import cls from './ProfilePageHeader.module.scss';

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

	return (
		<div className={cn(cls.profilePageHeader, {}, [className])}>
			<div className={cls.title}>
				<Text title={t('profile')} />
			</div>
			{canEdit && (
				<div className={cls.btns}>
					{readonly
						? (
							<Button
								className={cls.editBtn}
								onClick={onEdit}
							>
								{t('edit')}
							</Button>
						)
						: (
							<>
								<Button
									className={cls.cancelBtn}
									variant={ButtonVariant.OUTLINE_RED}
									onClick={onCancelEdit}
								>
									{t('cancel')}
								</Button>
								<Button
									className={cls.saveBtn}
									onClick={onSave}
								>
									{t('save')}
								</Button>
							</>
						)}
				</div>
			)}
		</div>
	);
};