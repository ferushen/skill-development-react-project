import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeProvider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/errorBoundary';

import App from 'app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>,
	document.getElementById('root')
);