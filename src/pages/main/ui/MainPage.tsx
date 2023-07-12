/* eslint-disable */
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/button/Button';
import { Dropdown, ListBox, ListBoxOption, Popover } from '@/shared/ui/popups';
import { Page } from '@/widgets/page/Page';

import cls from './MainPage.module.scss';
import { VStack } from '@/shared/ui/stack';

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

			<VStack gap={40}>
				<VStack gap={8}>
					<b>{'LISTBOX'}</b>
					<ListBox
						label='LABEL'
						options={options}
						defaultValue='Выберите что-нибудь'
						value={undefined}
						onChange={(value) => { }}
					/>
				</VStack>

				<VStack gap={8}>
					<b>{'DROPDOWN'}</b>
					<Dropdown
						items={[
							{ content: 'опция-1' },
							{ content: 'опция-2' },
							{ content: 'опция-3' },
							{ content: 'опция-4' },
						]}
						trigger={<Button>TRIGGER</Button>}
					/>
				</VStack>

				<VStack gap={8}>
					<b>{'POPOVER'}</b>
					<Popover
						direction='bottom left'
						trigger={<Button>TRIGGER</Button>}
					>
						<div>{'опция-1'}</div>
						<div>{'опция-2'}</div>
						<div>{'опция-3'}</div>
						<div>{'опция-4'}</div>
					</Popover>
				</VStack>

				<Button className={cls['btn']}>Click</Button>

			</VStack>
		</Page>
	);
};

export default MainPage;