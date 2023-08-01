let testProfileId = '';

describe('Взаимодействие с интерфейсом карточки профиля', () => {
	beforeEach(() => {
		cy.visit('');
		cy.login().then((data) => {
			testProfileId = data.id;
			cy.visit(`profile/${data.id}`);
		});
	});

	afterEach(() => {
		cy.resetProfile(testProfileId);
	});

	it('Успешная загрузка страницы профиля', () => {
		cy.getByTestId('ProfileCard.firstname').should('have.value', 'Тестик');
	});
	it('Редактирование полей профиля', () => {
		const newFirstname = 'ИзмененныйТестовичок';
		const newLastname = 'ИзмененныйЛастовичок';

		cy.updateProfile(newFirstname, newLastname);

		cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
		cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
	});
});
