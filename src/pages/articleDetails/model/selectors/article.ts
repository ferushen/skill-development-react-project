import { createSelector } from '@reduxjs/toolkit';
import { selectArticleDetailsData } from 'entities/article';
import { selectUserAuthData } from 'entities/user';

export const selectCanEditArticle = createSelector(
	selectArticleDetailsData,
	selectUserAuthData,
	(article, user) => {
		if (!article || !user) {
			return false;
		}

		return article.user.id === user.id;
	}
);
