import { Country } from 'entities/country';
import { Currency } from 'entities/currency';

export interface Profile {
	id?: string;
	firstname?: string;
	lastname?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export enum ValidateProfileError {
	IncorrectUserData = 'INCORRECT_USER_DATA',
	IncorrectAge = 'INCORRECT_AGE',
	IncorrectCountry = 'INCORRECT_COUNTRY',
	NoData = 'NO_DATA',
	ServerError = 'SERVER_ERROR',
}

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	readonly: boolean;
	error?: string;
	validateErrors?: ValidateProfileError[];
}
