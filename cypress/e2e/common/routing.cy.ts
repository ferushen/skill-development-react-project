import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
	describe('Пользователь НЕ авторизован', () => {
		it('Переход на главную страницу', () => {
			cy.visit('/');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('Переход на главную страницу при открытии профиля', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('MainPage')).should('exist');
		});
		it('Открытие несуществующего маршрута', () => {
			cy.visit('/kakoytobred');
			cy.get(selectByTestId('NotFoundPage')).should('exist');
		});
	});
	describe('Пользователь авторизован', () => {
		beforeEach(() => {
			cy.login('user', '123');
		});
		it('Переход на главную страницу при открытии профиля', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('ProfilePage')).should('exist');
		});
	});
});
