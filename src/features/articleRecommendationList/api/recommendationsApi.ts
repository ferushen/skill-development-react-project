import { Article } from 'entities/article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		// generic: <returned value, input argument>
		getArticleRecommendationList: build.query<Article[], number>({
			// query возвращает все настройки http-запроса
			query: (limit) => ({
				url: '/articles',
				params: {
					_limit: limit,
				},
			}),
		}),
	}),
});

export const useArticleRecommendationList =
	recommendationsApi.useGetArticleRecommendationListQuery;
