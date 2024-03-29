import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonVariant } from '@/shared/ui/button';

export const BugButton = () => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();

	const throwHandler = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<Button onClick={throwHandler} variant={ButtonVariant.Background}>
			{t('throw_error')}
		</Button >
	);
};