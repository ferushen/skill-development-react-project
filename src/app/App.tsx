import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/themeProvider/lib/useTheme';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/sidebar';

import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={cn('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;