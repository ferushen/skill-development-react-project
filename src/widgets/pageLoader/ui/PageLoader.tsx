import { classNames as cn } from '@/shared/lib/classNames/classNames';

import { Loader } from '@/shared/ui/loader';
import { HStack } from '@/shared/ui/stack';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<HStack className={cn(cls.pageLoader, {}, [className])}>
			<Loader />
		</HStack>
	);
};
