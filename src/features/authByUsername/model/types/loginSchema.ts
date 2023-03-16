// Описание State для формы авторизации
// Хранится: username, password, error, isLoading

export interface LoginSchema {
	username: string;
	password: string;
	isLoading: boolean;
	error?: string;
}
