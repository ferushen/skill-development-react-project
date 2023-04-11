import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonVariant } from 'shared/ui/button/Button';

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
		<Button onClick={throwHandler} variant={ButtonVariant.BACKGROUND}>
			{t('throw_error')}
		</Button >
	);
};