/*import { classNames } from './classNames';*/
import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with only one param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('with additional class', () => {
		const expected = 'someClass addClassOne addClassTwo';
		expect(classNames('someClass', {}, ['addClassOne', 'addClassTwo'])).toBe(
			expected
		);
	});

	test('with mods', () => {
		const expected = 'someClass modeClassOne modeClassTree';
		expect(
			classNames(
				'someClass',
				{ modeClassOne: true, modeClassTwo: false, modeClassTree: true },
				[]
			)
		).toBe(expected);
	});

	test('with additional classes and mods', () => {
		const expected =
			'someClass addClassOne addClassTwo modeClassOne modeClassTwo';
		expect(
			classNames(
				'someClass',
				{ modeClassOne: true, modeClassTwo: true, modeClassTree: false },
				['addClassOne', 'addClassTwo']
			)
		).toBe(expected);
	});

	test('with only additional classes', () => {
		const expected = 'addClassOne addClassTwo';
		expect(classNames('', {}, ['addClassOne', 'addClassTwo'])).toBe(expected);
	});

	test('empty params', () => {
		const expected = '';
		expect(classNames('')).toBe(expected);
	});

	test('with undefined mods', () => {
		const expected = 'someClass modeClassOne';
		expect(
			classNames(
				'someClass',
				{ modeClassOne: true, modeClassTwo: false, modeClassTree: undefined },
				[]
			)
		).toBe(expected);
	});
});
