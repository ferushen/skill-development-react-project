import { memo, ReactNode } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

/* 
const AppLinkVariantVariants = ['primary', 'secondary'] as const;
type AppLinkVariant = (typeof AppLinkVariantVariants)[number]; 
*/

export enum AppLinkVariant {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={cn(cls.appLink, {}, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});