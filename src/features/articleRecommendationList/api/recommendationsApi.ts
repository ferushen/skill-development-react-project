import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationList: build.query({
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
