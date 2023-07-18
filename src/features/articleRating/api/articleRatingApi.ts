import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/rating';

interface GetArticleRatingArg {
	articleId: string;
	userId: string;
}

interface RateArticleArg {
	articleId: string;
	userId: string;
	rate: number;
	feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		// generic: <returned value, input argument>
		getArticleRating: build.query<Rating[], GetArticleRatingArg>({
			// query возвращает все настройки http-запроса
			query: ({ userId, articleId }) => ({
				url: '/article-ratings',
				params: {
					userId,
					articleId,
				},
			}),
		}),
		rateArticle: build.mutation<void, RateArticleArg>({
			// query возвращает все настройки http-запроса
			query: (arg) => ({
				url: '/article-ratings',
				method: 'POST',
				body: arg,
			}),
		}),
	}),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
