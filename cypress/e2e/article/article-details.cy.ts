let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
	beforeEach(() => {
		cy.login();
		cy.createArticle().then((article) => {
			currentArticleId = article.id;
			cy.visit(`articles/${article.id}`);
		});
	});

	afterEach(() => {
		cy.removeArticle(currentArticleId);
	});

	it('... и видит содержимое статьи', () => {
		cy.getByTestId('ArticleDetails.Information').should('exist');
	});

	it('... и видит рекомендуемые статьи', () => {
		cy.getByTestId('ArticleRecommendationList').should('exist');
	});

	it('... и оставляет комментарий', () => {
		cy.getByTestId('ArticleDetails.Information').should('exist');
		cy.getByTestId('AddCommentForm').scrollIntoView();
		cy.addComment('new comment');
		cy.getByTestId('CommentCard.Content').should('have.length', 1);
	});

	it('... и дает оценку статье', () => {
		cy.getByTestId('ArticleDetails.Information').should('exist');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(4, 'some feedback text');
		cy.get('[data-selected=true]').should('have.length', 4);
	});

	it('... и дает оценку статье (пример на стабах)', () => {
		cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
		cy.getByTestId('ArticleDetails.Information').should('exist');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(4, 'some feedback text');
		cy.get('[data-selected=true]').should('have.length', 4);
	});
});
