/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
	test('test render', () => {
		render(<Button>test</Button>);
		expect(screen.getByText('test')).toBeInTheDocument();
	});
	test('test classNames', () => {
		render(<Button theme={ThemeButton.CLEAR}>test</Button>);
		expect(screen.getByText('test')).toHaveClass('clear');
		screen.debug;
	});
});