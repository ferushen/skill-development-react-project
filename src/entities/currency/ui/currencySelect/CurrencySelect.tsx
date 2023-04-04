import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { Select } from 'shared/ui/select/Select';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	readonly?: boolean;
	onChange?: (value: Currency) => void;
}

const options = Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const {
		className,
		value,
		readonly,
		onChange
	} = props;
	const { t } = useTranslation();

	const changeHandler = useCallback((value: string) => {
		onChange?.(value as Currency);
	}, [onChange]);

	return (
		<Select
			className={className}
			label={t('currency')}
			options={options}
			value={value}
			readonly={readonly}
			onChange={changeHandler}
		/>
	);
}); 