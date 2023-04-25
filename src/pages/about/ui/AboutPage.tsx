import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
	const { t } = useTranslation('about');

	return (
		<Page>
			{t('about_us')}
		</Page>
	);
};

export default AboutPage;