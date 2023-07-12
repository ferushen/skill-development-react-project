import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

describe('fetchNextArticlesPage', () => {
	test('should change page and fetch new partial data', async () => {
		// создаем инстанс TestAsyncThunk с передачей в него инициализирующего состояния
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true,
			},
		});

		// вызываем async-thunk
		await thunk.callThunk();

		// ожидаем, что dispatch будет вызван 4 раза: pending, fulfilled, 2 dispatch внутри action
		expect(thunk.dispatch).toBeCalledTimes(4);

		// ожидаем, что fetchArticlesList будет вызван с аргументом, в котором № страницы = 3
		// expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });

		// поведение fetchArticlesList было изменено
		expect(fetchArticlesList).toHaveBeenCalled();
	});

	test('should not fetch new partial data: isLoading equal true', async () => {
		// создаем инстанс TestAsyncThunk с передачей в него инициализирующего состояния
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: true,
				hasMore: true,
			},
		});

		// вызываем async-thunk
		await thunk.callThunk();

		// ожидаем, что dispatch будет вызван 2 раза: pending, fulfilled
		expect(thunk.dispatch).toBeCalledTimes(2);

		// ожидаем, что fetchArticlesList не будет вызван
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});

	test('should not fetch new partial data: hasMore equal true', async () => {
		// создаем инстанс TestAsyncThunk с передачей в него инициализирующего состояния
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false,
			},
		});

		// вызываем async-thunk
		await thunk.callThunk();

		// ожидаем, что dispatch будет вызван 2 раза: pending, fulfilled
		expect(thunk.dispatch).toBeCalledTimes(2);

		// ожидаем, что fetchArticlesList не будет вызван
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
