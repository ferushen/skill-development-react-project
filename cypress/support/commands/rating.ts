export const setRate = (rate = 5, feedback = 'feedback') => {
	cy.getByTestId(`StarRating.StarNumber${rate}`).click();
	cy.getByTestId('RatingCard.Input').type(feedback);
	cy.getByTestId('RatingCard.Submit').click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			setRate(rate: number, feedback: string): Chainable<void>;
		}
	}
}
