import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файлы с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx']);

// получаем все ts(x)-файлы
const files = project.getSourceFiles();

function isLocalAbsolute(value: string) {
	const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
	return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
	const importDeclarations = sourceFile.getImportDeclarations();

	importDeclarations.forEach((importDeclaration) => {
		const value = importDeclaration.getModuleSpecifierValue();

		if (isLocalAbsolute(value)) {
			importDeclaration.setModuleSpecifier(`@/${value}`);
		}
	});
});

// сохранение для применения изменений
project.save();
