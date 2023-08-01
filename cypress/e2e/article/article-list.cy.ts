describe('Пользователь заходит на страницу со статьями', () => {
	beforeEach(() => {
		cy.login().then(() => {
			cy.visit('articles');
		});
	});

	it('... и статьи успешно подгружаются', () => {
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});

	it('... и статьи успешно подгружаются (на стабах (фикстурах))', () => {
		cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
		cy.getByTestId('ArticleList').should('exist');
		cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
	});
});
