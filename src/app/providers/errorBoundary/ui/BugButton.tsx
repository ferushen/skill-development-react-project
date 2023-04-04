import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { ButtonVariant } from 'shared/ui/button/Button';

export const BugButton: FC = () => {
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