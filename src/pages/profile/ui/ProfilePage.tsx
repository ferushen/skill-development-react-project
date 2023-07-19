import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets/page';
import { Text } from '@/shared/ui/text/Text';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation('profile');

	const { id } = useParams<{ id: string }>();

	if (!id) {
		return <Text title={t('profile_not_found')} />;
	}

	return (
		<Page className={cn('', {}, [className])}>
			<Text title={t('profile')} />
			<EditableProfileCard id={id} />
		</Page>
	);
};

export default ProfilePage;