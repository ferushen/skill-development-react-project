import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		// generic: <returned value, input argument>
		getNotifications: build.query<Notification[], null>({
			// query возвращает все настройки http-запроса
			query: () => ({
				url: '/notifications',
			}),
		}),
	}),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
