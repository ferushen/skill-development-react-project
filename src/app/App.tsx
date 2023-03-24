/* eslint-disable i18next/no-literal-string */
import { Suspense, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/user';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

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
