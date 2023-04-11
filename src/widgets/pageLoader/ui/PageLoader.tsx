import { FC } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { Loader } from 'shared/ui/loader/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
	return (
		<div className={cn(cls.pageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};