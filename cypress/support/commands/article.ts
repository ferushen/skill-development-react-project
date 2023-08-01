import type { Article } from '../../../src/entities/article';

const defaultArticle = {
	title: 'TESTING',
	subtitle: 'Разбираем гипотезы о конце Вселенной',
	img: 'https://kartinkin.net/uploads/posts/2021-07/1625159029_14-kartinkin-com-p-kosmicheskie-art-obekti-art-krasivo-15.jpg',
	views: 4721,
	createdAt: '23.04.2023',
	userId: '1',
	type: 'SCIENCE',
	blocks: [],
};

export const createArticle = (article?: Article) => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/articles',
			headers: { authorization: 'not-empty' },
			body: article ?? defaultArticle,
		})
		.then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
	return cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { authorization: 'not-empty' },
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;
			removeArticle(articleId: string): Chainable<void>;
		}
	}
}
