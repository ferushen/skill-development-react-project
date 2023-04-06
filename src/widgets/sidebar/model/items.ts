import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'main_page',
		Icon: MainIcon,
	},
	{
		path: RoutePath.about,
		text: 'about_page',
		Icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: 'profile_page',
		Icon: ProfileIcon,
		authOnly: true,
	},
	{
		path: RoutePath.articles,
		text: 'articles_page',
		Icon: ArticleIcon,
		authOnly: true,
	},
];
