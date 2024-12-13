/// <reference types="vite/client" />
/// <reference types="node" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	const content: React.FC<React.SVGProps<SVGElement>>;
	export default content;
}

declare module '@env' {
	const env: NodeJS.ProcessEnv = process.env;
	export default env;
}

declare module '*.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
