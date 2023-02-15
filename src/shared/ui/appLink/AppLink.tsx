import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

/* 
const appLinkThemeVariants = ['primary', 'secondary'] as const;
type AppLinkTheme = (typeof appLinkThemeVariants)[number]; 
*/

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={cn(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};