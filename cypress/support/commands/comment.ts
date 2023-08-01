export const addComment = (text: string) => {
	cy.getByTestId('AddCommentForm.Input').type(text);
	cy.getByTestId('AddCommentForm.Submit').click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			addComment(text: string): Chainable<void>;
		}
	}
}
