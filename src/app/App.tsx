/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';

import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/themeProvider';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { theme } = useTheme();

	return (
		<div className={cn('app', {}, [])}>
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
