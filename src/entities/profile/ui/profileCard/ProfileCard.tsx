import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading';

import { Button } from 'shared/ui';
import { Input } from 'shared/ui/input/Input';
import { Text } from 'shared/ui/text/Text';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
	const { className } = props;
	const { t } = useTranslation('profile');

	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	return (
		<div className={cn(cls.profileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль')} />
			</div>
			<div className={cls.content}>
				<div className={cls.data}>
					<Input
						value={data?.firstname}
						placeholder={t('Ваша имя')}
						className={cls.input}
					/>
					<Input
						value={data?.lastname}
						placeholder={t('Ваша фамилия')}
						className={cls.input}
					/>
				</div>
				<div className={cls.sidebar}>
					<Button className={cls.editBtn}>
						{t('Редактировать')}
					</Button>
				</div>
			</div>
		</div>
	);
};