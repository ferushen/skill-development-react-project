import { createSelector } from '@reduxjs/toolkit';
import { selectUserAuthData } from '@/entities/user';

import {
	getRouteAbout,
	getRouteArticles,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router';

import type { SidebarItemType } from '../types/sidebar';

import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

export const getSidebarItems = createSelector(selectUserAuthData, (userData) => {
	const sidebarItemsList: SidebarItemType[] = [
		{
			path: getRouteMain(),
			text: 'main_page',
			Icon: MainIcon,
		},
		{
			path: getRouteAbout(),
			text: 'about_page',
			Icon: AboutIcon,
		},
	];

	if (userData) {
		sidebarItemsList.push(
			{
				path: getRouteProfile(userData.id),
				text: 'profile_page',
				Icon: ProfileIcon,
				authOnly: true,
			},
			{
				path: getRouteArticles(),
				text: 'articles_page',
				Icon: ArticleIcon,
				authOnly: true,
			}
		);
	}

	return sidebarItemsList;
});
