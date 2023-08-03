import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/consts/country';

import { ListBox } from '@/shared/ui/popups';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	readonly?: boolean;
	onChange?: (value: Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
	const { className, value, readonly, onChange } = props;
	const { t } = useTranslation();

	const options = useMemo(() => {
		return Object.entries(Country).map((val) => ({
			value: val[0] as Country,
			content: t(val[1]),
		}));
	}, [t]);

	const changeHandler = useCallback(
		(value: Country) => {
			onChange?.(value);
		},
		[onChange]
	);

	return (
		<ListBox
			className={className}
			variant='profileInput'
			label={t('country')}
			ratio='ratio_40_60'
			options={options}
			value={value}
			defaultValue={t('not_specified')}
			readonly={readonly}
			onChange={changeHandler}
		/>
	);
});
