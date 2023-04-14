import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Article, ArticleType, ArticleBlockType } from '../../types/article';

const article: Article = {
	id: '1',
	title: 'Javascript news',
	subtitle: 'Что нового в JS за 2022 год?',
	img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 1022,
	createdAt: '26.02.2022',
	type: [ArticleType.IT],
	user: {
		id: '1',
		username: 'admin',
	},
	blocks: [
		{
			id: '1',
			type: ArticleBlockType.Text,
			title: 'Заголовок этого блока',
			paragraphs: [
				'Программа, которую по традиции называют «Hello, world!», очень проста.',
				'JavaScript — это язык, программы на котором можно выполнять в разных средах.',
				'Существуют и другие способы запуска JS-кода в браузере.',
			],
		},
		{
			id: '2',
			type: ArticleBlockType.Image,
			src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			title: 'Рисунок 1 - скриншот сайта',
		},
		{
			id: '3',
			type: ArticleBlockType.Code,
			code: 'const server = jsonServer.create();',
		},
	],
};

describe('fetchArticleById', () => {
	test('success fetch', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(fetchArticleById);

		// мокаем ответ от сервера
		thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));

		const result = await thunk.callThunk('1');

		// убеждаемся что запрос на сервер был отправлен
		expect(thunk.api.get).toHaveBeenCalled();
		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('fulfilled');
		// проверяем payload
		expect(result.payload).toEqual(article);
	});

	test('error fetch', async () => {
		// создаем инстанс TestAsyncThunk и вызываем thunk
		const thunk = new TestAsyncThunk(fetchArticleById);

		// мокаем ответ от сервера
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('2');

		// убеждаемся что async thunk отработал без ошибок
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
