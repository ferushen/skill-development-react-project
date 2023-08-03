import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Text } from '@/shared/ui/text';

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
		<Page
			className={className}
			data-testid='ProfilePage'
		>
			<Text title={t('profile')} />
			<EditableProfileCard id={id} />
		</Page>
	);
};

export default ProfilePage;
