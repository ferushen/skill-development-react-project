import { Profile } from 'entities/profile';

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
