import { act, cleanup, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from '@/entities/profile';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { profileReducer } from '../../model/slice/profileSlice';
import { $api } from '@/shared/api/api';

/*import { setup } from '@/shared/lib/tests/setup/setup';*/

/*import { expect } from '@jest/globals';*/

const mockProfileData: Profile = {
	id: '1',
	firstname: 'Николай',
	lastname: 'Никола',
	age: '25',
	currency: 'RUB' as Currency,
	country: 'Russia' as Country,
	city: 'Saint-Petersburg',
	username: 'SnowOrWeak',
};

const options = {
	initialState: {
		profile: {
			readonly: true,
			data: mockProfileData,
			form: mockProfileData,
		},
		user: {
			authData: {
				id: '1',
			}
		}
	},
	asyncReducers: {
		profile: profileReducer
	}
};



describe('features/EditableProfileCard', () => {

	beforeEach(() => {
		jest.spyOn($api, 'get').mockReturnValue(
			Promise.resolve({
				data: mockProfileData,
			}),
		);

	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should change from read-only mode to editable mode by clicking edit-button', async () => {
		const user = userEvent.setup();


		componentRender(<EditableProfileCard id='1' />, options);

		await act(async () => {
			screen.debug();

			await waitForElementToBeRemoved(async () => {
				await screen.queryByTestId('ProfileCard.Loader');
			});
			screen.debug();

			await user.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

			await waitFor(() => {
				expect(screen.queryByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
			});
		});



		cleanup();

		//componentRender(<EditableProfileCard id='1' />, options);
		//fireEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
		//await screen.findByTestId('EditableProfileCardHeader.CancelButton');
		//fireEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
		//expect(screen.queryByTestId('EditableProfileCardHeader.CancelButton')).not.toBeInTheDocument();
		//cleanup();
	});

	test.skip('should be returned to original values of input fields by clicking cancel-button', async () => {
		await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

		await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
		expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');
		await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'NewFirstName');
		expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('NewFirstName');

		await userEvent.clear(screen.getByTestId('ProfileCard.age'));
		expect(screen.getByTestId('ProfileCard.age')).toHaveValue('');
		await userEvent.type(screen.getByTestId('ProfileCard.age'), '32');
		expect(screen.getByTestId('ProfileCard.age')).toHaveValue('32');

		await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
		expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Николай');
		expect(screen.getByTestId('ProfileCard.age')).toHaveValue('25');
	});

	test.skip('validation error with invalid firstname value', async () => {
		await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

		await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

		await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
		//expect(await screen.findByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
		await waitFor(() => screen.getByTestId('EditableProfileCard.Error.Paragraph'));
	});

	test.skip('correctly changed firstname should be saved successfully', async () => {
		// мокаем put-запрос для сохранения данных формы
		const mockPutReq = jest.spyOn($api, 'put');

		userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

		userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
		userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'V@lidN-aMeWit(h');
		// ожидаем что все недопустимые символы удалятся
		expect(screen.getByTestId<HTMLInputElement>('ProfileCard.firstname')).toHaveValue('VlidNaMeWith');

		userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
		expect(mockPutReq).toHaveBeenCalled();

		await waitForElementToBeRemoved(() => screen.getByTestId('ProfileCard.Loader'));
		// ожидаем что firstname будет корректным после сохранения
		expect(screen.getByTestId<HTMLInputElement>('ProfileCard.firstname')).toHaveValue('VlidNaMeWith');
	});
});