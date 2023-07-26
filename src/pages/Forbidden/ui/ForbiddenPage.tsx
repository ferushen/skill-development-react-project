import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const ForbiddenPage = () => {
	const { t } = useTranslation();

	return (
		<Page data-testid='ForbiddenPage'>
			{t('no_access_to_the_page')}
		</Page>
	);
};

export default memo(ForbiddenPage);