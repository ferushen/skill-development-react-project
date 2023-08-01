export const updateProfile = (firstname: string, lastname: string) => {
	cy.getByTestId('EditableProfileCardHeader.EditButton').click();
	cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
	cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
	cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
	return cy.request({
		method: 'PUT',
		url: 'http://localhost:8000/profile/' + profileId,
		headers: { authorization: 'not-empty' },
		body: {
			id: '3',
			firstname: 'Тестик',
			lastname: 'Тестович',
			age: '16',
			currency: 'RUB',
			country: 'Russia',
			city: 'Saint-Petersburg',
			username: 'testuser',
			avatar: '',
		},
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(firstname: string, lastname: string): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
