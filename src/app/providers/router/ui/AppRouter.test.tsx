import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
	getRouteAbout,
	getRouteAdminPanel,
	getRouteProfile,
} from '@/shared/const/router';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { UserRole } from '@/entities/user';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { Profile } from '@/entities/profile';
import { $api } from '@/shared/api/api';

const data: Profile = {
	firstname: 'Николай',
	lastname: 'Никола',
	age: '25',
	currency: Currency.RUB,
	country: Country.Russia,
	city: 'Saint-Petersburg',
	username: 'SnowOrWeak',
	avatar: 'url',
};

describe('app/router/AppRouter', function () {
	test('Страница должна отрендериться', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});

	test('Страница не найдена', async () => {
		componentRender(<AppRouter />, {
			route: '/missing-route',
		});

		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});

	test('Редирект на главную если пользователь не авторизован', async () => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((_) => ({
				matches: false,
			})),
		});

		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					authData: undefined,
				},
			},
		});

		const loader = screen.queryByTestId('Loader');
		await waitForElementToBeRemoved(loader);
		expect(loader).not.toBeInTheDocument();

		const page = await screen.findByTestId('MainPage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ к закрытой странице если пользователь авторизован', async () => {
		jest.spyOn($api, 'get').mockResolvedValue({ data });

		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					_initialized: true,
					authData: {
						id: '1',
					},
				},
			},
		});

		const loader = screen.queryByTestId('Loader');
		await waitForElementToBeRemoved(loader, { timeout: 2000 });
		expect(loader).not.toBeInTheDocument();

		const page = await screen.findByTestId('ProfilePage');
		expect(page).toBeInTheDocument();

		jest.clearAllMocks();
	});

	test('Доступ к запрещенной странице если пользователь не обладает нужной ролью', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_initialized: true,
					authData: {},
				},
			},
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});

	test('Доступ к запрещенной странице если пользователь обладает нужной ролью', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_initialized: true,
					authData: {
						roles: [UserRole.Admin],
					},
				},
			},
		});

		const page = await screen.findByTestId('AdminPanel');
		expect(page).toBeInTheDocument();
	});
});
