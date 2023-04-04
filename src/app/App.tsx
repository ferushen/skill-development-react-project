import { Suspense, useEffect } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserInitialized, userActions } from 'entities/user';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
	const dispatch = useAppDispatch();
	const initialized = useSelector(getUserInitialized);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={cn('app', {}, [])}>
			<Suspense fallback=''>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					{initialized && <AppRouter />}
				</div>
			</Suspense>
		</div>
	);
};

export default App;
