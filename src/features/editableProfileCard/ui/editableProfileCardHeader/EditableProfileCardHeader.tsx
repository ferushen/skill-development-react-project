import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';
import { selectProfileReadonly } from '../../model/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectUserAuthData } from '@/entities/user';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

import { Button, ButtonVariant } from '@/shared/ui/button';
import { HStack } from '@/shared/ui/stack';

interface EditableProfileCardHeaderProps {
	className?: string;
	isLoading?: boolean;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
	const { className, isLoading } = props;
	const { t } = useTranslation('profile');

	const dispatch = useAppDispatch();
	const readonly = useSelector(selectProfileReadonly);
	const authData = useSelector(selectUserAuthData);
	const profileData = useSelector(selectProfileData);

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
		<HStack className={className} justify='end' gap={8} width='max'>
			{canEdit && !isLoading && (
				<HStack gap={16} >
					{readonly
						? (
							<Button
								onClick={onEdit}
								data-testid='EditableProfileCardHeader.EditButton'
								key='editButton'
							>
								{t('edit')}
							</Button>
						)
						: (
							<>
								<Button
									variant={ButtonVariant.OutlineRed}
									onClick={onCancelEdit}
									data-testid='EditableProfileCardHeader.CancelButton'
									key='cancelButton'
								>
									{t('cancel')}
								</Button>
								<Button
									onClick={onSave}
									data-testid='EditableProfileCardHeader.SaveButton'
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
