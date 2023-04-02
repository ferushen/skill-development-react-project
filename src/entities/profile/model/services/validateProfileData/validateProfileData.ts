import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.NoData];
	}
	// поля, которые хотим провалидировать
	const { firstname, lastname, age, country } = profile;
	// массив с валидационными ошибками
	const errors: ValidateProfileError[] = [];

	if (!firstname || !lastname) {
		errors.push(ValidateProfileError.IncorrectUserData);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.IncorrectAge);
	}

	if (!country) {
		errors.push(ValidateProfileError.IncorrectCountry);
	}

	return errors;
};
