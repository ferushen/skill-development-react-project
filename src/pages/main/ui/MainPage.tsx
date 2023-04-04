import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<div style={{ color: 'black' }}>
			{t('main_page')}
		</div>
	);
};

export default MainPage;