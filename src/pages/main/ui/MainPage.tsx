import { useTranslation } from 'react-i18next';
import { ListBox, ListBoxOption } from 'shared/ui/listBox/ListBox';
import { Page } from 'widgets/page/Page';

const MainPage = () => {
	const { t } = useTranslation('main');

	const options: ListBoxOption[] = [
		{ value: 'opt1', content: 'опция-1' },
		{ value: 'opt2', content: 'опция-2' },
		{ value: 'opt3', content: 'опция-3', disabled: true },
		{ value: 'opt4', content: 'опция-4' },
	];

	return (
		<Page>
			{t('main_page')}

			<ListBox
				label='LABEL'
				options={options}
				defaultValue='Выберите что-нибудь'
				value={undefined}
				onChange={(value) => { }}
			/>
		</Page>
	);
};

export default MainPage;