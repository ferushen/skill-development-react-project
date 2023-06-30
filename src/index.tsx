import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'app/providers/storeProvider';
import { ThemeProvider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/errorBoundary';

import App from 'app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Контейнер не найден!');
}

const root = createRoot(container);
root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
);