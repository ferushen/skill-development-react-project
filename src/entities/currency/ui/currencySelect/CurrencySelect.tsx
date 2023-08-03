import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/consts/currency';

import { ListBox } from '@/shared/ui/popups';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	readonly?: boolean;
	onChange?: (value: Currency) => void;
}

const options = Object.entries(Currency).map((val) => ({
	value: val[0],
	content: val[1],
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const { className, value, readonly, onChange } = props;
	const { t } = useTranslation();

	const changeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange]
	);

	return (
		<ListBox
			className={className}
			variant='profileInput'
			label={t('currency')}
			ratio='ratio_40_60'
			options={options}
			value={value}
			defaultValue={t('not_specified')}
			readonly={readonly}
			onChange={changeHandler}
		/>
	);
});
