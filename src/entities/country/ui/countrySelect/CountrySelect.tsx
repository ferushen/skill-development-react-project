import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/types/country';

import { Select } from 'shared/ui/select/Select';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	readonly?: boolean;
	onChange?: (value: Country) => void;
}

const options = Object.entries(Country).map((val) => ({ value: val[0], content: val[1] }));

export const CountrySelect = memo((props: CountrySelectProps) => {
	const {
		className,
		value,
		readonly,
		onChange
	} = props;
	const { t } = useTranslation();

	const changeHandler = useCallback((value: string) => {
		onChange?.(value as Country);
	}, [onChange]);

	return (
		<Select
			className={className}
			label={t('Страна')}
			options={options}
			value={value}
			readonly={readonly}
			onChange={changeHandler}
		/>
	);
}); 