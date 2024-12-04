import { Stopwatch } from '@sapphire/stopwatch';
import chalk from 'chalk';
import { gray, isColorSupported } from 'colorette';
import fsp from 'fs/promises';
import { Console } from 'node:console';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { inspect, type InspectOptions } from 'node:util';
import prettier from 'prettier';
import { RouteObject } from 'react-router-dom';

interface SitemapObject {
	description: string;
	label: string;
	href: string;
}

interface Meta {
	description?: string;
	params: Array<string>;
	name: string;
	location?: string;
	locked: boolean;
}

interface Page {
	file: string;
	name: string;
	meta: Meta;
	base: string;
	relative: string;
}

const PrettierConfig: prettier.Options = {
	parser: 'typescript',
	arrowParens: 'always',
	bracketSameLine: true,
	bracketSpacing: true,
	endOfLine: 'crlf',
	htmlWhitespaceSensitivity: 'css',
	jsxSingleQuote: true,
	printWidth: 120,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	semi: true,
	tabWidth: 8,
	trailingComma: 'es5',
	useTabs: true,
};

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatName(str: string) {
	const formatted = str.replace(/^(\d+)(.*)/, (_, num, rest) => `${rest}${num}`);
	return formatted.replace(/[-_\/](\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

class Logger {
	protected preprocess(values: readonly unknown[]) {
		const inspectOptions: InspectOptions = { colors: isColorSupported, depth: 0 };
		return values
			.map((value) => (typeof value === 'string' ? value : inspect(value, inspectOptions)))
			.join(' ');
	}

	info(...values: readonly unknown[]) {
		const Time = new Date().toLocaleTimeString();

		new Console(process.stdout).info(
			gray(Time),
			chalk.bold(chalk.green('[router]')),
			this.preprocess(values)
		);
	}
}

export class Router {
	private readonly logger = new Logger();
	private routes: Array<RouteObject> = [];
	private sitemap: Array<SitemapObject> = [];
	private pages: Array<Page> = [];

	private readonly __filename = url.fileURLToPath(import.meta.url);
	private readonly __dirname = path.dirname(this.__filename);
	private readonly pagesDirectory = path.join(this.__dirname, '../pages');
	private readonly srcDirectory = path.join(this.__dirname, '../');
	private readonly configDirectory = path.join(this.__dirname, '../configuration');

	async getPageFiles(dir: string) {
		const dirents = fs.readdirSync(dir, { withFileTypes: true });

		for (const dirent of dirents) {
			const fullPath: string = path.resolve(dir, dirent.name);

			if (dirent.isDirectory()) this.pages = this.pages.concat(await this.getPageFiles(fullPath));
			else if (dirent.isFile() && dirent.name.endsWith('.tsx')) {
				const MetaFileName = path.join(
					this.pagesDirectory,
					dirent.name.replace('.tsx', '.meta.json')
				);

				let MetaContent: Meta = {
					description: undefined,
					params: [],
					name: capitalize(path.basename(fullPath, '.tsx')),
					location: undefined,
					locked: false,
				};

				if (fs.existsSync(MetaFileName)) {
					MetaContent = JSON.parse(
						await fsp.readFile(
							new URL(url.pathToFileURL(MetaFileName).toString()),
							'utf-8'
						)
					);

					if (MetaContent.location)
						MetaContent.location = MetaContent.location.toLowerCase();
				}

				this.pages.push({
					file: fullPath,
					name: dirent.name,
					meta: MetaContent,
					base: path.basename(fullPath, '.tsx'),
					relative: path
						.relative(this.pagesDirectory, fullPath)
						.replace(/\\/g, '/')
						.replace('.tsx', ''),
				});
			}
		}

		return this.pages;
	}

	async generateRoutes() {
		for (var page of this.pages) {
			const relativePath = `./${page.relative.replace(/\\/g, '/').replace('.tsx', '')}`;
			const dirName = path.dirname(path.relative(this.pagesDirectory, page.file)).replace(/\\/g, '/');

			const componentName = capitalize(
				formatName(dirName === '.' ? page.base : `${dirName}/${page.base}`)
			);

			const description = page.meta.description ? `'${page.meta.description}'` : undefined;
			const params = page.meta.params ? page.meta.params.map((p: string) => `/:${p}`).join('/') : '';

			const isIndexFile = page.base === 'index';
			const location = page.meta.location ? page.meta.location.toLowerCase() : undefined;

			let routePath: string = location
				? location
				: isIndexFile
					? dirName === '.'
						? '/'
						: `/${dirName}`
					: relativePath.replace(/^\.\//, '/');

			if (this.routes.find((r) => r.path === routePath.toLowerCase())) continue;

			routePath += params;

			this.routes.push({
				path: routePath.toLowerCase(),
				element: page.meta.locked
					? `(process.env.NODE_ENV === 'development' ? <${componentName} Location='${page.meta.name}' Description={${description}} /> : <Unauthorised/>)`
					: `<${componentName} Location='${page.meta.name}' Description={${description}} />`,
				index: isIndexFile,
			});

			const anyRoute = /\*/.test(routePath.toLowerCase());

			if (!(anyRoute || page.meta.locked))
				this.sitemap.push({
					href: routePath.toLowerCase(),
					description: description
						? description
						: 'Design websites alongside professionals. Design with HotBeans website developers.',
					label: page.meta.name,
				});
		}

		return;
	}

	async run() {
		const stopwatch = new Stopwatch();
		this.logger.info('Building new Router...');

		await this.getPageFiles(this.pagesDirectory);
		await this.generateRoutes();

		const uniquePages = this.pages.filter(
			(page, index, self) => self.findIndex((p) => p.file === page.file) === index
		);

		const imports = uniquePages
			.map((page) => {
				const relativePath = `@pages/${page.relative.replace(/\\/g, '/').replace('.tsx', '')}`;
				const dirName = path
					.dirname(path.relative(this.pagesDirectory, page.file))
					.replace(/\\/g, '/');

				const isRoot = dirName === '.';
				const uniqueExportName = isRoot
					? capitalize(formatName(page.base))
					: capitalize(formatName(`${dirName}/${page.base}`));

				return `import ${uniqueExportName} from '${relativePath}';`;
			})
			.join('\n');

		const router: RouteObject = {
			path: '/',
			children: this.routes,
		};

		const routerContent = await prettier.format(
			`// Generated by Router.ts by ninjaninja140.

// Dependency Imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Unauthorised from '@components/Unauthorised';

// Page Imports
${imports}

// Router Object
const router = createBrowserRouter([{
  path: '${router.path}',
  children: ${JSON.stringify(router.children, null, 2)
		.replace(/"(<.*?>)"/g, '$1')
		.replace(/"(\(.*?\))"/g, '$1')
		.replace(/: (true|false)/g, ': $1')}
}]);

// Router Exports
export default () => <RouterProvider router={router} />
`,
			PrettierConfig
		);

		const sitemapContent = await prettier.format(JSON.stringify(this.sitemap), {
			...PrettierConfig,
			parser: 'json',
		});

		fs.writeFileSync(path.join(this.srcDirectory, './Router.tsx'), routerContent);
		fs.writeFileSync(path.join(this.configDirectory, './Routes.json'), sitemapContent);

		this.logger.info(
			'Router built successfully!',
			chalk.italic(chalk.gray(`(${stopwatch.stop().toString()})`))
		);
	}
}

await new Router().run()