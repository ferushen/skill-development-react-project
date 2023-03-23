import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { profileReducer } from 'entities/profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
	const {
		className
	} = props;
	const { t } = useTranslation();

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={cn('', {}, [className])}>
				{t('PROFILE PAGE')}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;