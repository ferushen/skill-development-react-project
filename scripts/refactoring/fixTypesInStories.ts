import { Project } from 'ts-morph';

const project = new Project({});

// добавляем файлы с исходным кодом, с которыми будем работать
project.addSourceFilesAtPaths(['src/**/AppLink.stories.tsx']);

// получаем все stories
const files = project.getSourceFiles();

files.forEach((sourceFile) => {
	console.log('FILE: ', sourceFile.getBaseName());
	const importDeclarations = sourceFile.getImportDeclarations();

	importDeclarations.forEach((importDeclaration) => {
		const importClause = importDeclaration.getImportClause();
		const namedImportsIdentifiersStr = importClause?.getText();
		console.log('@@@', namedImportsIdentifiersStr);
		const namedImportsIdentifiersArr = namedImportsIdentifiersStr?.match(
			/ComponentStory|ComponentMeta/g
		);

		if (namedImportsIdentifiersArr) {
			console.log('NEED FIX');
			if (importClause) {
				const namedImportsIdentifiers = importClause.getNamedImports();

				for (const identifier of namedImportsIdentifiers) {
					switch (identifier.getName()) {
						case 'ComponentStory':
							identifier.setName('StoryFn');
							break;
						case 'ComponentMeta':
							identifier.setName('Meta');
							break;
						default:
							throw new Error('Why i am here?');
					}
				}
			}
		}

		/*const namedImportsIdentifiers = importClause?.getNamedImports().getText();

		if (namedImports?.includes('ComponentStory') || )*/
	});

	const exportAssignments = sourceFile.getExportAssignments()[0].getDescendantStatements();
	const exportAssignment = sourceFile.getExportAssignment(
		(assignment) => !assignment.isExportEquals()
	);

	const exportExpression = exportAssignment?.getExpression();
	//const asd1 = exportExpression?.getType().getApparentType().getAliasSymbol()?;
	const asd2 = exportExpression
		?.getType()
		.getBaseTypes()
		.forEach((type) => console.log('@@@@', type));

	/*sourceFile.getStatements().;*/
	//const exportDecs2 = sourceFile.getExportedDeclarations();

	console.log('@exportAssignment', exportAssignments);
	console.log('@asd2', asd2);

	//console.log('exportDecs2', exportDecs2);

	/*testExports.forEach((testExport) => {
		testExport.getNodeProperty('');
	});

	exportAssignments.forEach((exportAssignment) => {
		if (Node.isAsExpression(exportAssignment.getExpression())) {
			exportAssignment.console.log(exportAssignment.getStructure().expression);
		}
	});*/
});

// сохранение для применения изменений
/*project.save();*/
