import { Profile } from 'entities/profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.NoData];
	}

	// поля, которые хотим провалидировать
	const { username, firstname, lastname, age } = profile;

	// массив с валидационными ошибками
	const errors: ValidateProfileError[] = [];

	// проверка на пустые значения обязательных к заполнению полей
	if (!username || !firstname) {
		errors.push(ValidateProfileError.EmptyUserData);
	}

	if (username) {
		// проверка на длину символов поля "username"
		if (username.length < 6 || username.length > 24) {
			errors.push(ValidateProfileError.InvalidUsernameLength);
		}

		// проверка на недопустимые символы в поле "username"
		if (!new RegExp('^([a-zA-Z_-]+|[а-яА-ЯёЁ_-]+)$').test(username)) {
			errors.push(ValidateProfileError.InvalidSymbolsInUsername);
		}
	}

	if (firstname) {
		// проверка на длину символов поля "firstname"
		if (firstname.length < 2 || firstname.length > 24) {
			errors.push(ValidateProfileError.InvalidFirstnameLength);
		}

		// проверка на недопустимые символы в поле "firstname"
		if (!/^([a-zA-Z]+|[а-яА-ЯёЁ]+)$/g.test(firstname)) {
			errors.push(ValidateProfileError.InvalidSymbolsInFirstname);
		}
	}

	if (lastname) {
		// проверка на длину символов поля "lastname"
		if (lastname.length < 2 || lastname.length > 24) {
			errors.push(ValidateProfileError.InvalidLastnameLength);
		}

		// проверка на недопустимые символы в поле "lastname"
		if (lastname && !/^([a-zA-Z]+|[а-яА-ЯёЁ]+)$/g.test(lastname)) {
			errors.push(ValidateProfileError.InvalidSymbolsInLastname);
		}
	}

	// проверка на корректный формат поля "age"
	if (age && (!Number.isInteger(+age) || +age < 0 || +age > 120)) {
		errors.push(ValidateProfileError.IncorrectAgeFormat);
	}

	return errors;
};
