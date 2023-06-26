import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

export interface Profile {
	id?: string;
	firstname?: string;
	lastname?: string;
	age?: string;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}
