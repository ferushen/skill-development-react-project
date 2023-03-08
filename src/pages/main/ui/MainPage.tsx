import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

const MainPage = () => {
	const { t } = useTranslation('main');

	console.log('render main page');
	return (
		<div>
			{t('Главная страница')}
			<Counter />
		</div>
	);
};

export default MainPage;