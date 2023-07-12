import { ReactNode, memo, useCallback, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/themeProvider';
import { useAnimationLibs } from 'shared/lib/components/AnimationProvider';

import { Overlay } from 'shared/ui/overlay/Overlay';
import { Portal } from 'shared/ui/portal/Portal';

import cls from './Drawer.module.scss';

const height = window.innerHeight - 100;

interface DrawerProps {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	closeOnOverlayClick?: boolean;
	animationTime?: number;
}

export const DrawerContent = memo((props: DrawerProps) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		closeOnOverlayClick = true,
		animationTime = 280,
	} = props;

	const { theme } = useTheme();

	const { Spring, Gesture } = useAnimationLibs();
	const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

	const display = y.to((py) => (py < height ? 'block' : 'none'));

	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false });
	}, [api]);

	const closeDrawer = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
			onResolve: onClose,
		});
	};

	const bind = Gesture.useDrag(
		({
			last,
			velocity: [, vy],
			direction: [, dy],
			movement: [, my],
			cancel,
		}) => {
			if (my < -70) cancel();

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					closeDrawer();
				} else {
					openDrawer();
				}
			} else {
				api.start({ y: my, immediate: true });
			}
		},
		{
			from: () => [0, y.get()],
			duration: animationTime,
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true,
		}
	);

	useEffect(() => {
		if (isOpen) {
			openDrawer();
		}
	}, [api, isOpen, openDrawer]);

	if (!isOpen) {
		return null;
	}

	const contentStyle = {
		display,
		bottom: `calc(-100vh + ${height - 100}px)`,
		y
	};

	const overlayStyle = {
		display,
		opacity: y.to([0, height], [1, 0], 'clamp'),
	};

	return (
		<Portal>
			<div className={cn(cls.drawer, {}, [className, theme, 'app_drawer'])}>
				<Spring.a.div style={overlayStyle}>
					<Overlay onClick={closeOnOverlayClick ? () => closeDrawer() : undefined} />
				</Spring.a.div>
				<Spring.a.div
					className={cls.content}
					style={contentStyle}
					{...bind()}
				>
					{children}
				</Spring.a.div>
			</div>
		</Portal>
	);
});

export const Drawer = memo((props: DrawerProps) => {
	const { isLoaded } = useAnimationLibs();

	if (!isLoaded) {
		return null;
	}

	return <DrawerContent {...props} />;
});