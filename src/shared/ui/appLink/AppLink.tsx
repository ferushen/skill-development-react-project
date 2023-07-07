/* eslint-disable react/prop-types */
import { ForwardedRef, forwardRef, memo, ReactNode } from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { classNames as cn } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

/* 
const AppLinkVariantVariants = ['primary', 'secondary'] as const;
type AppLinkVariant = (typeof AppLinkVariantVariants)[number]; 
*/

export enum AppLinkVariant {
	Primary = 'primary',
	Inverted = 'inverted',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children?: ReactNode;
}

export const AppLink = memo(forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.Primary,
		...otherProps
	} = props;

	return (
		<Link
			ref={ref}
			to={to}
			className={cn(cls.appLink, {}, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
}));
