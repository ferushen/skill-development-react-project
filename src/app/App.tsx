import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { selectUserInitialized, userActions } from '@/entities/user';

import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

const App = () => {
	const dispatch = useAppDispatch();
	const initialized = useSelector(selectUserInitialized);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={'app'}>
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
