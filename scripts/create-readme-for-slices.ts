import { Project } from 'ts-morph';
import path from 'path';

type Slice = 'Page' | 'Entity' | 'Feature' | 'Widget';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.md');
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sliceMap: Record<string, Slice> = {
	pages: 'Page',
	entities: 'Entity',
	features: 'Feature',
	widgets: 'Widget',
};

const createReadmeForSlice = (slice: string) => {
	if (!Object.keys(sliceMap).includes(slice)) {
		return;
	}

	const slicePaths = path.resolve(__dirname, '..', 'src', `${slice}`);
	const sliceDirectory = project.getDirectory(slicePaths);
	const componentsDirectories = sliceDirectory?.getDirectories();

	componentsDirectories?.forEach((directory) => {
		const readmeFilePath = `${directory.getPath()}/README.md`;
		const readmeFile = directory.getSourceFile(
			(f) => f.getBaseName() === 'README.md'
		);
		if (!readmeFile) {
			const sourceCode = `## ${sliceMap[slice]} \`${directory.getBaseName()}\``;
			const file = directory.createSourceFile(readmeFilePath, sourceCode, {
				overwrite: true,
			});
			file.save();
		}
	});
};

const createReadmesForSlices = (slices: string[]) => {
	slices.forEach((slice) => createReadmeForSlice(slice));
};

const slices = ['features', 'entities', 'widgets', 'pages'];

createReadmesForSlices(slices);

project.save();
