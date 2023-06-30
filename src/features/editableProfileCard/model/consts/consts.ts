export enum ValidateProfileError {
	ServerError = 'SERVER_ERROR',
	NoData = 'NO_DATA',
	EmptyUserData = 'EMPTY_USER_DATA',
	InvalidSymbolsInUsername = 'INVALID_SYMBOLS_IN_USERNAME',
	InvalidSymbolsInFirstname = 'INVALID_SYMBOLS_IN_FIRSTNAME',
	InvalidSymbolsInLastname = 'INVALID_SYMBOLS_IN_LASTNAME',
	InvalidUsernameLength = 'INVALID_USERNAME_LENGTH',
	InvalidFirstnameLength = 'INVALID_FIRSTNAME_LENGTH',
	InvalidLastnameLength = 'INVALID_LASTNAME_LENGTH',
	IncorrectAgeFormat = 'INCORRECT_AGE_FORMAT',
}
