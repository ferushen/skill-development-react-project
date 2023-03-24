import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

/*
const baseUrl = __IS_DEV__
	? 'http://localhost:8000'
	: 'https://prodationreal.biz';
*/

export const $api = axios.create({
	// url на котором крутится json-server
	baseURL: __API__,
	headers: {
		// заголовок для получения данных АВТОРИЗОВАННЫМИ пользователями
		authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
	},
});
