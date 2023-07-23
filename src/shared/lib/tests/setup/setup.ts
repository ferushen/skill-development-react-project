import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { componentRender, componentRenderOptions } from '../componentRender/componentRender';

export function setup(tsx: ReactNode, opts?: componentRenderOptions) {
	return {
		user: userEvent.setup(),
		// Import `render` from the framework library of your choice.
		// See https://testing-library.com/docs/dom-testing-library/install#wrappers
		...componentRender(tsx, opts),
	};
}
