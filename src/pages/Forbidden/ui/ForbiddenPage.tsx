import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
	const { t } = useTranslation();

	return (
		<div data-testid='ForbiddenPage'>
			{t('no_access_to_the_page')}
		</div>
	);
};

export default memo(ForbiddenPage);