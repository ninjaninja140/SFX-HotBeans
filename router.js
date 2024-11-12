const fs = require('fs');
const path = require('path');
const pagesDirectory = path.join(__dirname, 'src/pages');

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(str) {
	const formatted = str.replace(/^(\d+)(.*)/, (_, num, rest) => `${rest}${num}`);
	return formatted.replace(/[-_\/](\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function getTSXFiles(dir) {
	const dirents = fs.readdirSync(dir, { withFileTypes: true });
	let files = [];

	for (const dirent of dirents) {
		const fullPath = path.resolve(dir, dirent.name);

		if (dirent.isDirectory()) files = files.concat(getTSXFiles(fullPath));
		else if (dirent.isFile() && dirent.name.endsWith('.tsx')) files.push(fullPath);
	}

	return files;
}

const tsxFiles = getTSXFiles(pagesDirectory);

const indexContent = tsxFiles
	.map((file) => {
		const relativePath = `@pages/${path
			.relative(pagesDirectory, file)
			.replace(/\\/g, '/')
			.replace('.tsx', '')}`;
		const fileName = path.basename(file, '.tsx');
		const dirName = path.dirname(path.relative(pagesDirectory, file)).replace(/\\/g, '/');

		const isRoot = dirName === '.';
		const uniqueExportName = isRoot
			? capitalize(formatName(fileName))
			: capitalize(formatName(`${dirName}/${fileName}`));

		return `import ${uniqueExportName} from '${relativePath}';`;
	})
	.join('\n');

function readMetaFile(filePath) {
	const metaFilePath = `${filePath}.meta.json`;
	if (fs.existsSync(metaFilePath)) {
		return JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
	}
	return {};
}

function generateRoutes() {
	let routes = [];

	for (const file of tsxFiles) {
		const fileName = path.basename(file, '.tsx');
		const relativePath = `./${path.relative(pagesDirectory, file).replace(/\\/g, '/').replace('.tsx', '')}`;
		const dirName = path.dirname(path.relative(pagesDirectory, file)).replace(/\\/g, '/');

		const meta = readMetaFile(file.replace('.tsx', ''));
		const componentName = capitalize(formatName(dirName === '.' ? fileName : `${dirName}/${fileName}`));

		const description = meta.description ? `'${meta.description}'` : undefined;
		const params = meta.params ? meta.params.map((p) => `/:${p}`).join('/') : '';

		const isIndexFile = fileName === 'index';
		const locationName = meta.name ? meta.name : capitalize(fileName);

		let routePath = isIndexFile
			? dirName === '.'
				? '/'
				: `/${dirName}`
			: relativePath.replace(/^\.\//, '/');

		routePath += params;

		routes.push({
			path: routePath.toLowerCase(),
			element: `<${componentName} Location='${locationName}' Description={${description}} />`,
			index: isIndexFile,
		});
	}

	return routes;
}

const router = {
	path: '/',
	children: generateRoutes(),
};

const finalOutput = `import { createBrowserRouter, RouterProvider } from 'react-router-dom';\n${indexContent}\n\nconst router = createBrowserRouter([{
  path: '${router.path}',
  children: ${JSON.stringify(router.children, null, 2)
		.replace(/"(<.*?>)"/g, '$1')
		.replace(/: (true|false)/g, ': $1')}
}]);\n\nexport default () => <RouterProvider router={router} />`;

fs.writeFileSync(path.join(pagesDirectory, '../router.tsx'), finalOutput);

console.log('Router file generated successfully!');

