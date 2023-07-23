/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
// import { withTranslation } from 'react-i18next';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Test render withTranslation', () => {
		componentRender(<Sidebar />);
		/*
		const SidebarWithTranslation = withTranslation()(Sidebar);
		renderWithTranslation(<SidebarWithTranslation />);
		*/
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toggle', () => {
		componentRender(<Sidebar />,);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		expect(screen.getByTestId('sidebar').childNodes[0]).toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar').childNodes[0]).not.toHaveClass('collapsed');
	});
});